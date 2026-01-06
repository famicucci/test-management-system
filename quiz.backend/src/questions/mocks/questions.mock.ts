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
  {
    question: 'What is de Virtual DOM?',
    explanation:
      'The Virtual DOM is a lightweight copy of the actual DOM used by libraries like React to optimize updates and rendering.',
    options: [
      { text: 'A lightweight copy of the actual DOM', isCorrect: true },
      { text: 'A place where JavaScript code is written', isCorrect: false },
      { text: 'A database for JavaScript', isCorrect: false },
      { text: 'A compiler for JavaScript', isCorrect: false },
    ],
  },
  {
    question: 'What is the DOM?',
    explanation:
      'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
    options: [
      { text: 'A programming interface for web documents', isCorrect: true },
      { text: 'A lightweight copy of the actual DOM', isCorrect: false },
      { text: 'A database for JavaScript', isCorrect: false },
      { text: 'A compiler for JavaScript', isCorrect: false },
    ],
  },
  {
    question: 'What is the difference between HTML and the DOM?',
    explanation:
      'HTML is the source code written in markup language that defines the structure of the page. The DOM is the in-memory representation of that HTML, generated by the browser, which JavaScript can interact with and modify.',
    options: [
      {
        text: 'HTML is the source code, the DOM is the in-memory structure generated by the browser from HTML',
        isCorrect: true,
      },
      { text: 'HTML and the DOM are exactly the same', isCorrect: false },
      {
        text: 'The DOM is the markup language and HTML is the in-memory structure',
        isCorrect: false,
      },
      {
        text: 'The DOM only exists in React, not in browsers',
        isCorrect: false,
      },
    ],
  },
  {
    question: 'What is the event loop in JavaScript?',
    explanation:
      'The event loop is a mechanism that allows JavaScript to handle asynchronous operations by coordinating the execution of code, events, and messages.',
    options: [
      {
        text: 'A mechanism that handles asynchronous callbacks and coordinates code execution',
        isCorrect: true,
      },
      { text: 'A function that loops through events', isCorrect: false },
      { text: 'A way to create infinite loops', isCorrect: false },
      { text: 'A stack of function calls', isCorrect: false },
    ],
  },
  {
    question: 'Explain event loop in JavaScript in detail',
    explanation:
      'The event loop is a mechanism in JavaScript that allows the language to handle asynchronous operations. It continuously checks the call stack and the message queue, executing tasks from the call stack first. When the call stack is empty, it takes the first task from the message queue and pushes it onto the call stack for execution. This enables JavaScript to perform non-blocking operations, such as handling user input, network requests, and timers.',
    options: [
      {
        text: 'It manages asynchronous operations by coordinating the call stack and message queue, allowing non-blocking execution.',
        isCorrect: true,
      },
      {
        text: 'It is a function that loops through all events in the browser.',
        isCorrect: false,
      },
      {
        text: 'It is a way to create infinite loops in JavaScript.',
        isCorrect: false,
      },
      {
        text: 'It is a stack of function calls that tracks execution.',
        isCorrect: false,
      },
    ],
  },
  {
    question: 'Which are the five SOLID principles of object-oriented design?',
    explanation:
      'The SOLID principles are a set of guidelines that help developers create maintainable, flexible, and robust software. They are: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
    options: [
      {
        text: 'Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion',
        isCorrect: true,
      },
      {
        text: 'Simple, Object, Logic, Inheritance, Dependency',
        isCorrect: false,
      },
      { text: 'Single, Object, List, Interface, Design', isCorrect: false },
      {
        text: 'Security, Optimization, Logic, Integration, Documentation',
        isCorrect: false,
      },
    ],
  },
  {
    question: 'What does the Dependency Inversion Principle state?',
    explanation:
      'The Dependency Inversion Principle is the fifth SOLID principle. It states that high-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions. This promotes loose coupling and easier maintainability.',
    options: [
      {
        text: 'High-level modules should not depend on low-level modules; both should depend on abstractions.',
        isCorrect: true,
      },
      {
        text: 'Low-level modules should depend on high-level modules directly.',
        isCorrect: false,
      },
      {
        text: 'Abstractions should depend on details for flexibility.',
        isCorrect: false,
      },
      {
        text: 'Modules should always be tightly coupled for performance.',
        isCorrect: false,
      },
    ],
  },
  {
    question:
      'Which of the following are common ways to improve database performance?',
    explanation:
      'Database performance can be improved by using indexes, optimizing queries, normalizing or denormalizing tables as needed, caching results, and archiving old data.',
    options: [
      {
        text: 'Using indexes, optimizing queries, caching, and archiving old data',
        isCorrect: true,
      },
      { text: 'Adding redundant data and avoiding indexes', isCorrect: false },
      { text: 'Running all queries without filters', isCorrect: false },
      { text: 'Storing all data in a single table', isCorrect: false },
    ],
  },
  {
    question: 'How do indexes improve database performance?',
    explanation:
      'Indexes allow the database to quickly locate and access the data needed for queries, reducing the amount of data scanned and speeding up search and retrieval operations.',
    options: [
      {
        text: 'They help the database find data faster by reducing the amount of data scanned during queries.',
        isCorrect: true,
      },
      {
        text: 'They increase the amount of data stored in the database.',
        isCorrect: false,
      },
      { text: 'They slow down all database operations.', isCorrect: false },
      { text: 'They are only useful for backup purposes.', isCorrect: false },
    ],
  },
  {
    question:
      'Which of the following are types of indexes that can be used to improve database performance?',
    explanation:
      'Databases support various types of indexes, such as primary key (unique, usually auto-increment), secondary (non-primary), composite (multi-column), unique, full-text, and spatial indexes. Each serves different query and data needs.',
    options: [
      {
        text: 'Primary key, secondary, composite, unique, full-text, and spatial indexes',
        isCorrect: true,
      },
      { text: 'Only primary key indexes', isCorrect: false },
      { text: 'Indexes only on numeric columns', isCorrect: false },
      { text: 'Indexes are not used to improve performance', isCorrect: false },
    ],
  },
  {
    question:
      'What is the main difference between a primary key and a secondary (non-primary) key in a database?',
    explanation:
      'A primary key uniquely identifies each record in a table and cannot have null or duplicate values. A secondary key (or non-primary index) is used to speed up queries on columns that are not the primary key and can have duplicate values.',
    options: [
      {
        text: 'A primary key uniquely identifies each record and cannot be null or duplicated, while a secondary key is used for faster searches on other columns and can have duplicates.',
        isCorrect: true,
      },
      {
        text: 'A secondary key uniquely identifies each record, while a primary key is only for faster searches.',
        isCorrect: false,
      },
      {
        text: 'Both primary and secondary keys must be unique and cannot be null.',
        isCorrect: false,
      },
      {
        text: 'There is no difference; both are used for the same purpose.',
        isCorrect: false,
      },
    ],
  },
  {
    question: 'Can a secondary index be unique in a database table?',
    explanation:
      'Yes, a secondary (non-primary) index can be unique. This ensures that all values in the indexed column(s) are unique, but it is not the primary key. This is useful for columns like email or username, where uniqueness is required but they are not the main identifier of the record.',
    options: [
      {
        text: 'Yes, a secondary index can be unique to enforce uniqueness on columns that are not the primary key.',
        isCorrect: true,
      },
      { text: 'No, only primary keys can be unique.', isCorrect: false },
      {
        text: 'Secondary indexes must always allow duplicate values.',
        isCorrect: false,
      },
      {
        text: 'Unique indexes are only allowed on numeric columns.',
        isCorrect: false,
      },
    ],
  },
];
