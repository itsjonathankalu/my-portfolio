<script setup>
import { useThemeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import IntroSection from '@/components/IntroSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'

// Get theme from store
const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

// Apply theme class to document on mount
onMounted(() => {
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="min-h-screen theme-transition bg-white dark:bg-black">
    <!-- Main content wrapper -->
    <div class="relative">
      <TheHeader />
      <main>
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
