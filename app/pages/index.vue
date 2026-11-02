<script setup lang="ts">
const { data: page } = await useAsyncData("home", () =>
  queryCollection("pages").path("/").first())

usePageSeo("Ali Guliyev - Software Engineer", () => page.value?.description)

/*
 * Structured data telling search engines who this site is about, and that the
 * linked GitHub/LinkedIn profiles are the same person
 */
const { siteUrl } = useRuntimeConfig().public
const socialLinks = useSocialLinks()
const personId = `${siteUrl}/#person`

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: () => JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            "url": `${siteUrl}/`,
            "name": "Ali Guliyev",
            "publisher": { "@id": personId },
          },
          {
            "@type": "ProfilePage",
            "url": `${siteUrl}/`,
            "mainEntity": { "@id": personId },
          },
          {
            "@type": "Person",
            "@id": personId,
            "name": "Ali Guliyev",
            "url": `${siteUrl}/`,
            "jobTitle": "Software Engineer",
            "description": page.value?.description,
            "worksFor": { "@type": "Organization", "name": "Optimax Software", "url": "https://optimaxsoftware.com" },
            "knowsAbout": ["Vue", "Nuxt", "TypeScript", "Web development"],
            "sameAs": socialLinks.value.map(s => s.link).filter(link => link.startsWith("https://")),
          },
        ],
      }),
    },
  ],
})

useStaggerAnimation(".main-page-row", undefined, { duration: 1, stagger: 0.2, y: -10 })
</script>

<template>
  <main class="page">
    <ContentRenderer v-if="page" :value="page" />
    <CurrentOrLatestProjects class="mt-7" />
  </main>
</template>
