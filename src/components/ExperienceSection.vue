<template>
  <section class="py-24 px-4 sm:px-6 relative" id="experience">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[500px] h-[500px] bg-accent-light/[0.02] rounded-full blur-3xl -right-64 -top-32"
      ></div>
      <div
        class="absolute w-[500px] h-[500px] bg-accent-light/[0.02] rounded-full blur-3xl -left-64 -bottom-32"
      ></div>
    </div>

    <h2
      class="relative text-4xl sm:text-5xl font-thin mb-16 text-center"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      <span class="text-accent-muted/50 block text-sm font-light tracking-[0.3em] mb-4"
        >EXPERIENCE</span
      >
      <span class="text-accent-light relative">
        Career Journey
        <span
          class="absolute -bottom-4 left-1/2 w-12 h-px bg-accent-light/20 -translate-x-1/2"
        ></span>
      </span>
    </h2>

    <p
      class="max-w-2xl mx-auto text-accent-muted/80 mt-8 mb-16 text-sm leading-relaxed"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, delay: 200 }"
    >
      A timeline of my professional journey, highlighting key roles and achievements. Each position
      has contributed to my growth as a developer and problem solver.
    </p>

    <div class="max-w-3xl mx-auto">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="group relative mb-16 last:mb-0 hover:translate-x-1 transition-all duration-500"
        v-motion
        :initial="{ opacity: 0, x: -50 }"
        :enter="{ opacity: 1, x: 0, delay: index * 200 }"
      >
        <!-- Timeline Line -->
        <div
          class="absolute top-0 left-8 bottom-0 w-px bg-accent-dark/20 group-last:bg-gradient-to-b group-last:from-accent-dark/20 group-last:to-transparent"
        ></div>

        <!-- Timeline Dot -->
        <div
          class="absolute left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-light/20 group-hover:bg-accent-light/40 group-hover:scale-150 transition-all duration-500"
        ></div>

        <!-- Content -->
        <div class="ml-16 relative">
          <div class="flex flex-wrap items-center gap-3 mb-2">
            <h3 class="text-xl font-light text-accent-light tracking-wide">
              {{ experience.company }}
            </h3>
            <span
              class="text-sm text-accent-muted px-3 py-1 rounded-full border border-accent-dark/10 group-hover:border-accent-light/10 transition-all duration-500"
            >
              {{ experience.duration }}
            </span>
          </div>

          <h4 class="text-base text-accent-muted mb-4 font-light tracking-wide">
            {{ experience.role }}
          </h4>

          <!-- Description Card -->
          <div
            class="bg-card/50 backdrop-blur-sm hover:bg-card-hover rounded-xl p-8 border border-accent-dark/10 hover:border-accent-light/10 transition-all duration-500 group-hover:translate-y-[-2px]"
          >
            <ul class="space-y-4">
              <li
                v-for="(point, pointIndex) in experience.description"
                :key="pointIndex"
                class="flex gap-3 text-sm text-accent-muted leading-relaxed group/item"
              >
                <span
                  class="text-accent-light/30 group-hover/item:text-accent-light transition-all duration-300"
                >
                  ▹
                </span>
                {{ point }}
              </li>
            </ul>

            <!-- Technologies -->
            <div class="mt-8 pt-8 border-t border-accent-dark/10">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in experience.technologies"
                  :key="tech"
                  class="text-xs font-light text-accent-muted px-3 py-1 rounded-full bg-accent-dark/5 border border-accent-dark/10 hover:border-accent-light/10 hover:text-accent-light transition-all duration-300"
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
    company: 'Joinveet',
    role: 'Software Engineer Intern',
    duration: 'April 2025 - Present',
    description: [
      'Playing a key role in developing a responsive and high-performing web application at Joinveet, focusing on delivering clean and maintainable frontend code. Contributed to building user-friendly interfaces, integrating APIs for dynamic data, fixing performance bottlenecks, and enhancing overall UX. Collaborated closely with the team in feature planning, technical discussions, and documentation of development processes.',
    ],
    technologies: ['Vue.js', 'Node.JS', 'Git', 'TailwindCSS', 'JavaScript', 'MongoDB'],
   },
  {
    company: 'VALLEYNEST GLOBAL RESOURCES LIMITED UK',
    role: 'Full Stack Developer',
    duration: 'January 2024 - Present',
    description: [
      'Led the development of a high-performance web application for an E-commerce company for keeping track of their products and their sales.',
    ],
    technologies: ['Node.js', 'EJS', 'Express.Js', 'TailwindCSS', 'JavaScript', 'MySQL', 'JWT'],
  },
  {
    company: 'Slessor Healthcare UK',
    role: 'Full Stack Developer',
    duration: 'October 2023 - Present',
    description: [
      'Led the development of a high-performance web application for a healthcare company for keeping track of their mails, records, payroll, and more.',
    ],
    technologies: ['Node.js', 'EJS', 'Express.Js', 'TailwindCSS', 'JavaScript', 'MongoDB'],
  },
  // {
  //   company: 'Valleynest Global Resources Limited UK',
  //   role: 'Full Stack Developer',
  //   duration: '2024 - Present',
  //   description: [
  //     'Led the development of a high-performance web application for an E-commerce company for keeping track of their products and their sales.',
  //   ],
  //   technologies: [
  //     'React',
  //     'Vue.js',
  //     'JavaScript',
  //     'CSS3',
  //     'Git',
  //     'TailwindCSS',
  //     'Node.JS',
  //     'Aws',
  //     'MongoDB',
  //     'MySQL',
  //     'JWT',
  //   ],
  // },
]
</script>
