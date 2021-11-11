import { makeHairStyle, moveUser, UserType, UserWithNetbookType } from './10';

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
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Minsk')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Minsk')
    expect(user.netbook).toBe(movedUser.netbook)
})