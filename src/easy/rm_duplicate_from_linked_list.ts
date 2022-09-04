export default class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export const removeDuplicatesFromLinkedList = (
  linkedList: LinkedList
): LinkedList => {
  return linkedList;
};
