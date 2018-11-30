export interface IUser {
  _id: number;
  email: string;
  displayName: string;
  token: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  displayName: string;
  email: string;
  password: string;
}

export interface ILocation {
  id: number;
  locationName: string;
  coordinates: string;
  imgUrl: string;
}

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  location: ILocation;
  imgUrl: string;
}

export interface IActivity {
  id: number;
  date: Date;
  durationInSeconds: number;
  distanceInMeters: number;
  location: ILocation;
  activityType: IActivityType;
}

export interface IActivityType {
  id: number;
  activityTypeName: string;
  icon: string;
}
