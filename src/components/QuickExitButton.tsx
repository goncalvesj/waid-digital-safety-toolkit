import { ArrowSquareOut } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

interface QuickExitButtonProps {
  className?: string;
  vertical?: boolean;
}

export function QuickExitButton({ className = "", vertical = false }: QuickExitButtonProps) {
  const handleQuickExit = () => {
    location.replace("https://bbc.com");
  };

  return (
    <Button
      onClick={handleQuickExit}
      className={`bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold tracking-wide transition-colors flex ${vertical ? 'flex-col items-center gap-1 py-6 px-5 h-auto w-20 min-h-[100px]' : ''} ${className}`}
      size={vertical ? 'default' : 'lg'}
      aria-label="Quick exit - immediately leave this site"
    >
      <ArrowSquareOut size={vertical ? 40 : 20} weight="fill" />
      <span className={vertical ? 'text-[13px] leading-tight text-center mt-1' : ''}>Quick Exit</span>
    </Button>
  );
}