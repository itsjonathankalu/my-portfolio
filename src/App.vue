<script setup>
import TheHeader from '@/components/TheHeader.vue'
import IntroSection from '@/components/IntroSection.vue'
import TheHero from '@/components/TheHero.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ToolsSection from '@/components/ToolsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style>
@keyframes grid-fade {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.2; }
}

.animate-grid-fade {
  animation: grid-fade 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 30px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 20s ease-in-out infinite;
}

/* Improved scrollbar for modern browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

/* Better touch scrolling on mobile */
@media (max-width: 768px) {
  * {
    -webkit-tap-highlight-color: transparent;
  }
}
</style>

<template>
  <div class="min-h-screen bg-background text-white relative overflow-x-hidden">
    <!-- Improved background grid with subtle animation -->
    <div
      class="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-fade pointer-events-none"
    ></div>
    
    <!-- Background gradient orbs -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-float opacity-50"></div>
      <div class="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl animate-float-delayed opacity-50"></div>
    </div>

    <!-- Main content -->
    <div class="relative">
      <TheHeader />
      <main class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
