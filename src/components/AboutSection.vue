<template>
  <section class="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-black" id="about">
    <div class="max-w-7xl mx-auto">
      <!-- Section Title -->
      <h2
        class="text-3xl md:text-4xl font-bold mb-16 text-black dark:text-white"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <span class="text-black/60 dark:text-white/60 text-sm font-medium tracking-widest block mb-2">ABOUT</span>
        About Me
      </h2>
      
      <!-- About Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image Column -->
        <div 
          class="relative"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div class="aspect-square max-w-md mx-auto relative">
            <img 
              src="/me.png" 
              alt="Robinson Honour" 
              class="w-full h-full object-cover grayscale"
            />
            <div class="absolute inset-0 border-8 border-black/10 dark:border-white/10 -m-4"></div>
          </div>
        </div>
        
        <!-- Text Column -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }"
        >
          <p class="text-black/80 dark:text-white/80 mb-6 text-lg">
            I like to craft solid and scalable products with great user experiences.
          </p>
          
          <p class="text-black/70 dark:text-white/70 mb-8">
            I'm Robinson Honour, 19, with 7.5+ years of experience. Started coding in
            2017, specializing in web development, app development, robotics, cloud
            computing, and a bit of game development.
          </p>
          
          <p class="text-black/70 dark:text-white/70 mb-8">
            Self-taught programmer with proven experience in building live projects.
            Active tech content creator and speaker.
          </p>
          
          <!-- Skills Section -->
          <div class="mt-12">
            <h3 class="text-xl font-semibold mb-4 text-black dark:text-white">My Skills</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 rounded-full text-sm">
                JavaScript
              </span>
              <span class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 rounded-full text-sm">
                Vue.js
              </span>
              <span class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 rounded-full text-sm">
                React
              </span>
              <span class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 rounded-full text-sm">
                Node.js
              </span>
              <span class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 rounded-full text-sm">
                MongoDB
              </span>
              <span class="px-4 py-2 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 rounded-full text-sm">
                TailwindCSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
