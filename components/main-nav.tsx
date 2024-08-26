'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/logo.png" alt="Kitfest Logo" width={180} height={120} />
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
