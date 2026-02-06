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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'React',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'JavaScript',
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
    topic: 'Software Design',
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
    topic: 'Software Design',
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
    topic: 'Databases',
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
    topic: 'Databases',
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
    topic: 'Databases',
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
    topic: 'Databases',
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
    topic: 'Databases',
  },
  {
    question: 'What does the Open/Closed Principle state in software design?',
    explanation:
      'The Open/Closed Principle is the second SOLID principle. It states that software entities (like classes, modules, and functions) should be open for extension but closed for modification. This means you can add new functionality by extending existing code, without changing the original source.',
    options: [
      {
        text: 'Software entities should be open for extension but closed for modification.',
        isCorrect: true,
      },
      {
        text: 'Software entities should be open for modification but closed for extension.',
        isCorrect: false,
      },
      {
        text: 'All code should be freely modifiable at any time.',
        isCorrect: false,
      },
      {
        text: 'Only the original author can modify the code.',
        isCorrect: false,
      },
    ],
    topic: 'SOLID',
  },
  {
    question: 'Which code example best follows the Open/Closed Principle?',
    explanation:
      'The Open/Closed Principle states that classes should be open for extension but closed for modification. Using inheritance or interfaces to add new behavior without changing existing code is a good example.',
    options: [
      {
        text: 'A class that uses inheritance or interfaces to add new behavior without modifying existing code.',
        isCorrect: true,
      },
      {
        text: 'A class that is modified every time a new feature is needed.',
        isCorrect: false,
      },
      {
        text: 'A class that only allows one type of behavior and cannot be extended.',
        isCorrect: false,
      },
      {
        text: 'A class that exposes all its internal variables for direct modification.',
        isCorrect: false,
      },
    ],
    topic: 'SOLID',
  },
  {
    question:
      'Which of the following are considered some of the most important design patterns in software engineering?',
    explanation:
      'Commonly used design patterns include Singleton, Factory, Observer, Strategy, and Decorator. These patterns help solve recurring design problems and improve code maintainability and flexibility.',
    options: [
      {
        text: 'Singleton, Factory, Observer, Strategy, Decorator',
        isCorrect: true,
      },
      {
        text: 'Loop, Condition, Variable, Constant, Function',
        isCorrect: false,
      },
      { text: 'HTML, CSS, JavaScript, SQL, Python', isCorrect: false },
      { text: 'MVC, MVVM, MVP, REST, CRUD', isCorrect: false },
    ],
    topic: 'Design Patterns',
  },
  {
    question:
      'What are the main categories of design patterns in software engineering?',
    explanation:
      'Design patterns are generally classified into three main categories: Creational, Structural, and Behavioral. Each category addresses different types of design problems.',
    options: [
      { text: 'Creational, Structural, Behavioral', isCorrect: true },
      { text: 'Frontend, Backend, Fullstack', isCorrect: false },
      { text: 'MVC, MVVM, MVP', isCorrect: false },
      { text: 'Singleton, Factory, Observer', isCorrect: false },
    ],
    topic: 'Design Patterns',
  },
  {
    question: 'What is a design system?',
    explanation:
      'A design system is a collection of reusable components, guidelines, and standards that help teams build consistent, efficient, and scalable digital products. It includes visual styles, UI components, documentation, and best practices for design and development.',
    options: [
      {
        text: 'A set of reusable components, guidelines, and standards for building consistent digital products',
        isCorrect: true,
      },
      { text: 'A programming language for web development', isCorrect: false },
      { text: 'A database management system', isCorrect: false },
      { text: 'A tool for testing software', isCorrect: false },
    ],
    topic: 'Design System',
  },
  {
    question: 'What is architecture in software development?',
    explanation:
      'Software architecture refers to the high-level structure of a software system, including its components, their relationships, and the principles guiding its design and evolution. It defines how the system is organized and how different parts interact to achieve the desired functionality and quality attributes.',
    options: [
      {
        text: 'The high-level structure, organization, and relationships of components in a software system',
        isCorrect: true,
      },
      {
        text: 'A programming language for building applications',
        isCorrect: false,
      },
      { text: 'A tool for testing software', isCorrect: false },
      { text: 'A database management system', isCorrect: false },
    ],
    topic: 'Software Architecture',
  },
  {
    question:
      'What are the main benefits of using a design system in product development?',
    explanation:
      'Design systems help teams achieve consistency, efficiency, scalability, and better collaboration by providing reusable components, guidelines, and standards for design and development.',
    options: [
      {
        text: 'Consistency, efficiency, scalability, and better collaboration',
        isCorrect: true,
      },
      {
        text: 'Faster database queries and improved security',
        isCorrect: false,
      },
      { text: 'Automatic code generation and deployment', isCorrect: false },
      { text: 'Increased hardware performance', isCorrect: false },
    ],
    topic: 'Design System',
  },
  {
    question:
      'Which of the following is typically included in a design system?',
    explanation:
      'A design system usually includes reusable UI components, visual styles, documentation, and guidelines for design and development to ensure consistency and efficiency.',
    options: [
      {
        text: 'Reusable UI components, visual styles, documentation, and guidelines',
        isCorrect: true,
      },
      { text: 'Only source code and database schemas', isCorrect: false },
      {
        text: 'Hardware specifications and network diagrams',
        isCorrect: false,
      },
      { text: 'Marketing strategies and sales reports', isCorrect: false },
    ],
    topic: 'Design System',
  },
  {
    question:
      'Who typically benefits from a design system within an organization?',
    explanation:
      'Designers, developers, and product managers benefit from design systems because they provide shared resources, improve collaboration, and ensure consistency across products.',
    options: [
      { text: 'Designers, developers, and product managers', isCorrect: true },
      { text: 'Only marketing teams', isCorrect: false },
      { text: 'Only database administrators', isCorrect: false },
      { text: 'Only external users', isCorrect: false },
    ],
    topic: 'Design System',
  },
  {
    question:
      '¿Cómo puede un sistema de diseño ayudar a resolver los desafíos de escalar un producto en múltiples plataformas y equipos?',
    explanation:
      'Los sistemas de diseño proporcionan componentes estandarizados, documentación y guías, lo que reduce inconsistencias, mejora la eficiencia y permite a los equipos escalar productos reutilizando recursos y manteniendo una experiencia unificada.',
    options: [
      {
        text: 'Proporcionando recursos estandarizados que reducen inconsistencias y permiten escalar eficientemente en plataformas y equipos',
        isCorrect: true,
      },
      {
        text: 'Generando automáticamente código para cada plataforma sin intervención humana',
        isCorrect: false,
      },
      {
        text: 'Enfocándose solo en el diseño visual e ignorando las necesidades de desarrollo',
        isCorrect: false,
      },
      { text: 'Limitando la colaboración a un solo equipo', isCorrect: false },
    ],
    topic: 'Design System',
  },
  {
    question:
      'What is the main benefit of using a design system with components in React?',
    explanation:
      'In React, design systems allow teams to reuse UI components, maintain visual consistency, and speed up development, as components can be easily shared and adapted across different parts of the application.',
    options: [
      {
        text: 'It allows reuse of UI components, maintains visual consistency, and speeds up development',
        isCorrect: true,
      },
      {
        text: 'It makes code less modular and harder to maintain',
        isCorrect: false,
      },
      { text: 'It limits UI customization', isCorrect: false },
      { text: 'It is only useful for mobile applications', isCorrect: false },
    ],
    topic: 'React Design System',
  },
  {
    question:
      'What is the advantage of using a Button component from a design system instead of creating a new button each time?',
    explanation:
      'Using a Button component from a design system ensures consistency and reusability across the application, making code easier to maintain and update.',
    options: [
      { text: 'Consistency and reusability', isCorrect: true },
      { text: 'More code duplication', isCorrect: false },
      { text: 'Less maintainable code', isCorrect: false },
      { text: 'No difference', isCorrect: false },
    ],
    topic: 'React Design System',
  },
  {
    question: 'When would you choose MongoDB over a relational database like MySQL or PostgreSQL?',
    explanation:
      'MongoDB is ideal when you need flexible schemas, work with unstructured or hierarchical data (JSON/BSON), require horizontal scalability with native sharding, need rapid prototyping without rigid schemas, handle high write volumes, or manage catalog data with variable attributes.',
    options: [
      {
        text: 'When you need flexible schemas, horizontal scalability, and work with unstructured JSON data',
        isCorrect: true,
      },
      {
        text: 'When you need complex JOINs and strict ACID transactions',
        isCorrect: false,
      },
      {
        text: 'When you need to normalize data and avoid redundancy',
        isCorrect: false,
      },
      {
        text: 'When you need a rigid schema that never changes',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What does "flexible schema" mean in MongoDB?',
    explanation:
      'Flexible schema means that each document in a MongoDB collection can have different fields and structures without requiring schema migrations. This allows documents to evolve independently and adapt to changing requirements without altering the database structure.',
    options: [
      {
        text: 'Documents can have different structures without requiring migrations',
        isCorrect: true,
      },
      {
        text: 'All documents must have exactly the same fields',
        isCorrect: false,
      },
      {
        text: 'You need to run ALTER TABLE commands to add new fields',
        isCorrect: false,
      },
      {
        text: 'The schema is defined once and cannot be changed',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What is horizontal scalability (sharding) in MongoDB?',
    explanation:
      'Horizontal scalability in MongoDB refers to the ability to distribute data across multiple servers (sharding). This allows the database to handle larger datasets and higher throughput by adding more servers, rather than upgrading a single server (vertical scaling).',
    options: [
      {
        text: 'Distributing data across multiple servers to handle larger datasets',
        isCorrect: true,
      },
      {
        text: 'Adding more CPU and RAM to a single database server',
        isCorrect: false,
      },
      {
        text: 'Creating backup copies of the same data',
        isCorrect: false,
      },
      {
        text: 'Reducing the number of servers to save costs',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'Why is MongoDB good for rapid prototyping and agile development?',
    explanation:
      'MongoDB allows developers to start coding without defining rigid schemas upfront. You can quickly iterate and add new fields to documents without migrations, making it ideal for agile development where requirements change frequently.',
    options: [
      {
        text: 'You can start coding without defining rigid schemas and easily add new fields',
        isCorrect: true,
      },
      {
        text: 'It requires detailed schema planning before development',
        isCorrect: false,
      },
      {
        text: 'Every change requires running migration scripts',
        isCorrect: false,
      },
      {
        text: 'It only works with predefined data structures',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What type of data is MongoDB particularly well-suited for?',
    explanation:
      'MongoDB is ideal for unstructured or semi-structured data, hierarchical data (like nested objects), JSON/BSON documents, and catalog data where items have varying attributes (e.g., e-commerce products with different specifications).',
    options: [
      {
        text: 'Unstructured data, hierarchical/nested data, and catalog data with variable attributes',
        isCorrect: true,
      },
      {
        text: 'Only highly structured financial transaction data',
        isCorrect: false,
      },
      {
        text: 'Data that requires many complex JOINs between tables',
        isCorrect: false,
      },
      {
        text: 'Data that never changes structure',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What is the advantage of MongoDB using native JSON/BSON format?',
    explanation:
      'MongoDB stores data in BSON (Binary JSON) format, which aligns naturally with how data is represented in modern applications (JavaScript objects, API responses). This eliminates the need for complex object-relational mapping and makes it easier to work with nested and hierarchical data structures.',
    options: [
      {
        text: 'It aligns naturally with JavaScript objects and eliminates complex ORM mapping',
        isCorrect: true,
      },
      {
        text: 'It makes the database slower and harder to query',
        isCorrect: false,
      },
      {
        text: 'It requires converting all data to relational tables first',
        isCorrect: false,
      },
      {
        text: 'It only works with relational data structures',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'In what scenario is MongoDB better than PostgreSQL for write performance?',
    explanation:
      'MongoDB excels at high-volume write operations because it can be configured for faster writes (at the cost of some consistency guarantees), supports horizontal scaling across multiple servers, and does not require maintaining complex indexes and foreign key constraints during writes.',
    options: [
      {
        text: 'When you need to handle massive volumes of write operations and can distribute them across servers',
        isCorrect: true,
      },
      {
        text: 'When you need strict ACID guarantees for every single write',
        isCorrect: false,
      },
      {
        text: 'When you have very few write operations per day',
        isCorrect: false,
      },
      {
        text: 'MongoDB is always slower than PostgreSQL for writes',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'Why is MongoDB good for e-commerce product catalogs?',
    explanation:
      'E-commerce products often have varying attributes (phones have screen size, books have ISBN, clothes have sizes). MongoDB flexible schema allows each product to have its own set of attributes without forcing all products into the same rigid table structure.',
    options: [
      {
        text: 'Products can have different attributes without forcing them into the same rigid structure',
        isCorrect: true,
      },
      {
        text: 'All products must have exactly the same fields',
        isCorrect: false,
      },
      {
        text: 'You need separate tables for each product type',
        isCorrect: false,
      },
      {
        text: 'It does not support product data',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'When would you choose a relational database (MySQL/PostgreSQL) over a non-relational database like MongoDB?',
    explanation:
      'Relational databases are ideal when you need complex relationships with JOINs, strict ACID transactions for data consistency, referential integrity with foreign keys, normalized data to avoid redundancy, complex queries and reporting, or when building financial/banking applications where data integrity is critical.',
    options: [
      {
        text: 'When you need complex relationships, ACID transactions, data integrity, and normalized structured data',
        isCorrect: true,
      },
      {
        text: 'When you need flexible schemas and documents with varying structures',
        isCorrect: false,
      },
      {
        text: 'When you want to avoid defining relationships between entities',
        isCorrect: false,
      },
      {
        text: 'When you need horizontal scaling through sharding',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What are ACID properties and why are they important in relational databases?',
    explanation:
      'ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure that database transactions are processed reliably: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions do not interfere), and Durability (committed data persists). This is crucial for applications like banking where data integrity cannot be compromised.',
    options: [
      {
        text: 'Atomicity, Consistency, Isolation, Durability - ensuring reliable and safe transactions',
        isCorrect: true,
      },
      {
        text: 'Advanced, Complex, Integrated, Distributed - features for scaling',
        isCorrect: false,
      },
      {
        text: 'Automatic, Cached, Indexed, Detailed - performance optimizations',
        isCorrect: false,
      },
      {
        text: 'They are only marketing terms with no real meaning',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What is referential integrity and why is it important?',
    explanation:
      'Referential integrity is a database concept that ensures relationships between tables remain consistent. Foreign keys guarantee that a record in one table cannot reference a non-existent record in another table. This prevents orphaned records and maintains data consistency, which is critical in relational databases.',
    options: [
      {
        text: 'It ensures relationships between tables remain consistent using foreign keys',
        isCorrect: true,
      },
      {
        text: 'It allows documents to have any structure without validation',
        isCorrect: false,
      },
      {
        text: 'It is a feature only available in MongoDB',
        isCorrect: false,
      },
      {
        text: 'It speeds up write operations by removing constraints',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'Why are relational databases better for financial and banking applications?',
    explanation:
      'Financial applications require strict ACID guarantees to ensure transactions are processed reliably (e.g., money transfers must be atomic). Relational databases provide strong consistency, referential integrity, and complex transaction support that prevent data corruption, double-spending, or lost transactions - which are unacceptable in financial systems.',
    options: [
      {
        text: 'They provide strict ACID guarantees, strong consistency, and prevent data corruption',
        isCorrect: true,
      },
      {
        text: 'They allow flexible schemas for changing account structures',
        isCorrect: false,
      },
      {
        text: 'They prioritize write speed over data consistency',
        isCorrect: false,
      },
      {
        text: 'They do not support transactions',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What is data normalization and why is it important in relational databases?',
    explanation:
      'Data normalization is the process of organizing data to reduce redundancy and improve data integrity. By breaking data into related tables and using foreign keys, you avoid storing the same information multiple times. This saves storage space, prevents inconsistencies, and makes updates easier (update once instead of many places).',
    options: [
      {
        text: 'Organizing data into related tables to reduce redundancy and improve integrity',
        isCorrect: true,
      },
      {
        text: 'Storing all data in a single collection with nested documents',
        isCorrect: false,
      },
      {
        text: 'Duplicating data across multiple tables for faster reads',
        isCorrect: false,
      },
      {
        text: 'A technique only used in NoSQL databases',
        isCorrect: false,
      },
    ],
    topic: 'Databases',
  },
  {
    question: 'What is a race condition in database operations?',
    explanation:
      'A race condition occurs when two or more operations execute simultaneously and try to modify the same data. For example, if two users try to buy the last product at the same time, both might read stock=1, and both might proceed to decrement it, resulting in stock=-1 (invalid state).',
    options: [
      {
        text: 'When multiple operations access and modify the same data simultaneously, causing inconsistent results',
        isCorrect: true,
      },
      {
        text: 'When database queries run faster than expected',
        isCorrect: false,
      },
      {
        text: 'When two users compete to finish a task first',
        isCorrect: false,
      },
      {
        text: 'When the database has too many indexes',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'What is the purpose of a database transaction?',
    explanation:
      'A transaction groups multiple database operations into a single unit that either completes entirely or fails entirely (all-or-nothing). This ensures data consistency. For example, transferring money requires subtracting from one account and adding to another - both must succeed or both must fail.',
    options: [
      {
        text: 'To group multiple operations into an all-or-nothing unit that ensures data consistency',
        isCorrect: true,
      },
      {
        text: 'To make database queries run faster',
        isCorrect: false,
      },
      {
        text: 'To encrypt sensitive data in the database',
        isCorrect: false,
      },
      {
        text: 'To automatically backup the database',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'What is pessimistic locking (FOR UPDATE) in databases?',
    explanation:
      'Pessimistic locking locks a row when you read it, preventing other users from modifying it until you are done. Other users trying to lock the same row must wait in a queue. This prevents race conditions but can slow down the system if there is high concurrency.',
    options: [
      {
        text: 'Locking a database row during a read operation, forcing other users to wait until the lock is released',
        isCorrect: true,
      },
      {
        text: 'Assuming conflicts will not happen and checking for them only when saving',
        isCorrect: false,
      },
      {
        text: 'Preventing all users from accessing the database simultaneously',
        isCorrect: false,
      },
      {
        text: 'A security feature that blocks malicious users',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'What is optimistic locking in databases?',
    explanation:
      'Optimistic locking assumes conflicts are rare. Each row has a version number. When you read a row (version=5), modify it, and save, the database checks if the version is still 5. If another user changed it (version=6), the save fails and you must retry. This is faster than pessimistic locking but requires error handling.',
    options: [
      {
        text: 'Using a version column to detect if data was modified by another user, and failing the operation if it was',
        isCorrect: true,
      },
      {
        text: 'Locking rows immediately when reading them to prevent conflicts',
        isCorrect: false,
      },
      {
        text: 'Assuming all operations will succeed without checking for conflicts',
        isCorrect: false,
      },
      {
        text: 'A performance optimization technique that removes all locks',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'What is an atomic database operation?',
    explanation:
      'An atomic operation is indivisible - it executes as a single, uninterruptible unit. For example, UPDATE products SET stock = stock - 1 WHERE stock > 0 executes in one step, preventing race conditions. There is no gap between reading the value and writing it where another user could interfere.',
    options: [
      {
        text: 'An indivisible operation that executes as a single unit without interruption',
        isCorrect: true,
      },
      {
        text: 'An operation that uses the smallest possible data type',
        isCorrect: false,
      },
      {
        text: 'An operation that runs on the fastest server',
        isCorrect: false,
      },
      {
        text: 'An operation that affects only one row',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'What is the SERIALIZABLE isolation level in database transactions?',
    explanation:
      'SERIALIZABLE is the strictest isolation level. It makes concurrent transactions behave as if they were executed one after another (serially). If two transactions conflict, PostgreSQL cancels one and forces it to retry. This provides maximum safety but is slower and requires retry logic.',
    options: [
      {
        text: 'The strictest isolation level that makes transactions behave as if executed sequentially',
        isCorrect: true,
      },
      {
        text: 'A level that allows transactions to see uncommitted changes from others',
        isCorrect: false,
      },
      {
        text: 'A way to convert database data into JSON format',
        isCorrect: false,
      },
      {
        text: 'The fastest isolation level with no safety guarantees',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'When should you use pessimistic locking instead of optimistic locking?',
    explanation:
      'Use pessimistic locking when conflicts are frequent and you want to prevent them proactively. For example, in a ticket booking system where many users compete for limited seats, pessimistic locks ensure users wait in line rather than all trying simultaneously and failing. Use optimistic locking when conflicts are rare.',
    options: [
      {
        text: 'When conflicts are frequent and you want to prevent them by making concurrent users wait',
        isCorrect: true,
      },
      {
        text: 'When conflicts are rare and you prefer speed over preventing conflicts',
        isCorrect: false,
      },
      {
        text: 'When you do not care about data consistency',
        isCorrect: false,
      },
      {
        text: 'Only in NoSQL databases',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'Why should you use database constraints like CHECK constraints for concurrency control?',
    explanation:
      'Database constraints act as a last line of defense. Even if your application logic has bugs or race conditions, the database will reject invalid data. For example, a CHECK (stock >= 0) constraint prevents negative stock even if concurrent operations somehow bypass other safeguards.',
    options: [
      {
        text: 'They provide a guaranteed safety mechanism at the database level, protecting against application bugs',
        isCorrect: true,
      },
      {
        text: 'They completely eliminate the need for transactions and locks',
        isCorrect: false,
      },
      {
        text: 'They make queries run faster by skipping validation',
        isCorrect: false,
      },
      {
        text: 'They are only used for documentation purposes',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
  {
    question: 'What is the main advantage of using atomic UPDATE operations over read-then-update patterns?',
    explanation:
      'Atomic UPDATE operations combine reading and writing into a single indivisible step, eliminating the time gap where race conditions can occur. For example, UPDATE SET stock = stock - 1 WHERE stock > 0 is safer than reading stock first, checking it, then updating separately.',
    options: [
      {
        text: 'They eliminate the time gap between reading and writing, preventing race conditions',
        isCorrect: true,
      },
      {
        text: 'They use less memory than separate read and update operations',
        isCorrect: false,
      },
      {
        text: 'They automatically create database backups',
        isCorrect: false,
      },
      {
        text: 'They work only with NoSQL databases',
        isCorrect: false,
      },
    ],
    topic: 'Database Concurrency',
  },
];
