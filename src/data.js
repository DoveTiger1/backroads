import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  {id: 1, href: '#home', text: 'home'},
  {id: 2, href: '#about', text: 'about'},
  {id: 3, href: '#services', text: 'services'},
  {id: 4, href: '#tours', text: 'tours'},
];

export const socialLinks = [
  {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://twitter.com', icon: 'fab fa-square'},
];

export const services = [
  {
    id: 1,
    serviceIcon: 'fas fa-wallet fa-fw',
    serviceTitle: 'saving money',
    serviceText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste culpa exercitationem non velit quis deleniti.',
  },
  {
    id: 2,
    serviceIcon: 'fas fa-tree fa-fw',
    serviceTitle: 'endless hiking',
    serviceText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste culpa exercitationem non velit quis deleniti.',
  },
  {
    id: 3,
    serviceIcon: 'fas fa-socks fa-fw',
    serviceTitle: 'amazing comfort',
    serviceText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste culpa exercitationem non velit quis deleniti.',
  },
];

export const tours = [
  {
    id: 1,
    tourImg: tour1,
    tourDate: 'august 26th, 2020',
    tourTitle: 'Tibet Adventure',
    tourText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sed nobis nulla neque cum deleniti?',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    tourImg: tour2,
    tourDate: 'october 1th, 2020',
    tourTitle: 'best of java',
    tourText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sed nobis nulla neque cum deleniti?',
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    tourImg: tour3,
    tourDate: 'march 23rd 2020',
    tourTitle: 'Canadian delights',
    tourText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sed nobis nulla neque cum deleniti?',
    location: 'toronto',
    duration: 13,
    cost: 6000,
  },
  {
    id: 4,
    tourImg: tour4,
    tourDate: 'september 15th, 2020',
    tourTitle: 'explore hong kong',
    tourText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sed nobis nulla neque cum deleniti?',
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 5,
    tourImg: tour5,
    tourDate: 'june 30th, 2021',
    tourTitle: 'korean exploration',
    tourText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sed nobis nulla neque cum deleniti?',
    location: 'korea',
    duration: 9,
    cost: 4200,
  },
  {
    id: 6,
    tourImg: tour6,
    tourDate: 'december 5th, 2019',
    tourTitle: 'kenya highlights',
    tourText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti sed nobis nulla neque cum deleniti?',
    location: 'kenya',
    duration: 8,
    cost: 3300,
  },
];
