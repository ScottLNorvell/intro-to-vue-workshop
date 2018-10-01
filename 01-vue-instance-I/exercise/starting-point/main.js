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

new Vue({
  el: '#app',
  data: {
    submissions: submissions.sort(compareSubmissions)
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
  }
});
