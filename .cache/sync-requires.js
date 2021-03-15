const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/karenshen/Documents/Website/shenkaren.github.io/src/pages/blog.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/Users/karenshen/Documents/Website/shenkaren.github.io/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/karenshen/Documents/Website/shenkaren.github.io/src/pages/index.js"))),
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/Users/karenshen/Documents/Website/shenkaren.github.io/src/templates/allTagsIndex.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/karenshen/Documents/Website/shenkaren.github.io/src/templates/post.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/Users/karenshen/Documents/Website/shenkaren.github.io/src/templates/singleTagIndex.js")))
}

