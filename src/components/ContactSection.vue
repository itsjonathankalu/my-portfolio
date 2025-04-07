<template>
  <section class="py-24 px-4 sm:px-6 relative" id="contact">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute w-[800px] h-[800px] bg-accent-light/[0.01] rounded-full blur-3xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      ></div>
    </div>

    <div class="max-w-[1200px] mx-auto">
      <h2
        class="relative text-4xl sm:text-5xl font-thin mb-16 text-center"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        <span class="text-accent-muted/50 block text-sm font-light tracking-[0.3em] mb-4"
          >CONTACT</span
        >
        <span class="text-accent-light relative">
          Let's Connect
          <span
            class="absolute -bottom-4 left-1/2 w-12 h-px bg-accent-light/20 -translate-x-1/2"
          ></span>
        </span>
      </h2>

      <p
        class="max-w-2xl mx-auto text-center text-accent-muted mb-16 leading-relaxed"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, delay: 200 }"
      >
        I'm always interested in hearing about new opportunities and connecting with fellow
        developers. Whether you want to discuss a project or just say hello, feel free to reach out!
      </p>

      <div
        class="flex justify-center items-center gap-6 flex-wrap"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, delay: 400 }"
      >
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          class="group flex items-center gap-3 px-5 py-3 rounded-lg bg-card/50 backdrop-blur-sm border border-accent-dark/10 hover:border-accent-light/10 text-accent-muted hover:text-accent-light transition-all duration-500 hover:translate-y-[-2px]"
        >
          <component
            :is="link.icon"
            class="w-5 h-5 opacity-60 group-hover:opacity-100 transition-all duration-500"
          />
          {{ link.name }}
        </a>
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
