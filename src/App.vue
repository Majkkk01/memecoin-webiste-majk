<script setup>
import Navbar from "./components/Navbar.vue"
import Home from "./components/sections/Home.vue"
import About from "./components/sections/About.vue"
import Footrik from "./components/Footer.vue"
import Tokenomics from "./components/sections/Tokenomics.vue"
import Roadmap from "./components/sections/Roadmap.vue"
import Community from "./components/sections/Community.vue"

</script>

<template>
   <div id="app">
    <Navbar />
    <Home/>
    <div class="divider"></div>
    <About/>
    <div class="divider"></div>
     <Tokenomics/>
    <div class="divider"></div>
    <Roadmap/>
    <div class="divider"></div>
    <Community/>
    <div class="divider"></div>
    <Footrik/>
  </div>
</template>

<style scoped>

html {
  scroll-behavior: smooth;
}

.divider {
  width: 100%;
  height: 2px; /* Délka dělicí čáry */
  background-color: #001f3f  ; /* Barva čáry */
}
</style>