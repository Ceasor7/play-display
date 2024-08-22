import { plays } from '#site/content';
import { sortPlays } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const latestPlays = sortPlays(plays).slice(0, 5);

  const playUrls = latestPlays.map((play) => ({
    url: `https://https://play.kitfest.co.ke/${play.slug}`,
    lastModified: new Date(play.date),
  }));

  return [
    {
      url: 'https://https://play.kitfest.co.ke/',
      lastModified: new Date(),
    },
    {
      url: 'https://ceasorcodes.vercel.app/play',
      lastModified: new Date(),
    },
    ...playUrls,
  ];
}
