class Triple<T> {
    readonly #data: Array<T> = new Array(3)

    constructor(left: T, middle: T, right: T) {
        this.#data[0] = left
        this.#data[1] = middle
        this.#data[2] = right
    }

    data(index: number): T {
        if (index >= 0 && index <= 2) {
            return this.#data[index]
        } else {
            throw "Index out of range!"
        }
    }
}

const triple = new Triple<number>(10, 5, 2);
console.log(triple.data(2))