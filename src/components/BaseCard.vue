<!-- src/components/BaseCard.vue -->
<template>
    <div class="base-card">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard',
  };
  </script>
  
  <style scoped>
  .base-card {
    background: #011F35;
    /* background-color: blueviolet; */
    border-radius: 16px;
    padding: 24px 20px;
    color: #FFFFFF;
    box-sizing: border-box;
  }
  </style>
  