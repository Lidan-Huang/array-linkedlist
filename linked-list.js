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
    // We need to consider:
    //  what if there is only one item? 
    //  What if there is a second to last item?

    //  What if the linkedlist is empty?


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
        for(let i = 0; i < idx; i ++) {
            result = result.next;
        }

        return result.val;
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {

    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {

    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {

    }

    /** average(): return an average of all values in the list */

    average() {

    }
}

module.exports = LinkedList;
