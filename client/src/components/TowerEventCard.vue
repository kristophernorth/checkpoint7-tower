<script setup>
import { TowerEvent } from '@/models/TowerEvent';


defineProps({
  towerEvent: {type: TowerEvent, required: true}
})
</script>


<template>
  
  <div class="card bg-transparent border border-0">
    <router-link :to="{name: 'Event Details', params: {towerEventId: towerEvent.id} }">
      <img :src="towerEvent.coverImg" class="card-img-top cover-img" :alt="towerEvent.name + towerEvent.startDate">
    </router-link>
    <b class="fs-3">{{ towerEvent.name }}</b>
    <p class="text-success">{{ towerEvent.creator.name }}</p>
    <p>{{ towerEvent.startDate }} - {{ towerEvent.location }}</p>
    <p class="text-primary">{{ towerEvent.isCanceled }}</p>
  </div>
</template>


<style lang="scss" scoped>



.cover-img{
  min-height: 30dvh;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
}
</style>