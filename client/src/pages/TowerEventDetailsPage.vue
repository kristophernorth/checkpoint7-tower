<script setup>
import { AppState } from '@/AppState';
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const towerEvent = computed(() => AppState.activeTowerEvent)

const route = useRoute()

watch(route, () => {
  getTowerEventById()
}, {immediate: true})

async function getTowerEventById() {
  try {
    const towerEventId = route.params.towerEventId
    logger.log(towerEventId)
    await towerEventsService.getTowerEventById(towerEventId)
  } catch (error){
    Pop.error(error);
    logger.error('Getting tower event by ID', error)
  }
  }
</script>


<template>
  <div v-if="towerEvent" class="container">
    <div class="row">
      <div class="col-md-12">
        <img :src="towerEvent.coverImg" :alt="towerEvent.name">
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <div>
          <h1>{{ towerEvent.name }}</h1><span>{{ towerEvent.type }}</span>
          <p>{{ towerEvent.description }}</p>
          <b>Date and Time</b>
          <p>{{ towerEvent.startDate }}</p>
          <b>Location</b>
          <p>{{ towerEvent.location }}</p>
        </div>
        <div class="border">
          <h4>See what folks are saying...</h4>
          <p>Comments form input</p>
          <button>Post Comment</button>
          <p>Comments</p>
          <p>Comments</p>
          <p>Comments</p>
        </div>
      </div>
      <div class="col-md-5 text-center">
        <div class="border">
          <p>Interested in attending?</p>
          <p>Grab a ticket!</p>
          <button>Attend</button>
        </div>
        <p>2 spots left</p>
        <div>
          <h3>Attendees</h3>
          <div class="border">
            <p>Attendee name</p>
            <p>Attendee name</p>
            <p>Attendee name</p>
            <p>Attendee name</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>