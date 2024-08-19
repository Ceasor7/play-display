'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from './icons';

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className=" h-40 w-40" />
      </Link>
      <Link
        href="/play"
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/play' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        More Plays
      </Link>
    </nav>
  );
}
