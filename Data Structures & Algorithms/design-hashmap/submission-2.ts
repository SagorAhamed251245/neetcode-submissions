class MyHashMap {
    private map: Map<number, number>;
    constructor() {
        this.map = new Map<number, number>();
    }

    put(key: number, value: number): void {
        this.map.set(key, value);
    }

    get(key: number): number {
        const value = this.map.get(key);
        if (value !== undefined) {
            return value;
        } else {
            return -1;
        }
    }

    remove(key: number): void {
        this.map.delete(key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
