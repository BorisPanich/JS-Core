import { icreaseAge, UserType } from "./09"

test("refrence type test", () => {
    let user: UserType = {
        name: "Boris",
        age: 36
    }

    icreaseAge(user);
    expect(user.age).toBe(37);

    const oldUser = user
    oldUser.age = 40
    expect(oldUser.age).toBe(40);
})

test("array test", () => {
    let users = [
        { name: "Boris", age: 36 },
        { name: "Olga", age: 31 }
    ]

    let admins = users
    admins.push({ name: "Gleb", age: 4 })
    expect(users[2]).toEqual({ name: "Gleb", age: 4 })
})

test("value type test", () => {
    let usersCount = 100

    let adminsCount = usersCount;
    adminsCount = adminsCount + 1;
    expect(adminsCount).toBe(101)
})

test("reference type test", () => {
    const address = { title: "Lida" }

    let user = {
        name: "Boris",
        age: 36,
        address: address
    }
    let user2 = {
        name: "Olga",
        age: 31,
        address: address
    }

    address.title = "Minsk"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Minsk")
})

test("reference type test", () => {
    const address = { title: "Lida" }

    let user = {
        name: "Boris",
        age: 36,
        address: address
    }
    let user2 = {
        name: "Olga",
        age: 31,
        address: address
    }

    const users = [user, user2, { name: "Gleb", age: 4, address: address }];
    const admins = [user, user2];

    admins[0].name = "Borya";

    expect(users[0].name).toBe("Borya")
    expect(user.name).toBe("Borya")
})

test("sort array test", () => {
    const letters = ["a", "e", "t", "d"]
    passportist(letters)
    expect(letters).toEqual(["a", "e", "t", "d"]);

    // мутирование массива
    // letters.sort()
    // expect(letters).toEqual(["a", "d", "e", "t"]);
})

function passportist(letters: any) {
    // сохранит порядок символов в letters, а поменяет только в копии
    const copy = [...letters].sort()
}