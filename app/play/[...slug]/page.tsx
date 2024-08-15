import { plays } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import { Tag } from "@/components/tag";
import { siteConfig } from "@/config/site";
import "@/styles/mdx.css";
import { Metadata } from "next";
interface PlayPageProps {
  params: {
    slug: string[];
  };
}

async function getPlayFromParams(params: PlayPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const play = plays.find((play) => play.slugAsParams === slug);

  return play;
}

export async function generateMetadata({
  params,
}: PlayPageProps): Promise<Metadata> {
  const play = await getPlayFromParams(params);

  if (!play) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", play.title);

  return {
    title: play.title,
    authors: { name: siteConfig.author },
    openGraph: {
      title: play.title,
      type: "article",
      url: play.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: play.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: play.title,
      description: play.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PlayPageProps["params"][]
> {
  return plays.map((play) => ({ slug: play.slugAsParams.split("/") }));
}

export default async function PlayPage({ params }: PlayPageProps) {
  const play = await getPlayFromParams(params);

  if (!play || !play.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{play.title}</h1>
      <div className="flex gap-2 mb-2">
        {play.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {play.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{play.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={play.body} />
    </article>
  );
}
