<script setup>
import { AppState } from '@/AppState';
import CreateEventModal from '@/components/CreateEventModal.vue';
import TowerEventCard from '@/components/TowerEventCard.vue';
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted, ref } from 'vue';

const towerEvents = computed(() => { 
  if(activeFilterType.value == 'all') return AppState.towerEvents
  return AppState.towerEvents.filter(towerEvent => towerEvent.type == activeFilterType.value) 
})

const activeFilterType = ref('all')

const eventTypes = [
{name: 'all', emoji: '∞'},
{name: 'concert', emoji: '🎸'},
{name: 'sport', emoji: '⚽️'},
{name: 'convention', emoji: '🏪'},
{name: 'digital', emoji: '💻'}

// 'concert', 
//   'sport', 
//   'convention', 
//   'digital'
]

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
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Event management for people, by people</h1>
        <p>Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Tower. Events are happening every day—log in to join the fun.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <h2>How tower works</h2>
    <div class="row d-flex justify-content-between">
      <div role="button" class="col-md-5 border">
        <h4>Discover events you're interested in</h4>
        <p>Browse through community hosted events for all the things you love</p>
      </div>
      <div role="button" class="col-md-5 border" data-bs-toggle="modal" data-bs-target="#towerEventModal">
        <h4>Start an event to invite your friends</h4>
        <p>Create your own Tower event, and draw from a community of millions</p>
      </div>
    </div>
  </div>
  <div class="container">
    <h2>Explore top categories</h2>
    <div class="row">
      <div class="row d-flex justify-content-between text-center">
        <div v-for="eventType in eventTypes" :key="'filter-' + eventType.name" role="button" class="col-md-2 border p-4 m-2 rounded">
          <div @click="activeFilterType = eventType.name" class="text-capitalize fw-bold">
            {{ eventType.name }} {{ eventType.emoji }}
          </div>
        </div>
      </div>
    </div>
  </div>
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
  <CreateEventModal/>
</template>

<style scoped lang="scss">

</style>
