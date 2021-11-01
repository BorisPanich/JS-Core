import { CityType } from './../02/02-types';
import { StudentsType } from "../02/02"
import { GovernmentBuildingsType, HousesType } from "../02/02-types"

export const addSkill = (students: StudentsType, skill: string) => {
    students.technologics.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function doesStudentLiveIn(st: StudentsType, cityName: string) {
    return st.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    return building.budget += budget
}

export function repairHouse(houses: HousesType) {
    return houses.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildingsType, stuffCounterToFire: number) => {
    governmentBuildings.staffCount -= stuffCounterToFire
}

export const toHireStaff = (governmentBuildings: GovernmentBuildingsType, stuffCounterToHire: number) => {
    governmentBuildings.staffCount += stuffCounterToHire
}

export const createMessage = (props: CityType) => {
    // return "Hello " + props.title + " citizens! All of " + props.citizensNumber + " people."
    return `Hello ${props.title} citizens! All of ${props.citizensNumber} people.`
}