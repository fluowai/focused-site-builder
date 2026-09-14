import mark from "@/assets/logo-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex min-w-0 items-center gap-3 ${className}`}>
      <img src={mark} alt="" className="h-9 w-auto shrink-0" />
      <span className="hidden min-w-0 leading-none min-[420px]:block">
        <span className="block text-base font-semibold tracking-[0.18em] text-foreground sm:text-lg">
          AUDITORIUM
        </span>
        <span className="mt-1 block text-[8px] tracking-[0.24em] text-muted-foreground">
          ENGENHARIA DO CRESCIMENTO
        </span>
      </span>
    </span>
  );
}
