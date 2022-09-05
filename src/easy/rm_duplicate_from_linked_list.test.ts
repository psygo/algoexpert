import * as chai from "chai";
import LinkedList, {
  removeDuplicatesFromLinkedList,
} from "./rm_duplicate_from_linked_list";

describe("Remove Duplicate from Linked List", () => {
  it("Test Case #1", function () {
    const input = addMany(new LinkedList(1), [1, 3, 4, 4, 4, 5, 6, 6]);
    const expected = addMany(new LinkedList(1), [3, 4, 5, 6]);
    const actual = removeDuplicatesFromLinkedList(input);
    chai
      .expect(getNodesInArray(actual))
      .to.deep.equal(getNodesInArray(expected));
  });

  it("Test Case #2", function () {
    const input = new LinkedList(1);
    const expected = new LinkedList(1);
    const actual = removeDuplicatesFromLinkedList(input);
    chai
      .expect(getNodesInArray(actual))
      .to.deep.equal(getNodesInArray(expected));
  });

  it("Test Case #3", function () {
    const input = addMany(new LinkedList(1), [1]);
    const expected = new LinkedList(1);
    const actual = removeDuplicatesFromLinkedList(input);
    chai
      .expect(getNodesInArray(actual))
      .to.deep.equal(getNodesInArray(expected));
  });
});

function addMany(linkedList: LinkedList, values: number[]) {
  let current = linkedList;
  while (current.next !== null) {
    current = current.next;
  }
  for (const value of values) {
    current.next = new LinkedList(value);
    current = current.next;
  }
  return linkedList;
}

function getNodesInArray(linkedList: LinkedList) {
  const nodes: number[] = [];
  let current: LinkedList | null = linkedList;
  while (current !== null) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes;
}
