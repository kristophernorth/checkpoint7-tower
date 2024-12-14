<script setup>
import { AppState } from '@/AppState';
import { ticketsService } from '@/services/TicketsService';
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const towerEvent = computed(() => AppState.activeTowerEvent)
const account = computed(() => AppState.account)
const attendeeProfiles = computed(() => AppState.attendeeProfiles)
const isAttending = computed(() => attendeeProfiles.value.some(attendeeProfile => attendeeProfile.accountId == account.value?.id))

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

async function cancelTowerEvent() {
  try {
    const yes = await Pop.confirm(`Are you sure you want to cancel the ${towerEvent.value.name} event?`, "This event is going to be a dud", "Yes I'm sure")
    if (!yes) return
    const towerEventId = route.params.towerEventId
    await towerEventsService.cancelTowerEvent(towerEventId)
  } catch (error) {
    Pop.error(error)
    logger.log('[Error canceling event]', error)
  }
}

  async function createTicket() {
    try {
      const towerEventData = {eventId: route.params.towerEventId}
      await ticketsService.createTicket(towerEventData)
    } catch (error) {
      Pop.error(error)
      logger.error('[Error creating ticket]', error)
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
          <h1>{{ towerEvent.name }}</h1><span class="border">{{ towerEvent.type }}</span>
          <button class="bg-warning rounded-pill px-3 ms-2">Edit</button>
          <button @click="cancelTowerEvent()" class="bg-danger rounded-pill px-3 ms-2">Cancel Event</button>
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
          <div v-if="account">
            <button v-if="isAttending" class="btn btn-info" disabled>Attending</button>
            <button v-else @click="createTicket()" class="btn btn-info">Attend</button>
          </div>
        </div>
        <p>Spots left: {{ attendeeProfiles.length }}</p>
        <div>
          <i v-if="towerEvent.isCanceled" class="mdi mdi-alert text-warning" :title="`${towerEvent.name} is canceled`">Event Canceled</i>
          <!-- //TODO calculate sold-out here using event capacity and ticket count -->
          <!-- <i v-if="towerEvent.capacity" -->
          <i class="border fw-bold text-success" v-else>Plenty of tickets remaining</i>
        </div>
        <div>
          <h3>Attendees</h3>
          <div v-for="attendeeProfile in attendeeProfiles" :key="attendeeProfile.id" class="border">
            <img :src="attendeeProfile.profile.picture" :alt="attendeeProfile.profile.name" class="img-fluid rounded">
            <span>{{ attendeeProfile.profile.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>