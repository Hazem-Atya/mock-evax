import {User} from "./user";

export const Governorates = [
  'Tunis',
  'Bizerte',
  'Béja',
  'Ben Arous',
  'Gabès',
  'Gafsa',
  'Jendouba',
  'Kairouan',
  'Kasserine',
  'Kébili',
  'Ariana',
  'Manouba',
  'Mahdia',
  'Médenine',
  'Monastir',
  'Nabeul',
  'Sfax',
  'Sidi Bouzid',
  'Siliana',
  'Sousse',
  'Tataouine',
  'Tozeur',
  'Zaghouan',
  'Kef',
]
export const VaccinaedPeople = [
  65, 59, 80, 81, 56, 55, 40, 75, 58,
  10, 5, 78, 96, 14, 87, 65, 35, 21, 96, 57, 54, 66, 78, 14]
export const VaccinatedMaleAdults = [
  18, 39, 50, 41, 36, 25, 10, 35, 28,
  5, 1, 3, 7, 2, 27, 35, 15, 11, 56, 37, 14, 26, 38, 4]
export const VaccinatedChildren = [
  14, 31, 20, 31, 36, 25, 10, 35, 14,
  4, 2, 3, 30, 5, 34, 35, 15, 11, 56, 37, 74, 16, 28, 7]

export const RegisteredPeople = 2400

export const UsersDB: User[] = [
  {
    "id": 0,
    "fullName": "Hazem Atya",
    "email": "hazem.atya@insat.ucar.tn",
    "cin": "12345678",
    "sex": "Male",
    "governorate":"Tunis",
    "previousDiseases": "4584864",
    "password": "4564654",
    "age":18,
    "vaccinDetails":{
      'vaccinated':true,
      'dateOfVaccination':new Date(),
      'vaccinName':'Pfizer',
    }  },
  {
    "id": 1,
    "fullName": "Mahdi Ben Rhouma",
    "email": "mahdi@gmail.com",
    "cin": "98765441",
    "governorate":"Ariana",
    "sex": "Male",
    "previousDiseases": "nothing",
    "password": "123456",
    "age":59,
    "vaccinDetails":{
      'vaccinated':true,
      'dateOfVaccination':new Date(),
      'vaccinName':'Pfizer',
    }
  },
  {
    "id": 2,
    "fullName": "Sihem labbene",
    "email": "Siheme@yahoo.fr",
    "cin": "12345678",
    "governorate":"Tunis",
    "sex": "Female",
    "previousDiseases": "Nothinh",
    "password": "12345",
    "age":54,
    "vaccinDetails":{
      'vaccinated':false,
      'dateOfVaccination':new Date(),
      'vaccinName':'',
    }

  },
  {
    "id": 3,
    "fullName": "Dalila Atya",
    "email": "dalila@atya.car",
    "cin": "09889670",
    "governorate":"Tunis",
    "sex": "Female",
    "previousDiseases": "Skin disease",
    "password": "272752*72*727*2",
    "age":89,
    "vaccinDetails":{
      'vaccinated':true,
      'dateOfVaccination':new Date(),
      'vaccinName':'Pfizer',
    }

  }
];
