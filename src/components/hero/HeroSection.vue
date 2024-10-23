<template>
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-image-wrapper">
          <img
            src="/hero.png"
            alt="Look Scanned"
            class="hero-image"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // 这里可以添加任何必要的逻辑
  </script>
  
  <style scoped>
  .hero-section {
    position: relative;
    overflow: hidden;
    background-color: #ffffff;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }
  
  .hero-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hero-image-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 69.18%; /* 假设图片比例是16:9，如果不是，请调整这个值 */
    overflow: hidden;
  }
  
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* @media (min-width: 640px) {
    .hero-section {
      padding: 3rem 0;
    }
  } */
  </style>
