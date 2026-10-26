import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineCollection, z } from 'astro:content';
import { parse } from 'yaml';

const loadYamlRecords = (file: string) => async () => {
  const contents = await readFile(fileURLToPath(new URL(file, import.meta.url)), 'utf8');
  return parse(contents).map((record: { id: string }) => ({ id: record.id, ...record }));
};

const education = defineCollection({
  loader: loadYamlRecords('./content/career/education.yaml'),
  schema: z.object({
    id: z.string(),
    school: z.string(),
    degree: z.string(),
    start: z.string(),
    end: z.string(),
    details: z.array(z.string()),
    publish: z.boolean(),
  }),
});

const roles = defineCollection({
  loader: loadYamlRecords('./content/career/roles.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    start: z.string(),
    end: z.string().nullable(),
    summary: z.string(),
    storyTitle: z.string(),
    storySummary: z.string(),
    careerPoints: z.array(z.string()),
    highlights: z.array(z.object({ projectId: z.string() })),
    skills: z.array(z.string()),
    milestone: z.string().optional(),
    publish: z.boolean(),
  }),
});

const projects = defineCollection({
  loader: loadYamlRecords('./content/career/projects.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    roleId: z.string(),
    period: z.string(),
    problem: z.string(),
    contribution: z.array(z.string()),
    outcome: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    evidence: z.array(z.string()).optional(),
    publish: z.boolean(),
  }),
});

export const collections = { roles, projects, education };