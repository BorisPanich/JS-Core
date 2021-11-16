import { makeHairStyle, moveUser, removeBook, updateCompanieTitle, updateCompanieTitle2, updatedBooksToUser, updatedUserBooks, updatedUserNetbook, UserType, UserWithBooksType, UserWithNetbookType, WithCompaniesType } from './10';

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


test.only('remove book to js', () => {
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

    const updatedUser = removeBook(user, 'js')

    expect(user).not.toBe(updatedUser)
    expect(user.address).toBe(updatedUser.address)
    expect(user.netbook).toBe(updatedUser.netbook)
    expect(user.books).not.toBe(updatedUser.books)
    expect(updatedUser.books[2]).toBe('react')
    expect(updatedUser.books.length).toBe(3)
})


test.only('update company', () => {
    let user: UserWithNetbookType & WithCompaniesType = {
        name: 'Boris',
        hair: 22,
        address: {
            city: 'Lida',
            house: 34
        },
        netbook: {
            model: 'ZenBook'
        },
        companies: [
            { id: 1, title: 'Dialek' },
            { id: 2, title: 'BMP' }
        ]
    }

    const updateUser = updateCompanieTitle(user, 2, 'Google') as UserWithNetbookType & WithCompaniesType

    expect(user).not.toBe(updateUser)
    expect(user.address).toBe(updateUser.address)
    expect(user.companies).not.toBe(updateUser.companies)
    expect(updateUser.companies[1].title).toBe('Google')
})


test.only('update company 2', () => {

    let companies = {
        'Boris': [{ id: 1, title: 'Dialek' }, { id: 2, title: 'BMP' }],
        'Olga': [{ id: 1, title: 'BMP' }]
    }

    const updateUser = updateCompanieTitle2(companies, 'Boris', 2, 'Google')

    expect(updateUser['Boris']).not.toBe(companies['Boris'])
    expect(updateUser['Olga']).toBe(companies['Olga'])
    expect(updateUser['Boris'][1].title).toBe('Google')
})