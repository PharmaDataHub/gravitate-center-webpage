import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { updateCategories } from './config/site';

/*
 * Updates collection. Field reference: CONTENT_GUIDE.md.
 * One Markdown file per update in src/content/updates/. The file name is the URL slug.
 */
const weakAltText = /^(image|photo|picture|img|cover|banner|untitled)\.?$/i;

const updates = defineCollection({
  loader: glob({ base: './src/content/updates', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(5).max(120),
        description: z
          .string()
          .min(30, 'Description should be a full sentence summarising the update.')
          .max(240, 'Keep the description under 240 characters.'),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        category: z.enum(updateCategories),
        draft: z.boolean().default(false),
        author: z.string().optional(),
        image: image().optional(),
        imageAlt: z.string().optional(),
        event: z
          .object({
            start: z.coerce.date(),
            end: z.coerce.date().optional(),
            location: z.string().optional(),
            online: z.boolean().default(false),
            registrationUrl: z.url().optional(),
          })
          .optional(),
        sources: z
          .array(z.object({ title: z.string(), url: z.url() }))
          .default([]),
      })
      .superRefine((data, ctx) => {
        if (data.image) {
          const alt = data.imageAlt?.trim() ?? '';
          if (alt.length < 10 || weakAltText.test(alt)) {
            ctx.addIssue({
              code: 'custom',
              path: ['imageAlt'],
              message:
                'An image needs useful alt text (at least 10 characters) describing what it shows.',
            });
          }
        }
        if (data.updatedDate && data.updatedDate < data.pubDate) {
          ctx.addIssue({
            code: 'custom',
            path: ['updatedDate'],
            message: 'updatedDate cannot be earlier than pubDate.',
          });
        }
        if (data.event?.end && data.event.end < data.event.start) {
          ctx.addIssue({
            code: 'custom',
            path: ['event', 'end'],
            message: 'Event end cannot be before its start.',
          });
        }
      }),
});

export const collections = { updates };
