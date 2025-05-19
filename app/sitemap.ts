export const baseUrl = 'https://hyeonki-min.com'

export default async function sitemap() {

  let routes = ['', '/archive'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
