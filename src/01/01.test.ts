import { multiply, splitItoWords, sum } from "./01"
// npm test - start test

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    // Data
    const a = 100

    // Actions
    const resultAB = sum(a, b)
    const resultBC = sum(b, c)

    // Expect result
    expect(resultAB).toBe(102)
    expect(resultBC).toBe(5)

})

test('multiply should be correct', () => {
    // Data

    // Actions
    const resultAB = multiply(a, b)
    const resultBC = multiply(b, c)

    // Expect result
    expect(resultAB).toBe(2)
    expect(resultBC).toBe(6)

})

test('spliting into words should be correct', () => {
    // Data
    const sent1 = "Hello my Friend!"
    const sent2 = "JS - the best programming language"

    // Actions
    const result1 = splitItoWords(sent1)
    const result2 = splitItoWords(sent2)

    // Expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
})