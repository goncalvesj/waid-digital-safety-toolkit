import { 
  Shield, 
  ChatCircleDots,
  Warning,
  Heart,
  UsersThree,
  Phone
} from "@phosphor-icons/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MainMenuProps {
  onSelectDecisionTree: (treeId: string) => void;
  onOpenChat: () => void;
}

export function MainMenu({ onSelectDecisionTree, onOpenChat }: MainMenuProps) {
  const handleUrgentHelp = () => {
    // Direct dial (mobile) or show helpline info (desktop). Using tel: scheme for simplicity.
    window.location.href = 'tel:1800341900';
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          You are not alone
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Women's Aid Ireland provides free, confidential support to women experiencing domestic violence. We're here 24/7 to help you find safety and support.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm font-medium">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield size={16} className="text-primary" weight="fill" />
            <span>Confidential & Safe</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart size={16} className="text-accent" weight="fill" />
            <span>Free Support</span>
          </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <UsersThree size={16} className="text-primary" weight="fill" />
              <span>Trained Professionals</span>
            </div>
        </div>
      </div>

      {/* Help Options Box */}
      <Card className="border-muted-foreground/10 shadow-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl">How can we help you today?</CardTitle>
          <CardDescription className="text-base mt-2">
            Choose the option that best describes what you need support with
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Urgent Help */}
            <Card
              className="group cursor-pointer border-destructive/30 bg-gradient-to-b from-destructive/5 to-destructive/10 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive/50 flex flex-col"
              role="button"
              tabIndex={0}
              onClick={handleUrgentHelp}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleUrgentHelp(); } }}
              aria-label="I need urgent help"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
                  <Warning size={28} className="text-destructive" weight="fill" />
                </div>
                <CardTitle className="text-lg">I need urgent help</CardTitle>
                <CardDescription className="text-sm mt-2">
                  If you're in immediate danger or need emergency support
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="w-full mt-1 px-4 py-3 rounded-md bg-destructive text-destructive-foreground font-medium text-center group-hover:bg-destructive/90 flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>Call 1800 341 900</span>
                </div>
              </CardContent>
            </Card>

            {/* Questionnaire */}
            <Card
              className="group cursor-pointer border-primary/30 bg-gradient-to-b from-primary/5 to-primary/10 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 flex flex-col"
              role="button"
              tabIndex={0}
              onClick={() => onSelectDecisionTree('safetyQuestionnaire')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectDecisionTree('safetyQuestionnaire'); } }}
              aria-label="I'm in a situation - start questionnaire"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield size={28} className="text-primary" weight="fill" />
                </div>
                <CardTitle className="text-lg">I'm in a situation</CardTitle>
                <CardDescription className="text-sm mt-2">
                  Get guidance and support for your current circumstances
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="w-full mt-1 px-4 py-3 rounded-md bg-primary text-primary-foreground font-medium text-center group-hover:bg-primary/90">
                  Start Questionnaire
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card
              className="group cursor-pointer border-accent/30 bg-gradient-to-b from-accent/5 to-accent/10 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 flex flex-col"
              role="button"
              tabIndex={0}
              onClick={onOpenChat}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenChat(); } }}
              aria-label="Talk to AI Assistant"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <ChatCircleDots size={28} className="text-accent" weight="fill" />
                </div>
                <CardTitle className="text-lg">Chat with our safety assistant</CardTitle>
                <CardDescription className="text-sm mt-2 leading-relaxed">
                  Ask questions in your own words and get instant, confidential guidance – no judgment, no records kept.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 mt-auto">
                <div className="w-full mt-1 px-4 py-3 rounded-md bg-accent text-accent-foreground font-medium text-center group-hover:bg-accent/90">
                  Start a chat
                </div>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-10">
            All our services are free, confidential, and available to all women.
          </p>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <div className="bg-muted/40 rounded-lg p-5 border border-muted/30">
        <div className="flex items-start gap-3">
          <Shield size={22} className="text-muted-foreground mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-1 text-foreground">Your Privacy is Protected</p>
            <p className="leading-relaxed">
              This toolkit runs entirely in your browser. No information is saved, tracked, or sent anywhere. Use the Quick Exit button if you need to leave immediately. If you need to speak to someone now, call{' '}
              <a
                href="tel:1800341900"
                className="text-foreground underline underline-offset-2 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-sm font-medium"
                aria-label="Call Women's Aid National Freephone Helpline on 1 800 341 900"
              >
                Women's Aid 1800 341 900
              </a>{' '}(24/7).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}