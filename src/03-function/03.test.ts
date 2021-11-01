import { addSkill, doesStudentLiveIn } from './03';
import { StudentsType } from "../02/02";

let student: StudentsType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Boris",
        age: 36,
        married: true,
        address: {
            city: {
                title: "Lida",
                country: "Belarus"
            },
            street: "Mitskevicha"
        },
        technologics: [
            {
                id: 1,
                title: "JS"
            },
            {
                id: 2,
                title: "React"
            },
            {
                id: 3,
                title: "UniTest"
            }
        ]
    }
})

test("new test skill should be added to students", () => {
    expect(student.technologics.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologics.length).toBe(4)
    expect(student.technologics[3].id).toBeDefined()
    expect(student.technologics[3].title).toBe("JS")
})

test("does student live in city", () => {

    let result1 = doesStudentLiveIn(student, "Lida")
    let result2 = doesStudentLiveIn(student, "Minsk")

    expect(result1).toBe(true)
    expect(result2).toBe(false)

})