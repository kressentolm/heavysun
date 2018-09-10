import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import WorkPagePreview from './preview-templates/WorkPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', WorkPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
