export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type NetbookType = {
    title: string
}
export type UserWithNetbookType = UserType & {
    netbook: NetbookType
}


export const makeHairStyle = (u: UserType, power: number) => {
    // производим изменения в копии, чтобы не нарушать иммьютабельность
    const copyUser = {
        // (shallow) поверхосное сравнение, т.е. вложенные объекты user.address.title 
        // не будут копированы, они существуют в виде ссылки 
        // (будет равен address нашего user)
        // expect(cutUser.address).toBe(user.address)
        ...u,
        hair: u.hair / power
    }
    // copyUser.hair = u.hair / power
    return copyUser
}


export const moveUser = (u: UserWithNetbookType, city: string) => {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}