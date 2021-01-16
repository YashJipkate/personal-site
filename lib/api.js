import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const blogsDirectory = join(process.cwd(), 'content/blogs')

export function getBlogsSlugs() {
  return fs.readdirSync(blogsDirectory)
}

export function getBlogBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(blogsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllBlogs(fields = []) {
  const slugs = getBlogsSlugs()
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug, fields))
  return blogs
}
