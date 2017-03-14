module.exports = {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: "og:title", content: "Illinois Violent Crime 2015" },
    { property: "og:site_name", content: "Illinois Violent Crime 2015" },
    { property: "og:url", content: "https://violentcrime2015.icjia.cloud" },
    { property: "og:description", content: "Illinois Violent Crime 2015. "},
    { property: "fb:app_id", content: "963916987072512" },
    { property: "og:type", content: "article" },
    { property: "og:locale", content: "en_US" },
    { property: "article:author", content: "https://www.facebook.com/ICJIA" },
    { property: "og:image", content: "https://violentcrime2015.icjia.cloud/static/facebook/violentCrime2015-small.jpg" },
  ],
  script: [
    {src: "/static/google/ga.js"}
  ],
  link: [
    {rel: "icon", type: "image/png", sizes: "192x192",  href: '/static/icons/android-icon-192x192.png?v=1440170181'},
    {rel: "icon", type: "image/png", sizes: "32x32",  href: '/static/icons/favicon-32x32.png?v=1440170181'},
    {rel: "icon", type: "image/png", sizes: "96x96",  href: '/static/icons/favicon-96x96.png?v=1440170181'},
    {rel: "icon", type: "image/png", sizes: "16x16",  href: '/static/icons/favicon-16x16.png?v=1440170181'}
    ],
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Illinois Violent Crime 2015',
    // all titles will be injected into this template
    titleTemplate: 'ICJIA | %s'
  }
