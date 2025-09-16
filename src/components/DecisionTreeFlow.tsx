import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DecisionTreeNode {
  question?: string;
  options?: Array<{
    text: string;
    next: string;
  }>;
  guidance?: {
    title: string;
    content: string;
    immediateActions: string[];
    nextSteps: string;
  };
}

interface DecisionTree {
  id: string;
  title: string;
  description: string;
  startNode: string;
  nodes: Record<string, DecisionTreeNode>;
}

interface DecisionTreeFlowProps {
  tree: DecisionTree;
  onComplete: (result: any) => void;
  onBack: () => void;
}

export function DecisionTreeFlow({ tree, onComplete, onBack }: DecisionTreeFlowProps) {
  const [currentNodeId, setCurrentNodeId] = useState(tree.startNode);
  const [path, setPath] = useState<string[]>([tree.startNode]);

  const currentNode = tree.nodes[currentNodeId];
  
  // If the current node doesn't exist, go back to start or previous node
  if (!currentNode) {
    console.error(`Node ${currentNodeId} not found in tree ${tree.id}`);
    const fallbackNodeId = path.length > 1 ? path[path.length - 2] : tree.startNode;
    if (fallbackNodeId !== currentNodeId) {
      setCurrentNodeId(fallbackNodeId);
      setPath(prev => prev.slice(0, -1));
      return null;
    }
    // If even the fallback fails, return to menu
    onBack();
    return null;
  }
  
  const progress = currentNode.guidance ? 100 : (path.length / (Object.keys(tree.nodes).length * 0.6)) * 100;

  const handleOptionSelect = (nextNodeId: string) => {
    // Check if the next node exists before navigating
    if (!tree.nodes[nextNodeId]) {
      console.error(`Target node ${nextNodeId} not found in tree ${tree.id}`);
      return;
    }
    setCurrentNodeId(nextNodeId);
    setPath(prev => [...prev, nextNodeId]);
  };

  const handleGoBack = () => {
    if (path.length > 1) {
      const newPath = path.slice(0, -1);
      setPath(newPath);
      setCurrentNodeId(newPath[newPath.length - 1]);
    } else {
      onBack();
    }
  };

  if (currentNode.guidance) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back
          </Button>
          <Progress value={100} className="flex-1 mx-4" />
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-3">
              <CheckCircle size={24} className="text-accent mt-1" weight="fill" />
              <div>
                <CardTitle className="text-xl">{currentNode.guidance.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {currentNode.guidance.content}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-destructive mb-3">Immediate Actions:</h4>
              <ul className="space-y-2">
                {currentNode.guidance.immediateActions.map((action, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-destructive font-bold text-lg leading-none mt-1">•</span>
                    <span className="text-sm leading-relaxed">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                <strong>Next Steps:</strong> {currentNode.guidance.nextSteps}
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button
                asChild
                variant="destructive"
                className="w-full font-semibold"
              >
                <a
                  href="tel:1800341900"
                  aria-label="Call Women's Aid National Freephone Helpline on 1 800 341 900 (opens your phone dialer)"
                >
                  Call Women's Aid 1800 341 900
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => onBack()}
                className="w-full"
              >
                Return to Main Menu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handleGoBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        <Progress value={progress} className="flex-1 mx-4" />
        <span className="text-sm text-muted-foreground min-w-fit">
          Step {path.length}
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{tree.title}</CardTitle>
          <CardDescription>{currentNode.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentNode.options?.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleOptionSelect(option.next)}
                className="w-full justify-start text-left h-auto p-4 whitespace-normal"
              >
                <div className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-primary shrink-0" />
                  <span className="text-sm leading-relaxed">{option.text}</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}