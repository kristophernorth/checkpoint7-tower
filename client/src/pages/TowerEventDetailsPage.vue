<script setup>
import { AppState } from '@/AppState';
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const towerEvent = computed(() => AppState.activeTowerEvent)

const route = useRoute()

onMounted(() => {
  getTowerEventById()
})

async function getTowerEventById() {
  try {
    const towerEventId = route.params.towerEventId
    await towerEventsService.getTowerEventById(towerEventId)
  } catch (error){
    Pop.error(error);
    logger.error('Getting tower event by ID', error)
  }
  }
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Tower Event Details</h1>
        {{ towerEvent }}
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>