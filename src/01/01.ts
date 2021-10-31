
export const sum = (a: number, b: number) => a + b;
export const multiply = (a: number, b: number) => a * b;

export const splitItoWords = (sentense: string) => {
    const words = sentense.toLowerCase().split(" ")

    return words.filter(w => w !== "!" && w !== "-")
        .map(w => w
            .replace("!", "")
            .replace(",", "")
            .replace(".", "")
        )
}
