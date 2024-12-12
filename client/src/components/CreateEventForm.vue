<script setup>
  const eventTypes = ['concert', 'sport', 'convention', 'digital']
</script>


<template>
  <form>
    <div class="row">
      <div class="col-md-7">
        Image preview
      </div>
      <div class="col-md-5">
        <div class="row">
          <div class="col-12 mb-3">
            <label for="eventNameInput" class="form-label">Event Name</label>
            <input type="text" class="form-control" id="eventNameInput" placeholder="Name..." required minlength="3" maxlength="50">
          </div>
          <div class="col-12 mb-3">
            <label for="eventLocationInput" class="form-label">Event Location</label>
            <input type="text" class="form-control" id="eventLocationInput" placeholder="Location..." required minlength="1" maxlength="500">
          </div>
          <div class="col-12 mb-3">
            <label class="form-label" for="eventTypeSelect">Event type</label>
            <select class="form-select text-capitalize" id="eventTypeSelect" required>
              <option selected>Choose an event type</option>
              <option v-for="eventType in eventTypes" :key="eventType" :value="eventType" class="text-capitalize">
                {{ eventType }}
              </option>
            </select>
          </div>
          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-7">
                <label for="startDateInput" class="form-label">Start Date</label>
                <input type="date" class="form-control" id="startDateInputInput" required>
              </div>
              <div class="col-5">
                <label for="capacityInput" class="form-label">Capacity</label>
                <input type="number" class="form-control text-end" id="capacityInput" placeholder="0" required minlength="1" maxlength="5000">
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <label for="coverImageUrlInput" class="form-label">Event Image URL</label>
            <input type="url" class="form-control" id="coverImageUrlInput" placeholder="URL..." required>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <label for="eventDescriptionInput" class="form-label">Event Description</label>
        <textarea class="form-control" id="eventDescriptionInput" rows="5" placeholder="Tell us more about your event" required></textarea>
      </div>
      <div class="modal-footer border-0">
        <button type="submit" class="btn btn-primary">Create Event</button>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped>

</style>