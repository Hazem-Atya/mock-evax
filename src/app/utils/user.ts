export let lastIndexOfId={
  value:4
}

export interface User {
  id: number;
  fullName: string;
  governorate:string;
  age:number;
  email: string;
  cin: string;
  sex: string;
  previousDiseases: string;
  password: string;
  vaccinDetails:{
    vaccinated:boolean,
    dateOfVaccination:Date,
    vaccinName:string
  }

}
