export default class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) T | O(1) S
export const removeDuplicatesFromLinkedList = (
  linkedList: LinkedList
): LinkedList => {
  let current = linkedList;
  let next = linkedList.next;
  while (true) {
    if (next === null) break;
    else {
      if (current.value === next.value) {
        if (next.next === null) {
          current.next = null;
          next = null;
        } else {
          current.next = next.next;
          next = current.next;  
        }
      }
      else {
        current = next;
        next = current.next;
      }
    }
  }

  return linkedList;
};
