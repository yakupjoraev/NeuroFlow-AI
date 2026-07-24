import { cn } from "@/lib/utils";

interface AuroraProps {
  className?: string;
}

export function Aurora({ className }: AuroraProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="aurora-from absolute -left-[10%] top-[-15%] size-[45rem] rounded-full opacity-60 blur-[120px] animate-aurora [animation-delay:-4s]" />
      <div className="aurora-to absolute right-[-8%] top-[8%] size-[38rem] rounded-full opacity-55 blur-[120px] animate-aurora" />
      <div className="aurora-via absolute left-[30%] top-[35%] size-[40rem] rounded-full opacity-45 blur-[130px] animate-aurora [animation-delay:-9s]" />
    </div>
  );
}
