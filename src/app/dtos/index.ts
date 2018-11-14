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

export interface IActivityType {
  id: number;
  activityName: string;
}
