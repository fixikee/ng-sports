import {IEvent, ILocation} from '../../dtos';

const events: IEvent[] = [
  {
    id: 0,
    name: 'SomoS',
    date: new Date('1968-11-16T00:00:00'),
    location: <ILocation>{
      id: 0,
      locationName: 'string',
      coordinates: 'string',
      imgUrl: 'string'
    },
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
  {
    id: 1,
    name: 'Gabesz albija',
    date: new Date('2018-11-18T22:48:00'),
    location: <ILocation>{
      id: 0,
      locationName: 'string',
      coordinates: 'string',
      imgUrl: 'string'
      },
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  },
];

export default events;
