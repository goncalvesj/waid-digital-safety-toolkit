import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { QuickExitButton } from '@/components/QuickExitButton';
import { MainMenu } from '@/components/MainMenu';
import { DecisionTreeFlow } from '@/components/DecisionTreeFlow';
import { ChecklistView } from '@/components/ChecklistView';
import { decisionTrees, checklists } from '@/data/content';

type ViewType = 'menu' | 'decisionTree' | 'checklist';

interface AppState {
  view: ViewType;
  selectedDecisionTree?: string;
  selectedChecklist?: string;
}

function App() {
  const [state, setState] = useState<AppState>({ view: 'menu' });

  const handleSelectDecisionTree = (treeId: string) => {
    setState({ view: 'decisionTree', selectedDecisionTree: treeId });
  };

  const handleSelectChecklist = (checklistId: string) => {
    setState({ view: 'checklist', selectedChecklist: checklistId });
  };

  const handleDecisionTreeComplete = (result: any) => {
    if (result.type === 'guidance') {
      setState({ view: 'menu' });
    }
  };

  const handleBackToMenu = () => {
    setState({ view: 'menu' });
  };

  const renderCurrentView = () => {
    switch (state.view) {
      case 'decisionTree':
        if (state.selectedDecisionTree && decisionTrees[state.selectedDecisionTree as keyof typeof decisionTrees]) {
          return (
            <DecisionTreeFlow
              tree={decisionTrees[state.selectedDecisionTree as keyof typeof decisionTrees]}
              onComplete={handleDecisionTreeComplete}
              onBack={handleBackToMenu}
            />
          );
        }
        return null;

      case 'checklist':
        if (state.selectedChecklist && checklists[state.selectedChecklist as keyof typeof checklists]) {
          return (
            <ChecklistView
              checklist={checklists[state.selectedChecklist as keyof typeof checklists]}
              onBack={handleBackToMenu}
            />
          );
        }
        return null;

      default:
        return (
          <MainMenu
            onSelectDecisionTree={handleSelectDecisionTree}
            onSelectChecklist={handleSelectChecklist}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <QuickExitButton />
      </div>
      
      <div className="container mx-auto px-4 py-8 pb-20 max-w-4xl">
        <div className="pt-16">
          {renderCurrentView()}
        </div>
      </div>
      
      <Toaster />
    </div>
  );
}

export default App;