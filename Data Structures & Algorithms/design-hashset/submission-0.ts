class MyHashSet {
    private obj: Set<number>;
    constructor() {
        this.obj = new Set<number>();
    }

    add(key: number): void {
        this.obj.add(key);
    }

    remove(key: number): void {
        this.obj.delete(key);
    }

    contains(key: number): boolean {
        if (this.obj.has(key)) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
