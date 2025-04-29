<template>
  <section class="py-24 px-4 sm:px-6 relative theme-transition" id="projects">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[800px] h-[800px] bg-accent-light/[0.01] dark:bg-accent-light-dark/[0.01] rounded-full blur-3xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      ></div>
    </div>

    <h2
      class="relative text-4xl sm:text-5xl font-bold mb-16 text-center text-accent-light dark:text-accent-light-dark"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <span class="text-accent-muted dark:text-accent-muted-dark block text-sm font-medium tracking-[0.3em] mb-4"
        >MY WORK</span
      >
      <span class="relative inline-block">
        Here's What I've Been Up To
        <span
          class="absolute -bottom-4 left-1/2 w-12 h-px bg-accent-light/20 dark:bg-accent-light-dark/20 -translate-x-1/2"
        ></span>
      </span>
    </h2>

    <p
      class="max-w-2xl mx-auto text-accent-muted dark:text-accent-muted-dark mt-8 mb-16 text-base leading-relaxed"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
    >
      A showcase of my recent work, featuring full-stack applications and innovative solutions. Each
      project represents a unique challenge and demonstrates my commitment to clean code and user
      experience.
    </p>

    <!-- Project Grid Layout -->
    <div 
      class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
    >
      <div
        v-for="(project, index) in projects.slice(0, 4)"
        :key="project.name"
        class="group relative overflow-hidden rounded-xl bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm border border-accent-dark/10 dark:border-accent-dark-dark/10 hover:border-accent-light/10 dark:hover:border-accent-light-dark/10 transition-all duration-500 hover:shadow-lg"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 + (index * 100) } }"
      >
        <!-- Project Image -->
        <div class="aspect-video overflow-hidden">
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>
        
        <!-- Project Info -->
        <div class="p-6">
          <h3 class="text-xl font-medium text-accent-light dark:text-accent-light-dark mb-2">
            {{ project.name }}
          </h3>
          <p class="text-sm text-accent-muted dark:text-accent-muted-dark mb-4 line-clamp-2">
            {{ project.description }}
          </p>
          
          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.technologies.slice(0, 3)"
              :key="tech"
              class="text-xs font-medium text-accent-muted dark:text-accent-muted-dark px-3 py-1 rounded-full bg-accent-dark/5 dark:bg-accent-dark-dark/5 border border-accent-dark/10 dark:border-accent-dark-dark/10"
            >
              {{ tech }}
            </span>
            <span 
              v-if="project.technologies.length > 3"
              class="text-xs font-medium text-accent-muted dark:text-accent-muted-dark px-3 py-1 rounded-full"
            >
              +{{ project.technologies.length - 3 }} more
            </span>
          </div>
          
          <!-- Project Links -->
          <div class="flex justify-between items-center">
            <a 
              :href="`#project-${index}`" 
              class="text-sm font-medium text-accent-light dark:text-accent-light-dark hover:underline flex items-center gap-1"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            
            <div class="flex gap-2">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="p-2 rounded-full text-accent-muted dark:text-accent-muted-dark hover:text-accent-light dark:hover:text-accent-light-dark hover:bg-accent-light/5 dark:hover:bg-accent-light-dark/5 transition-all duration-300"
                aria-label="GitHub Repository"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="p-2 rounded-full text-accent-muted dark:text-accent-muted-dark hover:text-accent-light dark:hover:text-accent-light-dark hover:bg-accent-light/5 dark:hover:bg-accent-light-dark/5 transition-all duration-300"
                aria-label="Live Demo"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs font-light text-accent-muted px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-accent-dark/10 hover:border-accent-light/10 hover:text-accent-light hover:translate-y-[-2px] transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Medium',
    description:
      'A comprehensive full-stack blogging platform inspired by Medium. Features include rich text editing, user authentication, article publishing with categories and tags, commenting system, and responsive design. Built with performance and scalability in mind using modern web technologies.',
    technologies: ['Express.js', 'Node.js', 'MongoDB', 'TailwindCSS', 'EJS'],
    github: 'https://github.com/itsn8k/Medium-Clone',
    demo: 'https://mediumclone.up.railway.app',
    image: '/images/img1.png',
  },
  {
    name: 'Personal Portfolio',
    description:
      'A modern, minimalist portfolio website showcasing my work and experience. Features smooth animations, responsive design, and optimized performance. Built with Vue.js and TailwindCSS, incorporating modern design principles and best practices for an engaging user experience.',
    technologies: ['Vue.js', 'TailwindCss', 'Vite', 'Node.js'],
    github: 'https://github.com/itsn8k/my-portfolio',
    demo: 'https://jkdevio-portfolio.vercel.app',
    image: '/images/img2.png',
  },

  {
    name: 'Cartzilla',
    description:
      'An elegant and responsive e-commerce platform built using the Cartzilla template and powered by Bootstrap 5, Designed for fashion stores.',
    technologies: ['Bootstrap', 'Bootstrap.js', 'Istope.js', 'Jquery', 'Css'],
    github: 'https://github.com/itsn8k/Cartzilla-Bootstrap-5-Website',
    demo: 'https://cartzilla-five.vercel.app',
    image: '/images/img3.png',
  },
  {
    name: 'FitGuide Pro',
    description:
      'A modern Bootstrap 5 website designed for gym and fitness enthusiasts. FitGuide Pro offers a sleek and responsive layout, highlighting fitness programs, services, and expert guidance.',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery'],
    github: 'https://github.com/itsn8k/FreeGuide-Bootstrap-5-Site',
    demo: 'https://freeguidepro.vercel.app',
    image: '/images/img4.png',
  },
  {
    name: 'Sneaker',
    description:
      'A sleek and responsive Bootstrap 5 website designed for sneaker enthusiasts. Sneaker Nine combines modern design with an intuitive layout, perfect for showcasing sneaker collections and fashion trends.',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery', 'Lighslider.js'],
    github: 'https://github.com/itsn8k/Sneaker-Bootstrap-5-Site',
    demo: 'https://sneaker-nine-lyart.vercel.app',
    image: '/images/img5.png',
  },
  {
    name: 'Trulia',
    description:
      'A sleek and responsive Bootstrap 5 website designed for Realestate. Trulia combines modern design with an intuitive layout, perfect for showcasing Realestate collections and trends.',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery', 'Lighslider.js'],
    github: 'https://github.com/itsn8k/Trulia-Site',
    demo: 'https://trulia-site-pi.vercel.app',
    image: '/images/img6.png',
  },
  {
    name: 'VTEKS',
    description:
      'A modern, responsive website template for web agencies and freelancers to showcase services, portfolios, and contact information.',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery', 'Lighslider.js'],
    github: 'https://github.com/itsn8k/Official-Vteks_Bootstrap-5-Site',
    demo: 'https://official-vteks.vercel.app',
    image: '/images/img7.png',
  },
  {
    name: 'Flux',
    description:
      'A sleek and responsive Bootstrap 5 website designed for Realestate. Trulia combines modern design with an intuitive layout, perfect for showcasing Realestate collections and trends.',
    technologies: ['HTML 5', 'Css 3', 'Bootstrap 5', 'Javascript', 'Jquery', 'Lighslider.js'],
    github: 'https://github.com/itsn8k/Flux-Website-Template',
    demo: 'https://flux-ashen.vercel.app',
    image: '/images/img8.png',
  },
]
</script>
