type LocalCityType = {
    title: string
    country: string
}
type AddressType = {
    city: LocalCityType
    street: string
}
type TechnologicsType = {
    id: number
    title: string
}
type StudentsType = {
    id: number
    name: string
    age: number
    married: boolean
    address: AddressType
    technologics: Array<TechnologicsType>
}

const students: StudentsType = {
    id: 1,
    name: "Boris",
    age: 36,
    married: true,
    address: {
        city: {
            title: "Lida",
            country: "Belarus"
        },
        street: "Mitskevicha"
    },
    technologics: [
        {
            id: 1,
            title: "JS"
        },
        {
            id: 2,
            title: "React"
        },
        {
            id: 3,
            title: "Unitest"
        }
    ]
}

console.log(students.address.city)
console.log(students.technologics.length)
console.log(students.technologics[2].title)