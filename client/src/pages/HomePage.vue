<script setup>
import { AppState } from '@/AppState';
import TowerEventCard from '@/components/TowerEventCard.vue';
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
  <div class="container">
    <section class="row">
      <div class="col-md-12">
        <h2>Upcoming Events</h2>
      </div>
      <div v-for="towerEvent in towerEvents" :key="towerEvent.id" class="col-md-4 mb-3">
        <TowerEventCard :towerEvent="towerEvent"/>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
