<template>
  <div class="bg-green-50 h-screen md:h-none overflow-y-scroll mt-2 md:mt-0">
    <section class="mt-4 md:mt-4 md:w-full bg-green-50 md:overflow-y-scroll">
      <div class="rounded-lg md:overflow-y-scroll">
        <h3 class="text-2xl text-green-800 mb-3 md:text-left text-center">
          Menu Icon
        </h3>
        <div
          class="mx-auto bg-green-100 border md:border-0 border-green-800 mb-8 md:mb-2 rounded-4xl py-2 mt-16 md:mt-10 h-96 flex justify-center items-center w-5/6 md:w-3/5 shadow-lg"
        >
          <menu-icon
            v-slot="{ toggle }"
            @trigger="() => (toggleIcon = !toggleIcon)"
          >
            <div
              role="button"
              tabindex="0"
              class="inline-block cursor-pointer"
              @click="() => toggle()"
              @keydown.enter="() => toggle()"
            >
              <div
                :class="{ 'translate-y-2.5 -rotate-45': toggleIcon }"
                class="w-8 h-1 my-1.5 bar1 duration-300 bg-green-900 rounded pointer-events-none"
              ></div>
              <div
                :class="{ 'opacity-0': toggleIcon }"
                class="w-8 h-1 my-1.5 bar2 duration-300 bg-green-900 rounded pointer-events-none"
              ></div>
              <div
                :class="{ '-translate-y-2.5 rotate-45': toggleIcon }"
                class="w-8 h-1 my-1.5 bar3 duration-300 bg-green-900 rounded pointer-events-none"
              ></div>
            </div>
          </menu-icon>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuIcon from "@/components/MenuIcon";
const toggleIcon = ref(false);
</script>
