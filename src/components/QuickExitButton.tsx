import { Shield, LogOut } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface QuickExitButtonProps {
  className?: string;
}

export function QuickExitButton({ className = "" }: QuickExitButtonProps) {
  const handleQuickExit = () => {
    location.replace("https://bbc.co.uk");
  };

  return (
    <Button
      onClick={handleQuickExit}
      className={`bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold tracking-wide transition-colors ${className}`}
      size="lg"
      aria-label="Quick exit - immediately leave this site"
    >
      <LogOut size={20} weight="bold" />
      Quick Exit
    </Button>
  );
}