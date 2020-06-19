import aboutMeText from './aboutMeText';

import photoUrl from '../../static/dan415x400.png';

const personalData = {
  name: 'Daniel Green',
  email: 'greendan@oregonstate.edu',
  title: 'Computer Science Graduate 2020',

  institution: {
    text: 'Oregon State University',
    link: 'http://oregonstate.edu/',
    department: {
      text: 'School of EECS',
      link: 'http://eecs.oregonstate.edu/',
    },
    address: {
      city: 'Corvallis OR'
    }
  },

  city: {
    text: 'Albany, OR 97321'
  },

  gitHub: 'https://github.com/chefindan',

  photoUrl: photoUrl,

  aboutMeText: aboutMeText
};

export default personalData;
