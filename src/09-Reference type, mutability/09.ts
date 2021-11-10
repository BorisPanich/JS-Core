export type UserType = {
    name: string
    age: number
}

export let user: UserType = {
    name: "Boris",
    age: 36
}

export function icreaseAge(u: UserType) {
    return u.age++;
}
