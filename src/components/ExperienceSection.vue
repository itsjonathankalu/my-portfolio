<template>
  <section class="py-24 px-4 sm:px-6 relative theme-transition" id="experience">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[500px] h-[500px] bg-accent-light/[0.02] dark:bg-accent-light-dark/[0.02] rounded-full blur-3xl -right-64 -top-32"
      ></div>
      <div
        class="absolute w-[500px] h-[500px] bg-accent-light/[0.02] dark:bg-accent-light-dark/[0.02] rounded-full blur-3xl -left-64 -bottom-32"
      ></div>
    </div>

    <h2
      class="relative text-4xl sm:text-5xl font-bold mb-16 text-center text-accent-light dark:text-accent-light-dark"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
    >
      <span class="text-accent-muted dark:text-accent-muted-dark block text-sm font-medium tracking-[0.3em] mb-4"
        >WORK EXPERIENCE</span
      >
      <span class="relative inline-block">
        Career Journey
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
      A timeline of my professional journey, highlighting key roles and achievements. Each position
      has contributed to my growth as a developer and problem solver.
    </p>

    <div class="max-w-4xl mx-auto">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="group relative mb-16 last:mb-0 hover:translate-x-1 transition-all duration-500"
        v-motion
        :initial="{ opacity: 0, x: -30 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 200 } }"
      >
        <!-- Timeline Line -->
        <div
          class="absolute top-0 left-8 bottom-0 w-px bg-accent-dark/20 dark:bg-accent-dark-dark/20 group-last:bg-gradient-to-b group-last:from-accent-dark/20 dark:group-last:from-accent-dark-dark/20 group-last:to-transparent"
        ></div>

        <!-- Timeline Dot -->
        <div
          class="absolute left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-light/20 dark:bg-accent-light-dark/20 group-hover:bg-accent-light/40 dark:group-hover:bg-accent-light-dark/40 group-hover:scale-150 transition-all duration-500"
        ></div>

        <!-- Content -->
        <div class="ml-16 relative">
          <div class="flex flex-wrap items-center gap-3 mb-2">
            <h3 class="text-xl font-medium text-accent-light dark:text-accent-light-dark tracking-wide">
              {{ experience.company }}
            </h3>
            <span
              class="text-sm text-accent-muted dark:text-accent-muted-dark px-3 py-1 rounded-full border border-accent-dark/10 dark:border-accent-dark-dark/10 group-hover:border-accent-light/10 dark:group-hover:border-accent-light-dark/10 transition-all duration-500"
            >
              {{ experience.duration }}
            </span>
          </div>

          <h4 class="text-base text-accent-muted dark:text-accent-muted-dark mb-4 font-medium tracking-wide">
            {{ experience.role }}
          </h4>

          <!-- Description Card -->
          <div
            class="bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm hover:bg-card-hover dark:hover:bg-card-hover-dark rounded-xl p-8 border border-accent-dark/10 dark:border-accent-dark-dark/10 hover:border-accent-light/10 dark:hover:border-accent-light-dark/10 transition-all duration-500 group-hover:translate-y-[-2px] shadow-sm hover:shadow-md"
          >
            <ul class="space-y-4">
              <li
                v-for="(point, pointIndex) in experience.description"
                :key="pointIndex"
                class="flex gap-3 text-sm text-accent-muted dark:text-accent-muted-dark leading-relaxed group/item"
              >
                <span
                  class="text-accent-light/30 dark:text-accent-light-dark/30 group-hover/item:text-accent-light dark:group-hover/item:text-accent-light-dark transition-all duration-300"
                >
                  ▹
                </span>
                {{ point }}
              </li>
            </ul>

            <!-- Technologies -->
            <div class="mt-8 pt-8 border-t border-accent-dark/10 dark:border-accent-dark-dark/10">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in experience.technologies"
                  :key="tech"
                  class="text-xs font-medium text-accent-muted dark:text-accent-muted-dark px-3 py-1 rounded-full bg-accent-dark/5 dark:bg-accent-dark-dark/5 border border-accent-dark/10 dark:border-accent-dark-dark/10 hover:border-accent-light/10 dark:hover:border-accent-light-dark/10 hover:text-accent-light dark:hover:text-accent-light-dark transition-all duration-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


const experiences = [
  {
    company: 'Steadfast Int.',
    role: 'Frontend Developer',
    duration: '2025 - Present',
    description: [
      'Develop clean, scalable, and efficient frontend code using Vue.js and modern web technologies.',
      'Build reusable components with Vue 3 Composition API for improved code organization and maintainability.',
      'Collaborate with design and backend teams to implement responsive, user-friendly interfaces.',
    ],
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'Vite', 'Pinia', 'REST APIs'],
  },
  {
    company: 'Indigetix',
    role: 'Fullstack Developer',
    duration: '2024 - Present',
    description: [
      'Architect and develop full-stack web applications using modern JavaScript frameworks.',
      'Implement secure authentication systems and optimize database queries for performance.',
      'Mentor junior developers and contribute to technical decision-making.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Docker'],
  },
  {
    company: 'OrganStation',
    role: 'Backend Developer',
    duration: '2019 - 2022',
    description: [
      'Designed and implemented RESTful APIs and microservices architecture.',
      'Optimized database performance and implemented caching strategies.',
      'Collaborated with frontend teams to ensure seamless integration.',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker', 'CI/CD'],
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    duration: '2018 - Present',
    description: [
      'Developed custom web applications for diverse clients across various industries.',
      'Managed entire project lifecycles from requirements gathering to deployment and maintenance.',
      'Implemented responsive designs and optimized applications for performance and SEO.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Vue.js',
      'Node.js',
      'MongoDB',
      'MySQL',
      'AWS',
      'Firebase',
    ],
  },
]
</script>
