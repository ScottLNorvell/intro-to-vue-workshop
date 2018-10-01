<template>
  <article
    class="media"
    :class="{ 'blue-border': submission.votes >= 20 }">
    <SubmissionImage :submission="submission" />
    <SubmissionContent :submission="submission" />
    <SubmissionVoterGuy :submission="submission" />
  </article>
</template>

<script>
import SubmissionImage from './SubmissionImage';
import SubmissionContent from './SubmissionContent';
import SubmissionVoterGuy from './SubmissionVoterGuy';

export default {
  name: "SubmissionGuy",
  props: ['submission'],
  methods: {
    upVote(submission) {
      submission.votes++;
    }
  },
  components: {
    SubmissionContent,
    SubmissionImage,
    SubmissionVoterGuy,
  }
};
</script>

<style lang="css">
.media {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: 1em 1.5em 0.5em 1.5em;
  border-radius: 0.3em;
}

.media + .media {
  margin-top: 1.5rem;
}

.blue-border {
  border: 1px solid #3373dc !important;
}
</style>
