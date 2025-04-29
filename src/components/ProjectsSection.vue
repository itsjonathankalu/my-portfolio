<template>
  <section class="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-black" id="projects">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Projects</h2>
        <p class="text-black/70 dark:text-white/70 max-w-2xl">
          A selection of my recent work. Swipe through to see detailed case studies of my projects.
        </p>
      </div>

      <!-- Projects Slider -->
      <div class="relative">
        <!-- Navigation Buttons -->
        <div class="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
          <button 
            @click="prevSlide" 
            class="w-12 h-12 flex items-center justify-center bg-white dark:bg-black border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            :disabled="currentSlide === 0"
            :class="{'opacity-50 cursor-not-allowed': currentSlide === 0}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            @click="nextSlide" 
            class="w-12 h-12 flex items-center justify-center bg-white dark:bg-black border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            :disabled="currentSlide === projects.length - 1"
            :class="{'opacity-50 cursor-not-allowed': currentSlide === projects.length - 1}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Slider Container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <!-- Project Slides -->
            <div 
              v-for="(project, index) in projects" 
              :key="index"
              class="w-full flex-shrink-0 snap-center"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Project Image -->
                <div class="relative">
                  <img 
                    :src="project.image" 
                    :alt="project.title" 
                    class="w-full h-auto aspect-video object-cover grayscale"
                  />
                  <div class="absolute inset-0 border-8 border-black/10 dark:border-white/10 -m-3"></div>
                </div>
                
                <!-- Project Details -->
                <div>
                  <h3 class="text-2xl font-bold mb-4 text-black dark:text-white">{{ project.title }}</h3>
                  <p class="text-black/70 dark:text-white/70 mb-6">{{ project.description }}</p>
                  
                  <!-- Tech Stack -->
                  <div class="mb-8">
                    <h4 class="text-sm uppercase tracking-wider text-black/50 dark:text-white/50 mb-3">Technologies</h4>
                    <div class="flex flex-wrap gap-3">
                      <span 
                        v-for="(tech, techIndex) in project.technologies" 
                        :key="techIndex"
                        class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 text-sm"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Project Links -->
                  <div class="flex gap-6">
                    <a 
                      v-if="project.codeLink"
                      :href="project.codeLink" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium flex items-center gap-2 hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      View Code
                    </a>
                    <a 
                      v-if="project.demoLink"
                      :href="project.demoLink" 
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-6 py-3 border border-black dark:border-white text-black dark:text-white font-medium flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pagination Dots -->
        <div class="flex justify-center mt-8 gap-2">
          <button 
            v-for="(_, index) in projects" 
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-black dark:bg-white scale-125' : 'bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'"
          ></button>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <div class="flex justify-center gap-4 mt-8 md:hidden">
        <button 
          @click="prevSlide" 
          class="px-4 py-2 border border-black/20 dark:border-white/20 text-black dark:text-white flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
          :disabled="currentSlide === 0"
          :class="{'opacity-50 cursor-not-allowed': currentSlide === 0}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        <button 
          @click="nextSlide" 
          class="px-4 py-2 border border-black/20 dark:border-white/20 text-black dark:text-white flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
          :disabled="currentSlide === projects.length - 1"
          :class="{'opacity-50 cursor-not-allowed': currentSlide === projects.length - 1}"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// State for the slider
const currentSlide = ref(0);

// Project data - using existing projects but adapting to new format
const projects = ref([
  {
    title: 'Medium',
    description: 'A comprehensive full-stack blogging platform inspired by Medium. Features include rich text editing, user authentication, article publishing with categories and tags, commenting system, and responsive design.',
    image: '/images/img1.png',
    technologies: ['Express.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'EJS'],
    codeLink: 'https://github.com/itsn8k/Medium-Clone',
    demoLink: 'https://mediumclone.up.railway.app'
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, minimalist portfolio website showcasing my work and experience. Features smooth animations, responsive design, and optimized performance. Built with Vue.js and TailwindCSS.',
    image: '/images/img2.png',
    technologies: ['Vue.js', 'TailwindCss', 'Vite', 'Node.js'],
    codeLink: 'https://github.com/itsn8k/my-portfolio',
    demoLink: 'https://jkdevio-portfolio.vercel.app'
  },
  {
    title: 'Cartzilla',
    description: 'An elegant and responsive e-commerce platform built using the Cartzilla template and powered by Bootstrap 5, Designed for fashion stores.',
    image: '/images/img3.png',
    technologies: ['Bootstrap', 'Bootstrap.js', 'Istope.js', 'Jquery', 'Css'],
    codeLink: 'https://github.com/itsn8k/Cartzilla-Bootstrap-5-Website',
    demoLink: 'https://cartzilla-five.vercel.app'
  },
  {
    title: 'FitGuide Pro',
    description: 'A modern Bootstrap 5 website designed for gym and fitness enthusiasts. FitGuide Pro offers a sleek and responsive layout, highlighting fitness programs, services, and expert guidance.',
    image: '/images/img4.png',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery'],
    codeLink: 'https://github.com/itsn8k/FreeGuide-Bootstrap-5-Site',
    demoLink: 'https://freeguidepro.vercel.app'
  },
  {
    title: 'Sneaker',
    description: 'A sleek and responsive Bootstrap 5 website designed for sneaker enthusiasts. Sneaker Nine combines modern design with an intuitive layout, perfect for showcasing sneaker collections and fashion trends.',
    image: '/images/img5.png',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery', 'Lighslider.js'],
    codeLink: 'https://github.com/itsn8k/Sneaker-Bootstrap-5-Site',
    demoLink: 'https://sneaker-nine-lyart.vercel.app'
  }
]);

// Slider navigation functions
const nextSlide = () => {
  if (currentSlide.value < projects.value.length - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>
