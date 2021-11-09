
type UsersType = {
    [keys: string]: { id: number, name: string }
}

let users: UsersType;

beforeEach(() => {
    users = {
        '36': { id: 36, name: 'Boris' },
        '31': { id: 31, name: 'Olga' },
        '4': { id: 4, name: 'Gleb' },
        '9': { id: 9, name: 'Nazar' }
    }
})

test("should update corresponding user", () => {
    users['36'].name = 'Borya';

    expect(users['36'].name).toBe('Boris')
    // expect(users['36']).toBe({ id: 36, name: 'Borya' })
    // expect(users['36']).toEqual({ id: 36, name: 'Borya' })
})

test("should delete corresponding user", () => {
    delete users['36'];

    expect(users['36']).toBeUndefined()
})