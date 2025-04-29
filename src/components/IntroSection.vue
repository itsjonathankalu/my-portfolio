<template>
  <section class="h-screen relative overflow-hidden theme-transition" id="home">
    <div class="max-w-[1200px] h-full mx-auto px-4 sm:px-6 flex items-center">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <!-- Gradient Orbs -->
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-accent-light/5 dark:from-accent-light-dark/5 to-transparent rounded-full animate-float"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-accent-light/5 dark:from-accent-light-dark/5 to-transparent rounded-full animate-float-delayed"
          ></div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 max-w-4xl">
        <!-- Profile Image -->
        <div 
          class="mb-8"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <img 
            src="/me.png" 
            alt="Robinson Honour" 
            class="profile-image w-24 h-24 rounded-full object-cover border-2 border-accent-light/20 dark:border-accent-light-dark/20"
          />
        </div>

        <!-- Available Badge -->
        <div 
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          Available for new project
        </div>

        <!-- Main Title -->
        <div>
          <h1
            class="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-accent-light dark:text-accent-light-dark"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
          >
            Hey, I'm Robinson Honour.
          </h1>
          <h2 
            class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-accent-light dark:text-accent-light-dark"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
          >
            Software Engineer
          </h2>
          <p 
            class="text-lg text-accent-muted dark:text-accent-muted-dark max-w-2xl mb-8"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
          >
            Creating innovative solutions and captivating designs.
            University student by day, visionary creator by night.
          </p>

          <!-- CTA Buttons -->
          <div 
            class="flex flex-wrap gap-4"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
          >
            <a 
              href="#contact" 
              class="px-6 py-3 rounded-full bg-accent-light dark:bg-accent-light-dark text-background dark:text-background-dark font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2"
            >
              Hire Me!
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a 
              href="#projects" 
              class="px-6 py-3 rounded-full border border-accent-light/20 dark:border-accent-light-dark/20 text-accent-light dark:text-accent-light-dark font-medium hover:bg-accent-light/5 dark:hover:bg-accent-light-dark/5 transition-all duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1200 } }"
          @click="scrollToContent"
        >
          <div class="text-accent-muted dark:text-accent-muted-dark">
            <svg
              class="w-6 h-6 animate-bounce group-hover:text-accent-light dark:group-hover:text-accent-light-dark transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const scrollToContent = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

// Use GSAP for more advanced animations
onMounted(() => {
  // Subtle floating animation for the profile image
  gsap.to('.profile-image', {
    y: 10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
  });
})
</script>
