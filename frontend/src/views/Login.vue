<template>
  <div class="home">
    <Form_login/>
  </div>
</template>

<script>
import Form_login from '@/components/Form_login.vue'


export default {
  name: 'Login',
  components: {
    Form_login
  }
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
