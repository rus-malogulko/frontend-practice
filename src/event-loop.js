// ===============================================
// Event Loop
// ===============================================

// The event loop is a fundamental concept in JavaScript that helps manage
// the execution of asynchronous operations and event handling in a
// single-threaded environment. It ensures that tasks are executed in a
// non-blocking and efficient manner, allowing JavaScript to handle I/O
// operations, timers, and user interactions effectively.

// In JavaScript when an async operation is encountered, siuch as making an
// HTTP request, the operation is pushed to the event queue and the
// execution of the program continues. Once the operation is completed, the
// callback function associated with the operation is pushed to the call
// stack and executed.

// The event loop's role is to continuously monitor the call stack and the
// event queue. If the call stack is empty, it will push the first event
// from the queue to the call stack, which effectively runs the callback
// function associated with the event. If the call stack is not empty, the
// event loop will wait until the call stack is empty and then push the
// first event from the queue to the call stack.

// It can be described in the next sequence of steps:

// 1. The JavaScript runtime starts by executing any synchronous code present
// in the call stack.

// 2. Asynchronous tasks, such as callbacks or promises, are encountered
// during execution. These tasks are handed off to the Web API environment
// for processing.

// 3. Once an asynchronous task is completed, it is placed in the task queue.

// 4. The event loop checks if the call stack is empty. If it is, it dequeues
// tasks from the task queue and moves them to the call stack for execution.
// This process is known as "event loop tick."

// 5. The JavaScript runtime executes the tasks in the call stack one by one
// until the stack is empty or a new asynchronous task is encountered.


//       ┌─────────────────────┐
//       │     Event Queue     │
//       └─────────────────────┘
//                 │
// ┌─────────────────|─────────────────┐
// │                 │                 │
// │    Event Loop   │   Call Stack    │
// │                 │                 │
// │  ┌───────────┐  │  ┌───────────┐  │
// │  │   Task 1  │  │  │    ...    │  │
// │  └───────────┘  │  └───────────┘  │
// │  │   Task 2  │  │  │           │  │
// │  └───────────┘  │  │           │  │
// │    ...          │  │           │  │
// └─────────────────|─────────────────┘
//                   │
//           ┌───────────────┐
//           │ JavaScript    │
//           │   Runtime     │
//           └───────────────┘


// ===============================================

// The event loop itself has own phases:
// https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick

//    ┌───────────────────────────┐
// ┌─>│           timers          │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │     pending callbacks     │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │       idle, prepare       │
// │  └─────────────┬─────────────┘      ┌───────────────┐
// │  ┌─────────────┴─────────────┐      │   incoming:   │
// │  │           poll            │<─────┤  connections, │
// │  └─────────────┬─────────────┘      │   data, etc.  │
// │  ┌─────────────┴─────────────┐      └───────────────┘
// │  │           check           │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// └──┤      close callbacks      │
//    └───────────────────────────┘

// 1. timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
// 2. pending callbacks: executes I/O callbacks deferred to the next loop iteration.
// 3. idle, prepare: only used internally.
// 4. poll: retrieve new I/O events; execute I/O related callbacks (almost all
// with the exception of close callbacks, the ones scheduled by timers, and setImmediate());
// node will block here when appropriate.
// 5. check: setImmediate() callbacks are invoked here.
// 5. close callbacks: some close callbacks, e.g. socket.on('close', ...).
