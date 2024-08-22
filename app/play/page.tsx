'use client';

import { plays } from '#site/content';
import { QueryPagination } from '@/components/query-pagination';
import { sortPlays } from '@/lib/utils';
import { Suspense } from 'react';
import { ProjectCard } from '../../components/ui/projectCard';

const PLAYS_PER_PAGE = 5;

interface PlayPageProps {
  params: {
    page?: string;
  };
}

function PlayPageContent({ params }: PlayPageProps) {
  const currentPage = Number(params?.page) || 1;
  const sortedPlays = sortPlays(plays.filter((play) => play.published));
  const totalPages = Math.ceil(sortedPlays.length / PLAYS_PER_PAGE);

  const displayPlays = sortedPlays.slice(
    PLAYS_PER_PAGE * (currentPage - 1),
    PLAYS_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Plays
          </h1>
          <p className="text-xl text-muted-foreground">
            All listed KITFest plays
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-4xl">
          <hr />
          {displayPlays?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPlays.map((play) => {
                const { slug, image, date, title, description, tags } = play;
                return (
                  <li key={slug} className="mb-4">
                    <ProjectCard
                      slug={slug}
                      image={image}
                      description={description}
                      date={date}
                      tags={tags}
                      title={title}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default function PlayPage(props: PlayPageProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlayPageContent {...props} />
    </Suspense>
  );
}
