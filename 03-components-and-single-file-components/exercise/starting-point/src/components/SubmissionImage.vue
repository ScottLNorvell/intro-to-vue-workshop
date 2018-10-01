<template>
  <figure class="media-left">
    <img class="image is-64x64"
         :src="submission.submissionImage">
  </figure>
</template>

<script>
export default {
  name: "SubmissionImage",
  props: ['submission']
};
</script>

<style lang="css">
.image.is-24x24 {
  display: inline;
  position: relative;
  top: 5px;
  border-radius: 20px;
}
</style>
