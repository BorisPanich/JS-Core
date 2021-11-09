
export const userObj = {
    '1': 'Boris',
    '2': 'Olga',
    '3': 'Gleb',
    '4': 'Nazar'
}

type UsersType = {
    [keys: string]: { id: number, name: string }
}

const users: UsersType = {
    '36': { id: 36, name: 'Boris' },
    '31': { id: 31, name: 'Olga' },
    '4': { id: 4, name: 'Gleb' },
    '9': { id: 9, name: 'Nazar' }
}

// 1) метод получения нужного свойства по номеру id:
// users[4]  - O(1);

// 2) присвоение users нового user со своими данными:
// const user = {id: 33, name: 'Anya'}
// users[user.id] = user; - O(1);

// 3) delete user with id:
// delete users[user.id] - O(1);

// 4) update name of user:
// users[user.id].name = 'Eva' - O(1);


export const usersArray = [
    { id: 36, name: 'Boris' },
    { id: 31, name: 'Olga' },
    { id: 4, name: 'Gleb' },
    { id: 9, name: 'Nazar' }
]

// 1) метод получения нужного свойства по номеру id:
// usersArray.find(u => u.id === 4)  - O(n);

// 2) присвоение usersArray нового user со своими данными (но создастся новый user):
// var userCopy = [...usersArray.filter(user), user] - O(n);
// usersArray.push(user.id);

// 3) delete user with id:
// var usersArray = usersArray.filter(u => u.id !== user.id) - O(n);

// 4) update name of user: need mathod find then map - O(n);
