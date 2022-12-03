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

    #insert(node: Triple<any>, value: T) {
        // pokud nebyla struktura stromu ještě vytvořena
        if (!node) {
            // vytvoř strom a vlož 1 hodnotu pole
            this.#root = new Triple(new Triple<T>(value, null, null), null, null)
        } else {
            // pokud je triple node referenční
            if (node.isReference()) {
                // pokud levý triple není plný
                let leftTriple = node.data(Triple.Index.Left)
                if (!leftTriple.isFull()) {
                    if (leftTriple.data(Triple.Index.Middle) == null) {
                        node.data(Triple.Index.Middle)
                    }
                }
            }
        }
    }
}