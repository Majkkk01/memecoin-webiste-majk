<template>
    <section id="community">
      <h2 class="section-title">Join Our Community</h2>
      <p class="section-subtitle">
        Connect with us on our social platforms to stay updated and be a part of the MEME Token revolution!
      </p>
      <div class="community-grid">
        <div class="community-item" v-for="(platform, index) in platforms" :key="index">
          <a :href="platform.link" target="_blank" class="community-link">
            <div class="icon-container">
              <font-awesome-icon :icon="platform.icon" />
            </div>
            <h3>{{ platform.name }}</h3>
            <p>{{ platform.description }}</p>
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  // Import FontAwesome icons
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faTelegram, faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
  
  const platforms = ref([
    {
      name: 'Telegram',
      description: 'Join the conversation on Telegram.',
      link: 'https://t.me/your_telegram_channel',
      icon: faTelegram
    },
    {
      name: 'Twitter',
      description: 'Follow us for the latest updates.',
      link: 'https://twitter.com/your_twitter_handle',
      icon: faTwitter
    }
  ]);
  </script>
  
  <style scoped>
  #community {
    padding: 4rem 2rem;
    background-color: #c29940; /* Dark background */
    color: #ffffff;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    color: #FFDD00; /* Neon Green */
    margin-bottom: 1rem;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #ffffff; /* Light Gray */
  }
  
  /* Community Grid */
  .community-grid {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  
  /* Community Item */
  .community-item {
    background-color: #2b2b2b; /* Dark Gray background for items */
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .community-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  /* Icon Container */
  .icon-container {
    font-size: 3rem;
    color: #FFDD00; /* Electric Yellow */
    margin-bottom: 1rem;
  }
  
  /* Community Links */
  .community-link {
    color: inherit;
    text-decoration: none;
  }
  
  .community-item h3 {
    font-size: 1.5rem;
    color: #FFDD00; /* Electric Yellow */
    margin-bottom: 1rem;
  }
  
  .community-item p {
    font-size: 1rem;
    color: #C4C4C4;
  }

  @media (max-width: 768px) {
    .community-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
}
  </style>
  