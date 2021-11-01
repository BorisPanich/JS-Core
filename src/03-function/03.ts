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

export function repairHouse(arg0: HousesType) {
    return
}