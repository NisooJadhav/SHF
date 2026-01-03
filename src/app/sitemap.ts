import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.sacredhealingfoundation.com';

async function getCourseSlugs(): Promise<string[]> {
  return [
    'usui-reiki-level-1',
    'usui-reiki-level-2',
    'usui-reiki-master',
    'karuna-reiki',
    'money-reiki',
    'angel-therapy',
    'rider-waite-tarot-card',
    'osho-zen-tarot-card',
    'crystal-healing',
    'eft',  
    'reiki-grand-mastership',
  ];
}

async function getStoreSlugs(): Promise<string[]> {
  return [
    'raw-crystals',
    'crystal-bracelets-pendants',
    'angel-crystals',
    'pyrite-wealth-crystals',
    'silver-crystal-pendants',
    'crystal-towers-balls-wands',
    'crystal-pyramids',
    'crystal-wish-grid-box',
    'wish-box',
    'feng-shui-wealth-ingot',
    'reiki-charged-water-bottle',
    'reiki-infused-wellness-oil'
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await getCourseSlugs();
  const products = await getStoreSlugs();

  const now = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/reiki`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/healing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/courses`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/store`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ===== Dynamic Courses =====
    ...courses.map(
      (slug): MetadataRoute.Sitemap[number] => ({
        url: `${BASE_URL}/courses/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    ),

    // ===== Dynamic Store Products =====
    ...products.map(
      (slug): MetadataRoute.Sitemap[number] => ({
        url: `${BASE_URL}/store/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.75,
      })
    ),
  ];
}