import PriorityQueue from "./priorityQueue.js";

let pq = new PriorityQueue(function (a, b) {
    return a.cash - b.cash;
});

pq.enq({cash: 250, name: 'Yoo'});
pq.enq({cash: 300, name: 'Ryu'});
pq.enq({cash: 150, name: 'Oh'});

console.log(pq.size());
console.log(pq.deq());
console.log(pq.peek());
console.log(pq.size());
