<script setup>
import { AppState } from '@/AppState';
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const towerEvents = computed(()=>AppState.towerEvents)

onMounted(() => {
  getTowerEvents()
})

async function getTowerEvents() {
  try {
    await towerEventsService.getTowerEvents()
  } catch (error) {
    Pop.error(error)
    logger.error('[Getting albums]', error)
  }
}
</script>

<template>
  <h1>Tower Events</h1>
  <div>{{ towerEvents }}</div>
</template>

<style scoped lang="scss">

</style>
