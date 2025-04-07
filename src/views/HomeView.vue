<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import TheHeader from '../components/TheHeader.vue'
import TheHero from '../components/TheHero.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <DefaultLayout>
    <div class="min-h-screen bg-[#121212] text-white">
      <TheHeader />
      <main class="max-w-[1200px] mx-auto px-6">
        <TheHero />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <TheFooter />
    </div>
  </DefaultLayout>
</template>
