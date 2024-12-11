<script setup>
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { onMounted } from 'vue';


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
</template>

<style scoped lang="scss">

</style>
