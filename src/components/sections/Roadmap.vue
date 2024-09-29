<template>
    <section id="roadmap">
      <h2 class="section-title">Roadmap</h2>
      <div class="timeline">
        <div v-for="(milestone, index) in milestones" :key="index" class="timeline-item">
          <div class="timeline-content">
            <h3>{{ milestone.quarter }}</h3>
            <p>{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Define roadmap milestones
  const milestones = ref([
    {
      quarter: 'Q1 2024',
      description: 'Launch Token and Initial DEX Offering (IDO).',
    },
    {
      quarter: 'Q2 2024',
      description: 'Start Liquidity Mining Program and Community Staking.',
    },
    {
      quarter: 'Q3 2024',
      description: 'Partnership Announcements and CEX Listing.',
    },
    {
      quarter: 'Q4 2024',
      description: 'Launch NFT Marketplace and Expand Ecosystem.',
    },
  ]);
  </script>
  
  <style scoped>
  #roadmap {
    padding: 4rem 2rem;
    background-color: #c29940; /* Dark background for contrast */
    color: #ffffff;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #FFDD00; /* Neon Green */
  }
  
  /* Timeline container */
  .timeline {
    position: relative;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Timeline item */
  .timeline-item {
    position: relative;
    padding: 1.5rem 2rem;
    margin-bottom: 2rem;
    width: 80%;
    background-color: #2b2b2b; /* Dark Gray background */
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  /* Vertical timeline line */
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: #001f3f; /* Neon Green line */
    left: 50%;
    transform: translateX(-50%);
  }

  
  /* Content inside each timeline item */
  .timeline-content {
    max-width: 90%;
    margin: 0 auto;
  }
  
  .timeline-content h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #FFDD00; /* Electric Yellow */
  }
  
  .timeline-content p {
    font-size: 1.2rem;
    color: #C4C4C4; /* Light Gray */
  }
  
  /* For larger screens, alternate items' text alignment */
  @media (min-width: 768px) {
    .timeline-item:nth-child(even) {
      align-self: flex-end;
    }
  
    .timeline-item:nth-child(odd) {
      align-self: flex-start;
    }
  
    .timeline-content {
      max-width: 45%;
    }
  }
  </style>
  