import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const post = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date().optional(),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false),
});

export const collections = {
	articles: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
		schema: post,
	}),
	projects: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
		schema: post,
	}),
};
