class MyHashMap {
    private obj: { [key: number]: number };
    constructor() {
        this.obj = {};
    }

    put(key: number, value: number): void {
        this.obj[key] = value;

        console.log(this.obj[key]);
    }

    get(key: number): number {
        if (this.obj[key] !== undefined) {
            return this.obj[key];
        } else {
            return -1;
        }
    }

    remove(key: number): void {
        delete this.obj[key];
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
