<script setup>

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
            <input type="text" class="form-control" id="eventNameInput" placeholder="Name..." required>
          </div>
          <div class="col-12 mb-3">
            <label for="eventLocationInput" class="form-label">Event Location</label>
            <input type="text" class="form-control" id="eventLocationInput" placeholder="Location..." required>
          </div>
          <div class="col-12 mb-3">
            <label class="form-label" for="eventTypeSelect">Event type</label>
            <select class="form-select" id="eventTypeSelect" required>
              <option selected>Choose...</option>
              <option value="1">Concert</option>
              <option value="2">Sport</option>
              <option value="3">Convention</option>
              <option value="4">Digital</option>
            </select>
          </div>
          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-7">
                <label for="startDateInput" class="form-label">Start Date</label>
                <input type="text" class="form-control" id="startDateInputInput" placeholder="mm/dd/yyyy" required>
              </div>
              <div class="col-5">
                <label for="capacityInput" class="form-label">Capacity</label>
                <input type="number" class="form-control text-end" id="capacityInput" placeholder="0" required>
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <label for="imageUrlInput" class="form-label">Image URL</label>
            <input type="text" class="form-control" id="imageUrlInput" placeholder="URL..." required>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <label for="eventDescriptionInput" class="form-label">Event Description</label>
        <textarea class="form-control" id="eventDescriptionInput" rows="5" placeholder="Tell us more about your event" required></textarea>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped>

</style>