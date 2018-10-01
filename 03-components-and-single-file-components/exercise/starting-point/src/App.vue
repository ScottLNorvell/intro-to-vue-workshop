<template>
  <div id="app">
    <h2 class="title has-text-centered dividing-header">UpVote!</h2>

    <div class="section">
      <SubmissionGuy
        v-for="submission in submissions"
        :key="submission.id"
        :submission="submission">
      </SubmissionGuy>
    </div>
  </div>
</template>

<script>
import SubmissionGuy from './components/SubmissionGuy';
const submissions = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '//www.google.com',
    votes: 16,
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/daniel.jpg',
    submissionImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/daniel-submission.png',
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: 'http://scottlnorvell.com',
    votes: 11,
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/kristy.png',
    submissionImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/kristy-submission.png',
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We have your measurements and shipping address.',
    url: '#',
    votes: 17,
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/veronika.jpg',
    submissionImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/veronika-submission.png',
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: 9,
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/molly.png',
    submissionImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/molly-submission.png',
  }
];

const compareSubmissions = (a,b) => {
  if (a.votes < b.votes) return 1;
  if (a.votes > b.votes) return -1;
  return 0;
};

let timeout;

export default {
  name: "App",
  data() {
    return { submissions: submissions.sort(compareSubmissions) };
  },
  methods: {
    upVote(submission) {
      clearTimeout(timeout);
      submission.votes++;
      timeout = setTimeout(this.sort.bind(this), 500);
    },
    sort() {
      this.submissions = submissions.sort(compareSubmissions);
    },
  },
  components: { SubmissionGuy }
};
</script>

<style lang="css">
.dividing-header {
  margin-top: 1em;
  margin-bottom: 2em;
}

.section {
  padding: 2rem 1.5rem;
}

.tag {
  font-size: 0.6rem !important;
}
</style>
