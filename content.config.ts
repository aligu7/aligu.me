import { defineCollection, defineContentConfig, z } from "@nuxt/content"

const projectStatus = z.enum(["Completed", "In Progress"])

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: "page",
      source: "index.md",
    }),
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()).default([]),
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        date: z.date(),
        tags: z.array(z.string()).default([]),
        status: projectStatus,
        demo: z.string().url().optional(),
        github: z.string().url().optional(),
      }),
    }),
    social: defineCollection({
      type: "data",
      source: "social/index.json",
      schema: z.object({
        social: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          link: z.string(),
        })),
      }),
    }),
  },
})
