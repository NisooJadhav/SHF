import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/reiki',
          '/healing',
          '/courses',
          '/courses/',
          '/store',
          '/store/',
          '/about',
        ],
        disallow: [
          '/cart',
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/login',
          '/checkout',
        ],
      },
    ],
    sitemap: 'https://www.sacredhealingfoundation.com/sitemap.xml',
    host: 'https://www.sacredhealingfoundation.com',
  };
}