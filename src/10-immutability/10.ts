export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type NetbookType = {
    model: string
}
export type UserWithNetbookType = UserType & {
    netbook: NetbookType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
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


export function updatedUserNetbook(u: UserWithNetbookType, netbook: string) {
    return {
        ...u,
        netbook: {
            ...u.netbook,
            model: netbook
        }
    }
}
export function updatedUserHouse(u: UserWithNetbookType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}


export function updatedUserBooks(u: UserWithNetbookType & UserWithBooksType, newBooks: string) {
    return {
        ...u,
        // если скопировать и добавить элемент
        books: [...u.books, newBooks]
    }
}
export const updatedBooksToUser = (u: UserWithNetbookType & UserWithBooksType,
    oldBook: string,
    newBook: string) => ({
        ...u,
        // если нужно только заменить элемент
        books: u.books.map(b => b === oldBook ? newBook : b)
    })