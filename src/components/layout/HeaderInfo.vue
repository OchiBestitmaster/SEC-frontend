<template>
  <div id="headerinfo" class="text-white">
    您好 {{ username }} ｜<a @click="handleLogout" style="cursor: pointer;">登出</a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  username: {
    type: String,
    required: true
  }
});

const handleLogout = () => {
  console.log("logout clicked");
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: underline;
}
a:hover {
  color: #eee;
}
</style>
