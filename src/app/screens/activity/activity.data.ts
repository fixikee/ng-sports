import {IActivity, IActivityType, ILocation} from '../../dtos';


const activities: IActivity[] = [
  {
    id: 0,
    date: new Date('1968-11-16T00:00:00'),
    durationInSeconds: 100,
    distanceInMeters: 100,
    location: <ILocation>{
      id: 0,
      locationName: 'location name',
      coordinates: 'string',
      imgUrl: 'string'
    },
    activityType: <IActivityType>{
      id: 0,
      activityTypeName: 'activity type name',
      icon: 'icon as string'
    }
  },
  {
    id: 1,
    date: new Date('2018-11-16T00:00:00'),
    durationInSeconds: 200,
    distanceInMeters: 200,
    location: <ILocation>{
      id: 1,
      locationName: 'location name 2',
      coordinates: 'string2',
      imgUrl: 'string2'
    },
    activityType: <IActivityType>{
      id: 1,
      activityTypeName: 'activity type name 2',
      icon: 'icon as string2'
    }
  }
];

export default activities;
