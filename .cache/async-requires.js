// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-gallery-js": () => import("./../src/pages/gallery.js" /* webpackChunkName: "component---src-pages-gallery-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-all-tags-index-js": () => import("./../src/templates/allTagsIndex.js" /* webpackChunkName: "component---src-templates-all-tags-index-js" */),
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-templates-single-tag-index-js": () => import("./../src/templates/singleTagIndex.js" /* webpackChunkName: "component---src-templates-single-tag-index-js" */)
}

