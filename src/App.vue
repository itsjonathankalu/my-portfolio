<script setup>
import { useThemeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
import IntroSection from '@/components/IntroSection.vue'
import TheHero from '@/components/TheHero.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ToolsSection from '@/components/ToolsSection.vue'
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
  <div class="min-h-screen theme-transition relative">
    <!-- Grid background pattern - different for light/dark modes -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]"
    ></div>
    
    <!-- Main content wrapper -->
    <div class="relative">
      <TheHeader />
      <main class="max-w-[1200px] mx-auto">
        <IntroSection />
        <TheHero />
        <ProjectsSection />
        <ToolsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
