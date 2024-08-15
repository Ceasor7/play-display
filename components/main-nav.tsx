"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/logo.svg" alt="kitfest logo" width={6} height={6} />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
      <Link
        href="/play"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/play" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Plays
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/contact" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Contact
      </Link>
    </nav>
  );
}
