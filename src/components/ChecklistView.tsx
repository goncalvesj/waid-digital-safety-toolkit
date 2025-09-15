import { useState } from "react";
import { ArrowLeft, Check, Copy, Printer } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface ChecklistItem {
  id: string;
  text: string;
  detail: string;
}

interface Checklist {
  id: string;
  title: string;
  description: string;
  items: ChecklistItem[];
}

interface ChecklistViewProps {
  checklist: Checklist;
  onBack: () => void;
}

export function ChecklistView({ checklist, onBack }: ChecklistViewProps) {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleItemToggle = (itemId: string) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleItemExpand = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const progress = (completedItems.size / checklist.items.length) * 100;

  const handleCopyChecklist = () => {
    const checklistText = `${checklist.title}\n${checklist.description}\n\n${checklist.items.map((item, index) => 
      `${index + 1}. ${item.text}\n   ${item.detail}`
    ).join('\n\n')}`;

    navigator.clipboard.writeText(checklistText).then(() => {
      toast.success("Checklist copied to clipboard");
    }).catch(() => {
      toast.error("Failed to copy checklist");
    });
  };

  const handlePrintChecklist = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${checklist.title}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
              h1 { color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px; }
              .description { color: #666; margin-bottom: 30px; }
              .item { margin-bottom: 20px; border-left: 3px solid #e5e7eb; padding-left: 15px; }
              .item-text { font-weight: bold; margin-bottom: 5px; }
              .item-detail { color: #555; font-size: 14px; }
              .checkbox { width: 15px; height: 15px; margin-right: 10px; }
            </style>
          </head>
          <body>
            <h1>${checklist.title}</h1>
            <p class="description">${checklist.description}</p>
            ${checklist.items.map((item, index) => `
              <div class="item">
                <div class="item-text">
                  <input type="checkbox" class="checkbox" /> ${index + 1}. ${item.text}
                </div>
                <div class="item-detail">${item.detail}</div>
              </div>
            `).join('')}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        <Progress value={progress} className="flex-1 mx-4" />
        <span className="text-sm text-muted-foreground">
          {completedItems.size} of {checklist.items.length}
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{checklist.title}</CardTitle>
          <CardDescription>{checklist.description}</CardDescription>
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyChecklist}
              className="flex items-center gap-2"
            >
              <Copy size={14} />
              Copy List
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrintChecklist}
              className="flex items-center gap-2"
            >
              <Printer size={14} />
              Print
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checklist.items.map((item, index) => (
              <div key={item.id} className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id={item.id}
                    checked={completedItems.has(item.id)}
                    onCheckedChange={() => handleItemToggle(item.id)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <button
                      onClick={() => handleItemExpand(item.id)}
                      className="text-left w-full"
                    >
                      <div className={`text-sm font-medium ${completedItems.has(item.id) ? 'line-through text-muted-foreground' : ''}`}>
                        {index + 1}. {item.text}
                      </div>
                    </button>
                    {expandedItems.has(item.id) && (
                      <div className="mt-2 text-sm text-muted-foreground pl-4 border-l-2 border-border">
                        {item.detail}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {completedItems.size === checklist.items.length && (
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center gap-2 text-accent">
                <Check size={20} weight="bold" />
                <span className="font-semibold">Checklist Complete!</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                You've completed all security steps. Stay vigilant and review these steps regularly.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}