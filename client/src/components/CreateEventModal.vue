<script setup>
import CreateEventForm from './CreateEventForm.vue';


</script>


<template>
  <div class="modal fade" id="towerEventModal" tabindex="-1" aria-labelledby="towerEventModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5" id="towerEventModal">Create new event</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <CreateEventForm/>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>