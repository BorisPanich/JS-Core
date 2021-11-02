import { PeopleType, messages } from './05_1';

let people: PeopleType[] = [];

beforeEach(() => {
    people = [
        { name: "Dima Petrov", age: 28 },
        { name: "Vasya Pupkin", age: 27 },
        { name: "Ivan Ivanov", age: 32 }
    ]
})

test("test should get array of greeting messages", () => {
    expect(messages.length).toBe(3)

    expect(messages[0]).toBe("Hello Dima! Welcom to IT-incubator!")
    expect(messages[1]).toBe("Hello Vasya! Welcom to IT-incubator!")
})