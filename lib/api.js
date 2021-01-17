import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const blogsDirectory = join(process.cwd(), 'content/blogs');
const projectsDirectory = join(process.cwd(), 'content/projects');
const leaderDirectory = join(process.cwd(), 'content/leadership');

export function getBlogsSlugs() {
  return fs.readdirSync(blogsDirectory);
}
export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}
export function getLeaderSlugs() {
  return fs.readdirSync(leaderDirectory);
}

export function getContentBySlug(dir, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getBlogBySlug(slug, fields) {
  return getContentBySlug(blogsDirectory, slug, fields);
}
export function getProjectBySlug(slug, fields) {
  return getContentBySlug(projectsDirectory, slug, fields);
}
export function getLeaderBySlug(slug, fields) {
  return getContentBySlug(leaderDirectory, slug, fields);
}

export function getAllBlogs(fields = []) {
  const slugs = getBlogsSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug, fields));
  return blogs;
}
export function getAllProjects(fields = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields));
  return projects;
}
export function getAllLeaders(fields = []) {
  const slugs = getLeaderSlugs();
  const leaders = slugs
    .map((slug) => getLeaderBySlug(slug, fields));
  return leaders;
}
