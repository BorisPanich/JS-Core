import { makeHairStyle, moveUser, updatedBooksToUser, updatedUserBooks, updatedUserHouse, updatedUserNetbook, UserType, UserWithBooksType, UserWithNetbookType } from './10';

test('reference type test', () => {
    let user: UserType = {
        name: 'Boris',
        hair: 22,
        address: {
            city: 'Lida',
            house: 34
        }
    }

    const cutUser = makeHairStyle(user, 2)

    expect(cutUser.hair).toBe(11)
    expect(user.hair).toBe(22)
})


test('change address', () => {
    let user: UserWithNetbookType = {
        name: 'Boris',
        hair: 22,
        address: {
            city: 'Lida',
            house: 34
        },
        netbook: {
            model: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Minsk')
    expect(user.netbook).toBe(movedUser.netbook)
})


test('update zenbook to macbook', () => {
    let user: UserWithNetbookType & UserWithBooksType = {
        name: 'Boris',
        hair: 22,
        address: {
            city: 'Lida',
            house: 34
        },
        netbook: {
            model: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const updatedUser = updatedUserNetbook(user, 'Macbook')

    expect(user).not.toBe(updatedUser)
    expect(user.address).toBe(updatedUser.address)
    // expect(user.books).toBe(updatedUser.books)
    expect(user.netbook.model).toBe('ZenBook')
    expect(updatedUser.netbook.model).toBe('Macbook')
    expect(user.netbook).not.toBe(updatedUser.netbook)
})

test('added new books to user', () => {
    let user: UserWithNetbookType & UserWithBooksType = {
        name: 'Boris',
        hair: 22,
        address: {
            city: 'Lida',
            house: 34
        },
        netbook: {
            model: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const updatedUser = updatedUserBooks(user, 'redux');
    // const updatedUser = updatedUserBooks(user, ['ts', 'redux'])
    const updatedBooks = updatedBooksToUser(user, 'js', 'ts');

    expect(user).not.toBe(updatedUser)
    expect(user.address).toBe(updatedUser.address)
    expect(user.netbook).toBe(updatedUser.netbook)
    expect(user.books).not.toBe(updatedUser.books)
    expect(updatedUser.books[4]).toBe('redux')
    expect(updatedBooks.books[2]).toBe('ts')
    expect(updatedUser.books.length).toBe(5)
    expect(updatedBooks.books.length).toBe(4)
    // expect(updatedUser.books[5]).toBe('redux')
})