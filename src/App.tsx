import { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { QuickExitButton } from '@/components/QuickExitButton';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MainMenu } from '@/components/MainMenu';
import { DecisionTreeFlow } from '@/components/DecisionTreeFlow';
import { ChatInterface } from '@/components/ChatInterface';
import { decisionTrees } from '@/data/content';

type ViewType = 'menu' | 'decisionTree' | 'chat';

interface AppState {
  view: ViewType;
  selectedDecisionTree?: string;
}

function App() {
  const [state, setState] = useState<AppState>({ view: 'menu' });

  const handleSelectDecisionTree = (treeId: string) => {
    setState({ view: 'decisionTree', selectedDecisionTree: treeId });
  };

  const handleOpenChat = () => {
    setState({ view: 'chat' });
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

      case 'chat':
        return (
          <ChatInterface
            onBack={handleBackToMenu}
          />
        );

      default:
        return (
          <MainMenu
            onSelectDecisionTree={handleSelectDecisionTree}
            onOpenChat={handleOpenChat}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {/* Fixed Quick Exit button (persistent & accessible) */}
      <div
        className="fixed z-50 top-1/2 -translate-y-1/2 right-2 sm:right-3 md:right-4 lg:right-6 flex flex-col items-center"
        role="complementary"
        aria-label="Quick exit control"
      >
        <QuickExitButton vertical className="shadow-lg" />
      </div>
      <main className="container mx-auto px-4 py-10 pb-12 max-w-4xl flex-1">
        {renderCurrentView()}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;