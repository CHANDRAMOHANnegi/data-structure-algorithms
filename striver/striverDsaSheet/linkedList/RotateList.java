package striverDsaSheet.linkedList;

class Solution {

    public ListNode addFirst(ListNode head, ListNode node) {
        if (node == null) {
            return head;
        }
        node.next = head;
        return node;
    }

    public ListNode removeLast(ListNode head) {
        if (head == null) {
            return null;
        }
        if (head.next == null) {
            return head;
        }
        ListNode temp = head;
        while (temp.next.next != null) {
            temp = temp.next;
        }
        ListNode dummy = temp.next;
        temp.next = null;
        return dummy;
    }

    public ListNode rotateRight1(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        if (k == 0) {
            return head;
        }

        int len = 0;
        ListNode temp = head;
        while (temp != null) {
            len++;
            temp = temp.next;
        }

        k = k % len;
        System.out.println(len + " " + k);
        return rotate(head, k);
    }

    public ListNode rotate(ListNode head, int k) {
        if (head == null || head.next == null) {
            return head;
        }
        if (k == 0) {
            return head;
        }

        ListNode node = removeLast(head);
        ListNode newNode = addFirst(head, node);
        ListNode res = rotate(newNode, k - 1);
        return res;
    }

    public static ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        // compute the length
        int len = 1;
        ListNode temp = head;
        while (temp.next != null) {
            len++;
            temp = temp.next;
        }

        // got till that node
        temp.next = head;
        k = k % len;
        k = len - k;

        while (k-- > 0) {
            temp = temp.next;
        }

        // make node head and break connection
        head = temp.next;
        temp.next = null;

        return head;
    }

    public static ListNode addFirst(ListNode head, int data) {
        ListNode temp = new ListNode(data);
        head.next = temp;
        return temp;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(3);
        ListNode n2 = addFirst(head, 2);
        ListNode n3 = addFirst(n2, 2);
        ListNode n4 = addFirst(n3, 2);
        ListNode temp = head;

        while (temp != null) {
            System.out.print(temp.val);
            temp = temp.next;
        }
        System.out.println();
        ListNode temp2 = rotateRight(head, 1);

        while (temp2 != null) {
            System.out.print(temp2.val);
            temp2 = temp2.next;
        }
    }

}
