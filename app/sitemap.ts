import { plays } from '#site/content';
import { sortPlays } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const latestPlays = sortPlays(plays).slice(0, 5);

  const playUrls = latestPlays.map((play) => ({
    url: `https://ceasorcodes.vercel.app/${play.slug}`,
    lastModified: new Date(play.date),
  }));

  return [
    {
      url: 'https://ceasorcodes.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/project',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/contact',
      lastModified: new Date(),
    },
    ...playUrls,
  ];
}
