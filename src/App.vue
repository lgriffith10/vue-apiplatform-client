<template>
  <div class="flex flex-col h-screen">
    <div class="w-full bg-blue-400 flex justify-end gap-x-[20px] px-[50px] py-[20px] text-white">
      <span class="p-[10px] hover:bg-white hover:text-blue-400 transition-colors rounded">
        <router-link to="/">Homepage</router-link>
      </span>
      <span class="p-[10px] hover:bg-white hover:text-blue-400 transition-colors rounded">
        <router-link to="/login">Login</router-link>
      </span>
    </div>

    <div class="h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
</style>