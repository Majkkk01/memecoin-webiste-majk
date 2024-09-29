<template>
    <section id="tokenomics">
      <h2 class="section-title">Tokenomics</h2>
      <div class="grid-container">
        <div class="grid-item">
          <h3>Max Supply</h3>
          <p>1,000,000,000 MEME</p>
        </div>
        <div class="grid-item">
          <h3>Distribution</h3>
          <p>50% Liquidity, 30% Staking, 20% Team</p>
        </div>
        <div class="grid-item">
          <h3>Token Allocation</h3>
          <p>50% to Public, 25% Private Sale, 25% Reserves</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional JavaScript is required in this case, but you can dynamically load tokenomics data here if needed.
  </script>
  
  <style scoped>
  #tokenomics {
    padding: 4rem 2rem;
    background-color: #c29940; /* Dark background for contrast */
    color: #ffffff;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #FFDD00; /* Neon Green */
  }
  
  /* Grid container */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem; /* Space between grid items */
  }
  
  /* Grid item */
  .grid-item {
    background-color: #2b2b2b; /* Dark Gray background for grid items */
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .grid-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #FFDD00; /* Electric Yellow */
  }
  
  .grid-item p {
    font-size: 1.2rem;
    color: #C4C4C4; /* Light Gray */
  }
  
  .grid-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: 1fr 1fr; /* 2 columns on tablet */
    }
  }
  
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr; /* 1 column on mobile */
    }
  }
  </style>
  