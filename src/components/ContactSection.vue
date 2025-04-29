<template>
  <section class="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-black" id="contact">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <div class="mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">Contact</h2>
        <p class="text-black/70 dark:text-white/70 max-w-2xl">
          Let's connect and discuss your next project. I'm always open to new opportunities and collaborations.
        </p>
      </div>

      <!-- Contact Form and Info Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div 
          class="order-2 lg:order-1"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name" 
                class="w-full px-4 py-3 bg-transparent border border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none text-black dark:text-white transition-colors duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                class="w-full px-4 py-3 bg-transparent border border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none text-black dark:text-white transition-colors duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-black/70 dark:text-white/70 mb-2">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                class="w-full px-4 py-3 bg-transparent border border-black/20 dark:border-white/20 focus:border-black dark:focus:border-white focus:outline-none text-black dark:text-white transition-colors duration-300"
                placeholder="Hello, I'd like to talk about..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 flex items-center gap-2"
            >
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
        
        <!-- Contact Info -->
        <div 
          class="order-1 lg:order-2"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="mb-10">
            <h3 class="text-xl font-bold mb-4 text-black dark:text-white">Get in Touch</h3>
            <p class="text-black/70 dark:text-white/70 mb-6">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some creative direction, I'd love to hear about it.
            </p>
            
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/5 text-black dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:jonathankalu313@gmail.com" class="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-300">
                jonathankalu313@gmail.com
              </a>
            </div>
          </div>
          
          <!-- Social Links -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-black dark:text-white">Connect With Me</h3>
            <div class="flex flex-col space-y-4">
              <a 
                v-for="link in socialLinks" 
                :key="link.name" 
                :href="link.url" 
                target="_blank" 
                class="flex items-center gap-3 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                <div class="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/5">
                  <component :is="link.icon" class="w-5 h-5" />
                </div>
                <span>{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const EmailIcon = () =>
  h(
    'svg',
    {
      class: 'w-5 h-5',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
    },
    [
      h('path', {
        d: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z',
      }),
      h('path', {
        d: 'M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z',
      }),
    ],
  )

const LinkedInIcon = () =>
  h(
    'svg',
    {
      class: 'w-5 h-5',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
    },
    [
      h('path', {
        d: 'M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z',
      }),
    ],
  )

const GithubIcon = () =>
  h(
    'svg',
    {
      class: 'w-5 h-5',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
    },
    [
      h('path', {
        d: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z',
      }),
    ],
  )

const XIcon = () =>
  h(
    'svg',
    {
      class: 'w-5 h-5',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
    },
    [
      h('path', {
        d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      }),
    ],
  )

const socialLinks = [
  {
    name: 'Send an email',
    url: 'mailto:jonathankalu313@gmail.com',
    icon: EmailIcon,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jonathankalu',
    icon: LinkedInIcon,
  },
  {
    name: 'X (Twitter)',
    url: 'https://twitter.com/itsdevnate',
    icon: XIcon,
  },
  {
    name: 'Github',
    url: 'https://github.com/itsdevnate',
    icon: GithubIcon,
  },
]
</script>
