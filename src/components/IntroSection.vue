<template>
  <section class="min-h-screen relative overflow-hidden flex items-center justify-center" id="home">
    <!-- Main Content Container -->
    <div class="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <!-- Content Wrapper -->
      <div class="relative z-10 text-center space-y-8">
        <!-- Subtitle Animation -->
        <div
          class="overflow-hidden mb-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <p class="text-accent-light/80 text-lg sm:text-xl tracking-wider font-light">
            Hello, I'm a
          </p>
        </div>

        <!-- Main Title -->
        <div class="overflow-hidden relative">
          <h1
            class="text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-tight mb-4"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          >
            <span class="block text-accent-light relative group cursor-default">
              Full-Stack
              <span class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </span>
            <span 
              class="block text-accent-dark/90 group mt-2 sm:mt-4"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 400 } }"
            >
              Developer
              <span class="absolute inset-0 bg-gradient-to-r from-accent-light/0 via-accent-light/5 to-accent-light/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </span>
          </h1>
        </div>

        <!-- Description -->
        <div
          class="max-w-2xl mx-auto overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
        >
          <p class="text-accent-muted text-lg sm:text-xl leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
        >
          <a
            href="#projects"
            class="px-8 py-3 bg-accent-light text-background rounded-full font-medium hover:bg-accent-light/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent-light/20 w-full sm:w-auto text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="px-8 py-3 border border-accent-light/20 text-accent-light rounded-full font-medium hover:bg-accent-light/10 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center group"
          >
            Get in Touch
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group hidden sm:block"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
          @click="scrollToContent"
        >
          <div class="text-accent-muted hover:text-accent-light transition-colors duration-300">
            <svg
              class="w-6 h-6 animate-bounce"
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
const scrollToContent = () => {
  const nextSection = document.getElementById('about')
  if (nextSection) {
    const headerOffset = 80 // Adjust based on your header height
    const elementPosition = nextSection.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style>
/* Smooth transitions for hover states */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom animation for text shimmer effect */
@keyframes shimmer {
  0% {
    mask-position: 150% 0;
  }
  100% {
    mask-position: -50% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2.5s linear infinite;
  mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-size: 200% 100%;
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-size: 200% 100%;
}

/* Improved mobile touch feedback */
@media (hover: hover) and (pointer: fine) {
  .hover-lift {
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .hover-lift:hover {
    transform: translateY(-2px);
  }
}

/* Remove mobile hover effects */
@media (hover: none) {
  .hover\:scale-105:hover {
    transform: none;
  }
}
</style>
