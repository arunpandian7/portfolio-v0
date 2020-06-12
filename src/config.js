module.exports = {
  siteTitle: 'Arun Pandian | Data Scientist',
  siteDescription:
    'Arun Pandian is an Engineering Student, and an Aspiring Data Scientist.',
  siteKeywords:
    'arun pandian, data science, data scientist, artificial intelligence, front end developer, student',
  siteUrl: 'https://iamarunpandian.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-169003279-1',
  googleVerification: 'zagrEuaBxBKNf1dGE79_scwF0RFVm7Y1n5TD4E44laM',
  name: 'Arun Pandian R',
  location: 'Coimbatore, TN',
  email: 'arunrk7.leo@gmail.com',
  github: 'https://github.com/ArunRK7Codie',
  twitterHandle: '@ArunPandianR10',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ArunRK7Codie',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ArunPandian',
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/arunrk7',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/arun_rk7',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ArunPandianR10',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#07F05C',
    navy: '#1C0446',
    darkNavy: '#12032E',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
