<template>
  <section class="py-16 px-4 sm:px-6" id="about">
    <div class="max-w-3xl mx-auto">
      <h2
        class="text-xl sm:text-2xl font-bold mb-8 uppercase text-gray-200 text-center"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        About Me
      </h2>
      <div
        class="prose prose-invert max-w-none"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, delay: 200 }"
      >
        <p class="text-gray-400 mb-6">
          I'm a passionate software engineer with a unique blend of technical expertise and creative
          problem-solving abilities. My journey in software development has been driven by a desire
          to create meaningful solutions that make a difference.
        </p>
        <p class="text-gray-400 mb-6">
          With a strong foundation in modern web technologies and a keen eye for detail, I
          specialize in building scalable, user-centric applications. I believe in writing clean,
          maintainable code and staying up-to-date with the latest industry trends and best
          practices.
        </p>
        <p class="text-gray-400">
          When I'm not coding, you can find me exploring new technologies, contributing to
          open-source projects, or sharing my knowledge with the developer community through
          technical writing and mentorship.
        </p>
      </div>
    </div>
  </section>
</template>
