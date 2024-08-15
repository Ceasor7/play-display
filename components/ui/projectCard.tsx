import { cn, formatDate } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../tag';
import { buttonVariants } from './button';

interface ProjectCardProps {
  slug: string;
  image: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function ProjectCard({
  slug,
  image,
  title,
  description,
  date,
  tags,
}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div className="flex flex-col sm:flex-row gap-x-14 gap-y-4">
        <div className="flex sm:justify-center">
          <Image width={200} height={100} src={image} alt={title} />
        </div>
        <div className=" w-full">
          <div>
            <h2 className="text-2xl font-bold">
              <Link href={'/' + slug}>{title}</Link>
            </h2>
          </div>
          <div className="flex gap-2">
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <div className="max-w-none text-muted-foreground">{description}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={'/' + slug}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
