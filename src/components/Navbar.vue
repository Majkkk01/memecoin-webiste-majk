<template>
  <nav>
    <div class="logo">
      <a href="#hero" @click.prevent="scrollAndCloseMenu('hero')"><img src="../assets/images/logo.png" alt=""></a>
    </div>

    <!-- Hamburger menu pro malé obrazovky -->
    <div class="menu-toggle" @click="toggleMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>

    <ul :class="{ 'nav-active': isActive }">
      <li><a href="#hero" @click.prevent="scrollAndCloseMenu('hero')" class="nav-item">Home</a></li>
      <li><a href="#about" @click.prevent="scrollAndCloseMenu('about')" class="nav-item">About</a></li>
      <li><a href="#tokenomics" @click.prevent="scrollAndCloseMenu('tokenomics')" class="nav-item">Tokenomics</a></li>
      <li><a href="#roadmap" @click.prevent="scrollAndCloseMenu('roadmap')" class="nav-item">Roadmap</a></li>
      <li><a href="#community" @click.prevent="scrollAndCloseMenu('community')" class="nav-item">Community</a></li>
    </ul>

    <div class="buy-button-nav">
      <a href="">Buy</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// Toggle pro mobilní menu
const isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

// Funkce pro scrollování a zavření menu
function scrollAndCloseMenu(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 50, // 50px offset kvůli pevné navigaci
      behavior: 'smooth', // Plynulé scrollování
    });
  }
  // Zavřít menu po kliknutí na odkaz
  if (window.innerWidth <= 768) {
    isActive.value = false;
  }
}
</script>

<style scoped>
/* Základní styl pro navbar */
nav {
  background-color: #c29940;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 20px 50px;
  position: fixed;
  top: 0;
  z-index: 100;
}

/* Styl pro logo */
.logo img {
  width: 55px;
}

/* Základní styl pro navigační odkazy */
nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
}

nav li {
  padding: 5px;
  font-size: 1.5rem;
  color: #001f3f;
  text-transform: uppercase;
  font-family: 'Playfair Display', system-ui;
}

.nav-item {
  color: #001f3f;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-item:hover {
  color: #FFDD00;
  transform: translateY(-2px);
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background-color: #FFDD00;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.buy-button-nav a {
  color: #001f3f;
  font-size: 1.5rem;
  padding: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Poppins", system-ui;
  font-weight: 700;
  font-style: normal;
  border: 2px solid ;
  border-radius: 10%;
}

.buy-button-nav a:hover {
  background-color: #FFDD00;
  transform: scale(1.1);

}

/* Skrytí menu pro malé obrazovky */
.menu-toggle {
  display: none;
  font-size: 2rem;
  color: #001f3f;
  cursor: pointer;
}

/* Styl pro aktivní stav menu (mobilní verze) */
.nav-active {
  display: block;
}

@media (max-width: 768px) {

  nav {
    padding: 10px 20px;
  }
  /* Hamburger menu */
  .menu-toggle {
    display: block;
  }

  .logo img {
    width: 55px;
  }

  /* Skrytí navigačních odkazů v defaultu pro malé obrazovky */
  nav ul {
    position: absolute;
    top: 70px;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 50px;
    display: none;
  }

  .nav-item {
    color: #ffffff;
  }

  nav ul li {
    margin: 20px 0;
  }

  .buy-button-nav a {
    padding: 8px;
    font-size: 1.2rem;
  }

  /* Styl pro zobrazení navigace po kliknutí na hamburger menu */
  .nav-active {
    display: flex;
  }

  /* Skrytí sociálních ikon v mobilní verzi (pokud chceš) */
  #social-nav {
    display: none;
  }
}
</style>
