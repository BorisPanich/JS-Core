// type HousesType = {

// }

// export type CityType = {
//     title: string
//     houses: HousesType
//     governmentBuildings: Array<string>
//     citizensNumber: number
// }

// beforeEach(() => {
//     city = {
//         title: "London",
//         houses: [{}, {}, {}],
//         governmentBuildings: [],
//         citizensNumber: 4444
//     }
// })


// test("test city should contains 3 houses", () => {
//     expect(city.houses.length).toBe(3)

//     expect(city.houses[0].buildedAt).toBe(2012)
//     expect(city.houses[0].repaired).toBe(false)
//     expect(city.houses[0].address.number).toBe(100)
//     expect(city.houses[0].address.street.title).toBe("White street")
// })