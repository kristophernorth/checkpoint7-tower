<script setup>
import { towerEventsService } from '@/services/TowerEventsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { Modal } from 'bootstrap';
import { ref } from 'vue';

  const eventTypes = ['concert', 'sport', 'convention', 'digital']
  const editableTowerEventData = ref({
    name: '',
    location: '',
    type: '',
    startDate: '',
    capacity: '',
    coverImg: '',
    description: ''
  })

async function createTowerEvent() {
  try {
    await towerEventsService.createTowerEvent(editableTowerEventData.value)
    editableTowerEventData.value = {
      name: '',
      location: '',
      type: '',
      startDate: '',
      capacity: '',
      coverImg: '',
      description: ''
    }
    Modal.getInstance('#towerEventModal').hide()
  } catch (error) {
    Pop.error(error)
    logger.error('[Creating event failed]', error)
  }
}

</script>


<template>
  <form @submit.prevent="createTowerEvent()">
    <div class="row">
      <div class="col-md-7">
        Image preview
      </div>
      <div class="col-md-5">
        <div class="row">
          <div class="col-12 mb-3">
            <label for="name" class="form-label">Event Name</label>
            <input v-model="editableTowerEventData.name" type="text" class="form-control" id="name" placeholder="Event name..." required minlength="3" maxlength="50">
          </div>
          <div class="col-12 mb-3">
            <label for="location" class="form-label">Event Location</label>
            <input v-model="editableTowerEventData.location" type="text" class="form-control" id="location" placeholder="Location..." required minlength="1" maxlength="500">
          </div>
          <div class="col-12 mb-3">
            <label class="form-label" for="type">Event type</label>
            <select v-model="editableTowerEventData.type" class="form-select text-capitalize" id="type" required>
              <option selected value="" disabled>Choose an event type</option>
              <option v-for="eventType in eventTypes" :key="'option-' + eventType" :value="eventType" class="text-capitalize">
                {{ eventType }}
              </option>
            </select>
          </div>
          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-7">
                <label for="startDate" class="form-label">Start Date</label>
                <input v-model="editableTowerEventData.startDate" type="date" class="form-control" id="startDate" required>
              </div>
              <div class="col-5">
                <label for="capacity" class="form-label">Capacity</label>
                <input v-model="editableTowerEventData.capacity" type="number" class="form-control text-end" id="capacity" placeholder="0" required minlength="1" maxlength="5000">
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <label for="coverImg" class="form-label">Cover Image URL</label>
            <input v-model="editableTowerEventData.coverImg" type="url" class="form-control" id="coverImg" placeholder="URL..." required>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <label for="description" class="form-label">Event Description</label>
        <textarea v-model="editableTowerEventData.description" class="form-control" id="description" rows="5" placeholder="Tell us more about your event" required></textarea>
      </div>
      <div class="modal-footer border-0">
        <button type="submit" class="btn btn-primary">Create Event</button>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped>

</style>