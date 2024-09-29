<template>
  <section id="hero" class="section">
    <div class="hero-content">
      <h1>Invest in the Future of Memes! <a style="color: #FFDD00;">$DOGED</a></h1>
      <p @click="copyToClipboard" class="copy-text">
      CA123456789123456789123456789
    </p>
    <p v-if="copied" class="success-message">
      CA has been copied
    </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Reaktivní proměnné
const textToCopy = 'CA123456789123456789123456789';
const copied = ref(false);

// Funkce pro kopírování textu do schránky
const copyToClipboard = () => {
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      copied.value = true; // Nastaví potvrzení na true

      // Zpráva o úspěchu zmizí po 3 sekundách
      setTimeout(() => {
        copied.value = false;
      }, 3000);
    })
    .catch(err => {
      console.error('Chyba při kopírování textu: ', err);
    });
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Hero sekce */
#hero {
  background-image: url('../../assets/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  width: 100%;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.copy-text {
  cursor: pointer;
  color: #FFDD00;
  font-size: 2rem;
  transition: color 0.3s ease;
}

.copy-text:hover {
  color: #39FF14;
}

.success-message {
  color: #39FF14;
  margin-top: 10px;
}

/* Responzivní stylování */

/* Pro tablety a menší obrazovky */
@media (max-width: 768px) {

  .hero-content h1 {
    font-size: 2rem;
  }

  .btn-primary {
    padding: 10px 15px;
  }
  .copy-text {
    font-size: 1.2rem;
  }
}

/* Pro mobilní telefony */
@media (max-width: 480px) {

  .hero-content h1 {
    font-size: 1.8rem;
  }

  .btn-primary {
    padding: 8px 12px;
    font-size: 0.95rem;
  }
}
</style>
