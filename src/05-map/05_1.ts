export type PeopleType = {
    name: string
    age: number
}

const people: Array<PeopleType> = [
    { name: "Dima Petrov", age: 28 },
    { name: "Vasya Pupkin", age: 27 },
    { name: "Ivan Ivanov", age: 32 }
]

const dev = people.map(man => ({
    stack: ["css", "js", "html"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

export const messages = people.map(man => `Hello ${man.name.split(" ")[0]}! Welcom to IT-incubator!`)

// для map во внешнем элементе (div, li, ul) необходимо прописывать key={index} или id (обычно u.id), кот. относится к пробегаемому элементу