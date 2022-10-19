
// javascript program to remove duplicates from unsorted
// linked list
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
var head;

/* Function to remove duplicates from an unsorted linked list */
function remove_duplicates() {
    console.log("in remove Dup:", head.data);
    var ptr1 = null,
        ptr2 = null,
        dup = null;
    ptr1 = head;

    /* Pick elements one by one */
    while (ptr1 != null && ptr1.next != null) {
        ptr2 = ptr1;

        /* Compare the picked element with rest of the elements */
        while (ptr2.next != null) {
            /* If duplicate then delete it */
            if (ptr1.data == ptr2.next.data) {
                /* sequence of steps is important here */
                dup = ptr2.next;
                ptr2.next = ptr2.next.next;
            } /* This is tricky */ else {
                ptr2 = ptr2.next;
            }
        }
        ptr1 = ptr1.next;
    }
}
