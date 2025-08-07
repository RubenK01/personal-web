/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tu-dominio.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: 'out',
} 