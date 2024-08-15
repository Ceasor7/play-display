"use client";
import { plays } from "#site/content";
import { PostItem } from "@/components/post-item";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPlays } from "@/lib/utils";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/projectCard";
import LandingPage from "@/components/AutoScroll/LandingPage";

export default function Home() {
  const latestPlays = sortPlays(plays).slice(0, 5);
  return (
    <main>
      <section>
        <LandingPage />
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPlays.map((play) => (
            <li key={play.slug} className="first:border-t first:border-border">
              <ProjectCard
                slug={play.slug}
                image={play.image}
                title={play.title}
                date={play.date}
                tags={play.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
