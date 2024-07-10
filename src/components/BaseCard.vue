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
    border-radius: 16px;
    padding: 24px 32px;
  }
  </style>
  