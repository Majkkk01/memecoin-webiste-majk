<template>
  <section id="about">
    <div class="container">
      <div class="about-text">
        <h2 class="section-title">About Us</h2>
        <p>
          Welcome to <span class="highlight">$DOGED</span>, a new generation memecoin built on the Solana blockchain. Our mission is to empower the community through decentralized finance while having a little fun along the way. With strong foundations in community engagement and innovation, we aim to make memecoins not just a trend, but a driving force for financial inclusivity.
        </p>
        <p>
          We envision a future where memes are more than just entertainment—they're assets that hold real value. Join us on our journey to revolutionize the meme economy and explore new possibilities in the world of DeFi!
        </p>
      </div>
      <div class="about-image">
        <img src="../../assets/images/logo.png" alt="About Us Image">
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript logic is required for this static section, but you could use props or external data if needed.
</script>

<style scoped>
#about {
  padding: 4rem 2rem;
  background-color: #c29940; /* Dark background for contrast */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #FFDD00; /* Neon Green for the section title */
  text-align: center;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
}

.about-text p {
  margin-bottom: 1rem;
}

.highlight {
  color: #FFDD00; /* Electric Yellow to highlight important text */
  font-weight: bold;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .about-text {
    text-align: left;
    max-width: 50%;
  }

  .about-image {
    max-width: 40%;
  }
}

@media (max-width: 768px) {
  .about-image img {
    margin-bottom: 2rem;
  }
}
</style>
