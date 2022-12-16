import { Citizen } from "./entities/citizen.entity";


export const initialCitizenData: Citizen[] = [
  {
    id: 0,
    firstName: "Joe",
    lastName: "Shmoe",
    age: 50,
    occupation: 'builder'
  },
  {
    id: 1,
    firstName: "Ella",
    lastName: "Fitzgerald",
  }
]

export const citizenData = new Map()

initialCitizenData.forEach(entry => citizenData.set(entry.id, entry))