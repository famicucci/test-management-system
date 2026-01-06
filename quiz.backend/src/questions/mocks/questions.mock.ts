import { CreateQuestionDto } from '../dtos/create-question.dto';

export const questionsMocks: CreateQuestionDto[] = [
  {
    question: 'What is JavaScript?',
    explanation:
      'JavaScript is a programming language primarily used for web development to add interactivity to web pages.',
    options: [
      { text: 'A markup language for web pages', isCorrect: false },
      { text: 'A programming language for web development', isCorrect: true },
      { text: 'A database management system', isCorrect: false },
      { text: 'A web browser', isCorrect: false },
    ],
  },
  {
    question: 'What are the different data types in JavaScript?',
    explanation:
      'JavaScript has 8 main data types: String, Number, Boolean, Object, Undefined, Null, Symbol, and BigInt.',
    options: [
      {
        text: 'String, Number, Boolean, Object, Undefined, Null, Symbol, BigInt',
        isCorrect: true,
      },
      { text: 'Integer, Float, Char, String, Boolean', isCorrect: false },
      { text: 'Array, Object, Function, Class', isCorrect: false },
      { text: 'Text, Number, Boolean, Array', isCorrect: false },
    ],
  },
  {
    question: 'What is a closure?',
    explanation:
      'A closure is a function that retains access to its lexical scope even when executed outside its original scope.',
    options: [
      { text: 'A function that returns another function', isCorrect: false },
      {
        text: "A function that has access to its own scope, the outer function's scope, and the global scope",
        isCorrect: true,
      },
      { text: 'A function that is immediately invoked', isCorrect: false },
      { text: 'A function that only runs once', isCorrect: false },
    ],
  },
  {
    question: 'What is the difference between == and ===?',
    explanation:
      '== compares only value (with type coercion), while === compares both value and type (strict equality).',
    options: [
      {
        text: '== compares value and type, === compares only value',
        isCorrect: false,
      },
      {
        text: '== compares only value, === compares value and type',
        isCorrect: true,
      },
      { text: 'Both compare only value', isCorrect: false },
      { text: 'Both compare value and type', isCorrect: false },
    ],
  },
  {
    question: 'Can you create a closure?',
    explanation:
      'Closures are created when you return a function from another function, allowing the inner function to access variables from the outer function.',
    options: [
      { text: 'No, closures are created automatically', isCorrect: false },
      {
        text: 'Yes, by returning a function from another function',
        isCorrect: true,
      },
      { text: 'Only in ES6', isCorrect: false },
      { text: 'Only with arrow functions', isCorrect: false },
    ],
  },
  {
    question: 'What is lexical scope?',
    explanation:
      'Lexical scope means that scope is determined by the physical placement of code in the source file.',
    options: [
      {
        text: 'Scope determined by the order in which functions are called',
        isCorrect: false,
      },
      {
        text: 'Scope determined by the physical placement of code in the source file',
        isCorrect: true,
      },
      { text: "Scope determined by the value of 'this'", isCorrect: false },
      { text: 'Scope determined by the browser', isCorrect: false },
    ],
  },
  {
    question: 'What is the difference between var, let, and const?',
    explanation:
      'var is function-scoped, while let and const are block-scoped. const also creates a constant binding.',
    options: [
      {
        text: 'var is block-scoped, let and const are function-scoped',
        isCorrect: false,
      },
      {
        text: 'var is function-scoped, let and const are block-scoped',
        isCorrect: true,
      },
      {
        text: 'let is function-scoped, var and const are block-scoped',
        isCorrect: false,
      },
      { text: 'All are block-scoped', isCorrect: false },
    ],
  },
  {
    question: 'What is hoisting?',
    explanation:
      "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.",
    options: [
      {
        text: 'Moving all variables to the top of their scope',
        isCorrect: true,
      },
      {
        text: 'Moving all functions to the bottom of their scope',
        isCorrect: false,
      },
      { text: 'Automatically executing code', isCorrect: false },
      { text: 'Blocking code execution', isCorrect: false },
    ],
  },
  {
    question: 'What is the Temporal Dead Zone?',
    explanation:
      'The Temporal Dead Zone is the time between entering scope and variable declaration, during which let/const variables cannot be accessed.',
    options: [
      {
        text: 'A period when variables are not accessible before they are declared with let or const',
        isCorrect: true,
      },
      {
        text: 'A period when variables are accessible before declaration',
        isCorrect: false,
      },
      { text: 'A period when functions cannot be called', isCorrect: false },
      { text: 'A period when the browser is unresponsive', isCorrect: false },
    ],
  },
  {
    question: 'What is the event loop?',
    explanation:
      'The event loop is a mechanism that handles asynchronous callbacks and coordinates execution of code, events, and messages.',
    options: [
      { text: 'A loop that runs events in the browser', isCorrect: false },
      {
        text: 'A mechanism that handles asynchronous callbacks in JavaScript',
        isCorrect: true,
      },
      { text: 'A function that loops through events', isCorrect: false },
      { text: 'A way to create infinite loops', isCorrect: false },
    ],
  },
  {
    question: 'What is the call stack?',
    explanation:
      'The call stack is a stack data structure that records function calls and manages execution context in JavaScript.',
    options: [
      {
        text: 'A stack of function calls that tracks execution',
        isCorrect: true,
      },
      { text: 'A list of events to be processed', isCorrect: false },
      { text: 'A queue of asynchronous tasks', isCorrect: false },
      { text: 'A stack of variables', isCorrect: false },
    ],
  },
  {
    question: 'What are microtasks and macrotasks?',
    explanation:
      'Microtasks (e.g., promises) and macrotasks (e.g., setTimeout) are types of asynchronous tasks managed by the event loop.',
    options: [
      { text: 'Types of JavaScript variables', isCorrect: false },
      {
        text: 'Types of asynchronous tasks scheduled by the event loop',
        isCorrect: true,
      },
      { text: 'Types of functions', isCorrect: false },
      { text: 'Types of objects', isCorrect: false },
    ],
  },
  {
    question:
      'What is the difference between setTimeout, setImmediate, and process.nextTick?',
    explanation:
      'setTimeout schedules a macrotask, setImmediate runs after I/O events, and process.nextTick runs before other microtasks in Node.js.',
    options: [
      {
        text: 'setTimeout runs after all microtasks, setImmediate runs after I/O events, process.nextTick runs before other microtasks',
        isCorrect: true,
      },
      {
        text: 'setTimeout runs immediately, setImmediate runs after microtasks, process.nextTick runs after setTimeout',
        isCorrect: false,
      },
      {
        text: 'setTimeout runs before microtasks, setImmediate runs before setTimeout, process.nextTick runs after setImmediate',
        isCorrect: false,
      },
      { text: 'All run at the same time', isCorrect: false },
    ],
  },
  {
    question:
      'Which function is executed first: setTimeout, setImmediate, or process.nextTick?',
    explanation:
      'process.nextTick is executed before setTimeout and setImmediate in Node.js.',
    options: [
      { text: 'setTimeout', isCorrect: false },
      { text: 'setImmediate', isCorrect: false },
      { text: 'process.nextTick', isCorrect: true },
      { text: 'All at the same time', isCorrect: false },
    ],
  },
  {
    question: 'What is a JavaScript runtime environment?',
    explanation:
      'A JavaScript runtime environment is where JavaScript code is executed, such as a browser or Node.js.',
    options: [
      { text: 'A place where JavaScript code is written', isCorrect: false },
      {
        text: 'A browser or Node.js where JavaScript code is executed',
        isCorrect: true,
      },
      { text: 'A database for JavaScript', isCorrect: false },
      { text: 'A compiler for JavaScript', isCorrect: false },
    ],
  },
];
