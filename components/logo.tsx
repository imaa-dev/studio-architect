import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  variant?: 'dark' | 'light'
  showText?: boolean
}

export function Logo({ className, variant = 'dark', showText = true }: LogoProps) {
  const isLight = variant === 'light'
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'flex h-10 w-10 flex-col items-center justify-center rounded-full border leading-none',
          isLight ? 'border-primary-foreground/30 text-primary-foreground' : 'border-foreground/20 text-foreground',
        )}
        aria-hidden="true"
      >
        <span className="font-display text-[15px] font-extrabold tracking-tight -mb-0.5">Mi</span>
        <span className="text-[6px] font-semibold tracking-[0.25em]">ARQ</span>
      </span>
      {showText && (
        <span
          className={cn(
            'font-display text-base font-semibold tracking-tight',
            isLight ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          MI Arquitectos
        </span>
      )}
    </span>
  )
}
