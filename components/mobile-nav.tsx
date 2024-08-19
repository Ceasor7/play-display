'use client';

import { siteConfig } from '@/config/site';
import { Menu } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icons } from './icons';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center"
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setOpen} href="/play">
            More Plays
          </MobileLink>
          <hr className=" py-1" />
          <div className="flex flex-row gap-6">
            <a target="_blank" rel="noreferrer" href={siteConfig.links.twitter}>
              <span className="sr-only">Twitter</span>
              <Icons.twitter className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.instagram}
            >
              <span className="sr-only">GitHub</span>
              <Icons.instagram className="h-6 w-6" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteConfig.links.tiktok}>
              <span className="sr-only">GitHub</span>
              <Icons.tiktok className="h-6 w-6" />
            </a>
            <a target="_blank" rel="noreferrer" href={siteConfig.links.youtube}>
              <span className="sr-only">GitHub</span>
              <Icons.youtube className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.facebook}
            >
              <span className="sr-only">GitHub</span>
              <Icons.facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
