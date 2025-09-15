import { Shield, Mail, Device, MapPin, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MainMenuProps {
  onSelectDecisionTree: (treeId: string) => void;
  onSelectChecklist: (checklistId: string) => void;
}

export function MainMenu({ onSelectDecisionTree, onSelectChecklist }: MainMenuProps) {
  const decisionTrees = [
    {
      id: "emailCompromise",
      title: "Email Account Security",
      description: "Help with potentially compromised email accounts",
      icon: Mail,
      color: "text-blue-600"
    },
    {
      id: "deviceSafety", 
      title: "Device & Spyware Concerns",
      description: "Check if your device might be monitored",
      icon: Device,
      color: "text-purple-600"
    }
  ];

  const quickChecklists = [
    {
      id: "emailSecurity",
      title: "Email Security Steps",
      description: "Secure your email account",
      icon: Mail
    },
    {
      id: "deviceSecurity",
      title: "Device Security Check", 
      description: "Check device for monitoring",
      icon: Device
    },
    {
      id: "locationPrivacy",
      title: "Location Privacy",
      description: "Protect location information",
      icon: MapPin
    },
    {
      id: "accountRecovery",
      title: "Account Recovery",
      description: "Recover compromised accounts",
      icon: Shield
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
          Private, secure guidance for digital safety concerns. Nothing is stored on your device - all information stays private.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Get Personalized Help</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {decisionTrees.map((tree) => {
              const IconComponent = tree.icon;
              return (
                <Card key={tree.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <IconComponent size={24} className={tree.color} weight="fill" />
                      <div className="flex-1">
                        <CardTitle className="text-base">{tree.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">
                          {tree.description}
                        </CardDescription>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      onClick={() => onSelectDecisionTree(tree.id)}
                      className="w-full"
                      variant="default"
                    >
                      Start Assessment
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Action Checklists</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {quickChecklists.map((checklist) => {
              const IconComponent = checklist.icon;
              return (
                <Button
                  key={checklist.id}
                  variant="outline"
                  onClick={() => onSelectChecklist(checklist.id)}
                  className="h-auto p-4 justify-start text-left"
                >
                  <div className="flex items-center gap-3 w-full">
                    <IconComponent size={20} className="text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{checklist.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {checklist.description}
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-muted-foreground shrink-0" />
                  </div>
                </Button>
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
    </div>
  );
}