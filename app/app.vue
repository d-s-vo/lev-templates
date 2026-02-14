<script setup lang="ts">
// Импортируем объект с данными
import { mockHeaderData } from '../data/headerMock'
</script>

<template>
  <div>
    <Header :data="mockHeaderData" />
    
    <main>
      <NuxtPage />
    </main>
  </div>
</template>