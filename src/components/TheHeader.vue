<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300 theme-transition"
    :class="[
      scrolled
        ? 'bg-background/80 dark:bg-background-dark/80 backdrop-blur-lg border-accent-dark/10 dark:border-accent-dark-dark/10'
        : 'bg-background dark:bg-background-dark border-accent-dark/5 dark:border-accent-dark-dark/5',
      'border-b',
    ]"
  >
    <nav class="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a 
          href="#" 
          class="text-xl font-bold relative group"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span class="text-accent-light dark:text-accent-light-dark group-hover:opacity-80 transition-all duration-300"
            >RH</span
          >
          <span
            class="absolute -inset-x-2 -inset-y-1 group-hover:bg-accent-light/5 dark:group-hover:bg-accent-light-dark/5 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100"
          ></span>
        </a>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-4 md:hidden">
          <!-- Theme Toggle (Mobile) -->
          <ThemeToggle />
          
          <!-- Menu Button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="text-accent-muted dark:text-accent-muted-dark hover:text-accent-light dark:hover:text-accent-light-dark transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div 
          class="hidden md:flex items-center gap-6"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <!-- Navigation Links -->
          <div
            class="flex items-center bg-card/50 dark:bg-card-dark/50 backdrop-blur-sm rounded-full border border-accent-dark/10 dark:border-accent-dark-dark/10"
          >
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="isMenuOpen = false"
              class="relative px-4 py-2 text-sm text-accent-muted dark:text-accent-muted-dark hover:text-accent-light dark:hover:text-accent-light-dark transition-all duration-300 group flex items-center gap-2"
            >
              <svg
                class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" :d="link.icon" />
              </svg>
              {{ link.text }}
              <span
                class="absolute inset-0 bg-accent-light/5 dark:bg-accent-light-dark/5 rounded-full scale-0 group-hover:scale-100 transition-all duration-500"
              ></span>
            </a>
          </div>

          <!-- Theme Toggle -->
          <ThemeToggle />

          <!-- Blog Button -->
          <a 
            href="#blog" 
            class="px-4 py-2 rounded-full bg-accent-light dark:bg-accent-light-dark text-background dark:text-background-dark text-sm font-medium hover:opacity-90 transition-all duration-300"
          >
            My Blog
          </a>
        </div>

        <!-- Mobile Menu -->
        <div
          v-if="isMenuOpen"
          class="absolute top-full left-0 right-0 bg-background/95 dark:bg-background-dark/95 backdrop-blur-lg border-b border-accent-dark/10 dark:border-accent-dark-dark/10 md:hidden transform transition-all duration-300"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0 }"
          :leave="{ opacity: 0, y: -20 }"
        >
          <div class="p-6 space-y-6">
            <!-- Profile Picture in Mobile Menu -->
            <div class="flex items-center gap-4 pb-4 border-b border-accent-dark/10 dark:border-accent-dark-dark/10">
              <img
                src="/me.png"
                alt="Profile"
                class="w-12 h-12 rounded-full object-cover border border-accent-dark/20 dark:border-accent-dark-dark/20 hover:border-accent-light/20 dark:hover:border-accent-light-dark/20 transition-all duration-500 hover:scale-110"
              />
              <div>
                <h3 class="text-accent-light dark:text-accent-light-dark font-light">Robinson Honour</h3>
                <p class="text-sm text-accent-muted dark:text-accent-muted-dark">Software Engineer</p>
              </div>
            </div>

            <!-- Navigation Links -->
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="isMenuOpen = false"
              class="flex items-center gap-3 text-accent-muted dark:text-accent-muted-dark hover:text-accent-light dark:hover:text-accent-light-dark transition-all duration-300 py-3 px-2 rounded-lg hover:bg-accent-light/5 dark:hover:bg-accent-light-dark/5"
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" :d="link.icon" />
              </svg>
              {{ link.text }}
            </a>

            <!-- Blog Button (Mobile) -->
            <a 
              href="#blog" 
              class="block mt-4 text-center px-4 py-2 rounded-full bg-accent-light dark:bg-accent-light-dark text-background dark:text-background-dark text-sm font-medium hover:opacity-90 transition-all duration-300"
            >
              My Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  {
    href: '#home',
    text: 'Home',
    icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  },
  {
    href: '#about',
    text: 'About',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
  {
    href: '#projects',
    text: 'Projects',
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
  },
  {
    href: '#experience',
    text: 'Experience',
    icon: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
  },
  {
    href: '#contact',
    text: 'Contact',
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
  },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
