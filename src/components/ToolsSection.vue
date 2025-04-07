<template>
  <section class="py-16 px-4 sm:px-6" id="tools">
    <h2
      class="relative text-4xl sm:text-5xl font-thin mb-16 text-center"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      <span class="text-accent-muted/50 block text-sm font-light tracking-[0.3em] mb-4">STACK</span>
      <span class="text-accent-light relative">
        Technologies & Tools
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
      The technologies and tools I use to bring ideas to life. My stack is constantly evolving as I
      explore new ways to create better solutions.
    </p>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
      v-motion
      :initial="{ opacity: 0, y: 100 }"
      :enter="{ opacity: 1, y: 0, delay: 200 }"
    >
      <div
        v-for="tool in tools"
        :key="tool.name"
        class="group bg-card hover:bg-card-hover p-4 rounded-xl border border-accent-dark/10 hover:border-accent-light/10 transition-all duration-500 hover:translate-y-[-2px]"
        :class="tool.isAnimating ? 'animate-wiggle' : ''"
        @click="animateTool(tool)"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-lg bg-accent-dark/10 flex items-center justify-center group-hover:bg-accent-dark/20 transition-all duration-500"
          >
            <img :src="tool.icon" :alt="tool.name" class="w-6 h-6" />
          </div>
          <div>
            <span
              class="text-sm font-medium text-accent-muted group-hover:text-accent-light transition-all duration-300"
            >
              {{ tool.name }}
            </span>
            <span
              class="block text-xs text-accent-dark group-hover:text-accent-muted transition-all duration-300"
            >
              {{ tool.type }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const tools = ref([
  {
    name: 'Vue.js',
    icon: 'https://img.icons8.com/color/48/vue-js.png',
    type: 'Frontend',
    isAnimating: false,
  },
  {
    name: 'React',
    icon: 'https://img.icons8.com/color/48/react-native.png',
    type: 'Frontend',
    isAnimating: false,
  },
  {
    name: 'Node.js',
    icon: 'https://img.icons8.com/fluency/48/node-js.png',
    type: 'Backend',
    isAnimating: false,
  },
  {
    name: 'JavaScript',
    icon: 'https://img.icons8.com/color/48/javascript.png',
    type: 'Language',
    isAnimating: false,
  },
  {
    name: 'MongoDB',
    icon: 'https://img.icons8.com/color/48/mongo-db.png',
    type: 'Database',
    isAnimating: false,
  },
  {
    name: 'Tailwind',
    icon: 'https://img.icons8.com/fluency/48/tailwind_css.png',
    type: 'Framework',
    isAnimating: false,
  },
  {
    name: 'Express',
    icon: 'https://img.icons8.com/ios/50/express-js.png',
    type: 'Framework',
    isAnimating: false,
  },
  {
    name: 'Git',
    icon: 'https://img.icons8.com/color/48/git.png',
    type: 'Version Control',
    isAnimating: false,
  },
  // Add more tools as needed
])

const animateTool = (tool) => {
  tool.isAnimating = true
  setTimeout(() => {
    tool.isAnimating = false
  }, 500) // Duration matches the animation
}
</script>

<style>
@keyframes wiggle {
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(-3deg) scale(1.1);
  }
  50% {
    transform: rotate(3deg) scale(1.1);
  }
  75% {
    transform: rotate(-3deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

.animate-wiggle {
  animation: wiggle 0.5s ease-in-out;
}
</style>
