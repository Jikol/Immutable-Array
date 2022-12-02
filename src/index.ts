import {type} from "os";

class Triple<T> {
    readonly #data: Array<T> = new Array(3);

    constructor(left: T, middle: T, right: T) {
        this.#data[0] = left;
        this.#data[1] = middle;
        this.#data[2] = right;
    }

    data(index: Triple.Index | number): T {
        if (index >= 0 && index <= 2) {
            return this.#data[index];
        } else {
            throw "Index out of range!";
        }
    }

    isFull(): boolean {
        return this.#data[0] != null && this.#data[1] !== null && this.#data[2] !== null;
    }

    isValue(): boolean {
        return typeof this.#data[0] !== "object";
    }

    isReference(): boolean {
        return typeof this.#data[0] === "object";
    }
}

module Triple {
    export enum Index {
        Left = 0,
        Middle = 1,
        Right = 2
    }
}

const triple = new Triple<Triple<number>>(new Triple(5, 15 ,29), new Triple(5, 15 ,29), new Triple(5, 15 ,29));
console.log(triple.isFull())
console.log(triple.data(2))

class PerstArray<T> {
    #root: Triple<Triple<T>> = null;

    constructor(size: number) {
        // implement
        console.log(this.#root)
    }

    #insert(root: Triple<any>, value: T) {
        if (!root) {
            this.#root = new Triple(new Triple<T>(value, null, null), null, null)
        } else {
            if (root.isReference()) {

            }
        }
    }
}