import { Shield, ArrowRight, ChatCircleDots } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button"; // Retained if needed elsewhere or for consistency (could be removed if unused)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MainMenuProps {
  onSelectDecisionTree: (treeId: string) => void;
  onOpenChat: () => void;
}

export function MainMenu({ onSelectDecisionTree, onOpenChat }: MainMenuProps) {
  const decisionTrees = [
    {
      id: "safetyQuestionnaire",
      title: "Digital Safety Questionnaire",
      description: "Step-by-step guidance for your specific situation",
      icon: Shield,
      color: "text-primary",
      featured: true
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Shield size={32} className="text-primary" weight="fill" />
          <h1 className="text-2xl font-bold text-foreground">Digital Safety Toolkit</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Women's Aid Ireland provides free, confidential support to women experiencing domestic violence. We're here 24/7 to help you find safety and support.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Get Personalized Help</h2>
          <div className="grid gap-4 md:grid-cols-2 items-stretch">
            {/* AI Chat Assistant */}
            <Card
              className="group cursor-pointer hover:shadow-lg transition-shadow border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              role="button"
              tabIndex={0}
              onClick={onOpenChat}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenChat(); } }}
              aria-label="Open AI safety assistant chat"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <ChatCircleDots size={28} className="text-accent" weight="fill" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">AI Safety Assistant</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Chat privately with our AI for immediate guidance
                    </CardDescription>
                  </div>
                  <ArrowRight size={18} className="text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1 justify-end">
                <div className="w-full mt-2 px-4 py-3 rounded-md bg-accent text-accent-foreground font-medium text-center transition-colors group-hover:bg-accent/90">
                  Start Chat
                </div>
              </CardContent>
            </Card>

            {/* Featured Questionnaire */}
            {decisionTrees.map((tree) => {
              const IconComponent = tree.icon;
              return (
                <Card
                  key={tree.id}
                  className="group cursor-pointer hover:shadow-lg transition-shadow border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelectDecisionTree(tree.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectDecisionTree(tree.id); } }}
                  aria-label="Start digital safety questionnaire"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <IconComponent size={28} className={tree.color} weight="fill" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{tree.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {tree.description}
                        </CardDescription>
                      </div>
                      <ArrowRight size={18} className="text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-1 justify-end">
                    <div className="w-full mt-2 px-4 py-3 rounded-md bg-primary text-primary-foreground font-medium text-center transition-colors group-hover:bg-primary/90">
                      Start Questionnaire
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mt-8">
        <div className="flex items-start gap-3">
          <Shield size={20} className="text-muted-foreground mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-1">Your Privacy is Protected</p>
            <p>
              This toolkit runs entirely in your browser. No information is saved, tracked, or sent anywhere. 
              Use the Quick Exit button if you need to leave immediately.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
        <div className="text-sm">
          <p className="font-semibold text-destructive mb-2">24/7 Support Available</p>
          <p className="text-foreground mb-2">
            <strong>Women's Aid National Freephone Helpline:</strong> <span className="font-mono">1800 341 900</span>
          </p>
          <p className="text-muted-foreground text-xs">
            Free, confidential support available 24 hours a day, 7 days a week. Call from any safe location.
          </p>
        </div>
      </div>
    </div>
  );
}