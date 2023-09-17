import {Queue} from "./index.js";


const queue = new Queue();
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue()

while (queue.getLength() != 0) {
    console.log(queue.dequeue());
}