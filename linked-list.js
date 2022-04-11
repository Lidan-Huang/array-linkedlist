"use strict";
/** Node: node for a singly linked list. */

class Node {
    val = null;
    next = null;

    constructor(val) {
        this.val = val;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor(vals = []) {
        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);

        if (this.head === null) this.head = newNode;
        if (this.tail === null) {
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let newNode = new Node(val);

        if (this.tail === null) this.tail = newNode;

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    /** pop(): return & remove last item. */

    pop() {
        if (this.length < 1) throw new Error("List is empty");

        const lstItem = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next === lstItem) {
                    this.tail = current;
                    current.next = null;
                }
            }
        }
        this.length--;
        return lstItem.val;
    }

    /** shift(): return & remove first item. */

    shift() {
        if (this.length < 1) throw new Error("List is empty");

        const firstItem = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return firstItem.val;
    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

        const count = 0;
        let result = this.head;
        for (let i = 0; i < idx; i++) {
            result = result.next;
        }

        return result.val;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

        let result = this.head;
        for (let i = 0; i < idx; i++) {
            result = result.next;
        }
        result.val = val;

    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        if (idx < 0 || idx > this.length) throw new Error("Invalid index.");

        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        if (idx === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } 

        let previous = this.head;
        let nextNode = this.head.next;

        for (let i = 1; i < idx; i++) {
            previous = nextNode;
            nextNode = nextNode.next;
        }

        previous.next = newNode;
        newNode.next = nextNode;

        this.length ++;

    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

        let removedNode = new Node();
        if (this.length === 1) {
            removedNode = this.head;
            this.head = null;
            this.tail = null;
        } else if (idx === this.length - 1) {
            removedNode.val = this.pop();
        } else if (idx === 0) {
            removedNode.val = this.shift();
        } else {
            let currentNode = this.head;
            let nextNode = this.head.next;
            for (let i = 1; i < idx; i++) {
                currentNode = nextNode;
                nextNode = nextNode.next;
            }
            currentNode.next = nextNode.next;
            removedNode = nextNode;
        }

        this.length --;
        return removedNode.val;
    }

    /** average(): return an average of all values in the list */

    average() {

    }
}

module.exports = LinkedList;
