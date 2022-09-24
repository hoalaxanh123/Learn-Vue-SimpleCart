<template>
  <div class="comment">
    <h2 class="comment-header">Comments here</h2>
    <div class="comment-body">
      <form>
        <h1>Leave a review</h1>
        <label for="#name">Name:</label>
        <input id="name" type="text" name="name" value="" />

        <label for="#review">Review:</label>
        <textarea id="review" rows="10" cols="20"></textarea>

        <label>Rating:</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  export default {}
</script>

<style></style>
