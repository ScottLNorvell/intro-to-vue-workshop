<template>
  <div class="media-right"
       @click="upVote(submission)">
    <span class="icon is-small">
      <i class="fa fa-chevron-up"></i>
      <strong class="has-text-info">{{submission.votes}}</strong>
    </span>
  </div>
</template>

<script>
export default {
  name: "SubmissionVoterGuy",
  props: ['submission'],
  methods: {
    upVote(submission) {
      submission.votes++;
    }
  },
};
</script>

<style lang="css">
.icon {
  cursor: pointer;
}
</style>
