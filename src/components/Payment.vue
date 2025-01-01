<template>
    <div class="checkout-container">
      <iframe :src="checkoutUrl" class="checkout-iframe"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CheckoutComponent',
    data() {
      return {
        checkoutUrl: 'https://api.paychangu.com/payment/36918900458'
      };
    }
  }
  </script>
  
  <style scoped>
  .checkout-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .checkout-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  </style>
  