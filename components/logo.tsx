import Image from 'next/image'

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
          'flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white',
          isLight ? 'ring-1 ring-primary-foreground/20' : 'ring-1 ring-foreground/10',
        )}
      >
        <Image
          src="/images/logo-mark.png"
          alt="MI Arquitectos"
          width={40}
          height={40}
          className="h-full w-full object-contain p-1"
        />
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
