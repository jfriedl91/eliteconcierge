import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { blogPosts } from './src/data/articles.js';

const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/ueber-uns', changefreq: 'monthly', priority: '0.8' },
  { url: '/leistungen', changefreq: 'monthly', priority: '0.8' },
  { url: '/mitgliedschaften', changefreq: 'monthly', priority: '0.9' },
  { url: '/kontakt', changefreq: 'yearly', priority: '0.7' },
  { url: '/blog', changefreq: 'weekly', priority: '0.9' },
  { url: '/datenschutz', changefreq: 'yearly', priority: '0.3' },
  { url: '/impressum', changefreq: 'yearly', priority: '0.3' },
  { url: '/agb', changefreq: 'yearly', priority: '0.3' },
  { url: '/fair-use-policy', changefreq: 'yearly', priority: '0.3' },
  { url: '/widerruf', changefreq: 'yearly', priority: '0.3' },
];

const blogRoutes = blogPosts.map(post => ({
  url: `/blog/${post.slug}`,
  changefreq: 'weekly',
  priority: '0.7',
}));

const allRoutes = [...staticRoutes, ...blogRoutes];

const BASE_URL = 'https://elconci.de';
const today = new Date().toISOString().split('T')[0];

const sitemapContent = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>
`.trim();

const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');

try {
  writeFileSync(sitemapPath, sitemapContent);
  console.log('Sitemap generated successfully with all blog posts!');
} catch (error) {
  console.error('Error generating sitemap:', error);
}