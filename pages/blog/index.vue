<script setup>
useSeoMeta({
  title: "Blog - Ali Guliyev",
})

const selectedTag = ref("All")

const {
  data: posts,
  error,
  pending,
} = await useAsyncData(
  "blog-posts",
  () =>
    queryContent("blog")
      .where({ _path: { $ne: "/blog" } })
      .only(["title", "date", "tags", "_path"])
      .find(), // Removed the sort here as we'll handle it in computed property
)

// Use the utility to extract unique tags
const uniqueTags = computed(() => {
  return posts.value ? getUniqueValues(posts.value, "tags") : []
})

// Use the utility to filter the posts based on the selected tag
const filteredPosts = computed(() => {
  return posts.value ? filteredCollection(posts.value, "tags", selectedTag.value) : []
})

// Sort filtered posts by date (most recent first)
const sortedFilteredPosts = computed(() => {
  return filteredPosts.value
    ? filteredPosts.value.slice().sort((a, b) => {
        // Convert dates to Date objects for comparison
        const dateA = new Date(a.date || "1970-01-01")
        const dateB = new Date(b.date || "1970-01-01")

        // Sort in descending order (most recent first)
        return dateB.getTime() - dateA.getTime()
      })
    : []
})

// Watch for changes in the filtered blog posts
watch(sortedFilteredPosts, setupAnimationWatcher(sortedFilteredPosts, ".blog-item"), { deep: true })

onMounted(() => {
  // Initial animation once projects are loaded
  watch(
    posts,
    () => {
      nextTick(() => {
        animateProjectsAndPosts(".blog-item")
      })
    },
    { immediate: true },
  )
})
</script>

<template>
  <div class="page">
    <div class="mb-3 flex items-center justify-between md:mb-6">
      <h1 class="title">
        Blog
      </h1>
      <Dropdown v-model="selectedTag" :options="uniqueTags" />
    </div>

    <!-- Loading state -->
    <div v-if="pending" class="py-10 text-center">
      <p>Loading posts...</p>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="py-10 text-center text-red-600">
      <p>Error loading posts: {{ error.message }}</p>
    </div>

    <!-- Posts list -->
    <ul v-else class="list-none">
      <li v-for="post in sortedFilteredPosts" :key="post.title" class="blog-item relative mb-4">
        <NuxtLink :to="post._path">
          <div
            class="group flex items-start justify-between border-1 border-primary-op10 rounded-xl border-solid p-5 transition-all duration-75 hover:border-primary-hover"
          >
            <div class="flex flex-col gap-2">
              <p
                class="mb-1 max-w-2xl text-lg text-primary font-semibold transition-all duration-75 md:text-xl group-hover:text-black dark:group-hover:text-primary-hover"
              >
                {{ post.title }}
              </p>
              <ul class="flex flex-row flex-wrap items-center gap-2 list-none md:gap-3">
                <li v-for="tag in post.tags" :key="tag">
                  <Tag :name="tag" />
                </li>
              </ul>
              <p
                class="mt-4 flex flex-row items-center gap-0.5 text-black opacity-0 transition-opacity duration-75 dark:text-white group-hover:opacity-100"
              >
                <span>Read</span>
                <Icon icon="mingcute:arrow-right-line" class="mt-0.5 text-sm" />
              </p>
            </div>
            <p class="whitespace-nowrap text-xs text-gray-600 md:text-base dark:text-gray-100">
              {{ formatDate(post.date) }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
