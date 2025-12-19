(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mocks/questionsMocks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questions",
    ()=>questions
]);
const questions = [
    {
        id: 1,
        question: "What is JavaScript?",
        options: [
            "A markup language for web pages",
            "A programming language for web development",
            "A database management system",
            "A web browser"
        ],
        answer: 1,
        explanation: "JavaScript is a programming language primarily used for web development to add interactivity to web pages."
    },
    {
        id: 2,
        question: "What are the different data types in JavaScript?",
        options: [
            "String, Number, Boolean, Object, Undefined, Null, Symbol, BigInt",
            "Integer, Float, Char, String, Boolean",
            "Array, Object, Function, Class",
            "Text, Number, Boolean, Array"
        ],
        answer: 0,
        explanation: "JavaScript has 8 main data types: String, Number, Boolean, Object, Undefined, Null, Symbol, and BigInt."
    },
    {
        id: 3,
        question: "What is the difference between == and ===?",
        options: [
            "== compares value and type, === compares only value",
            "== compares only value, === compares value and type",
            "Both compare only value",
            "Both compare value and type"
        ],
        answer: 1,
        explanation: "== compares only value (with type coercion), while === compares both value and type (strict equality)."
    },
    {
        id: 4,
        question: "What is a closure?",
        options: [
            "A function that returns another function",
            "A function that has access to its own scope, the outer function's scope, and the global scope",
            "A function that is immediately invoked",
            "A function that only runs once"
        ],
        answer: 1,
        explanation: "A closure is a function that retains access to its lexical scope even when executed outside its original scope."
    },
    {
        id: 5,
        question: "Can you create a closure?",
        options: [
            "No, closures are created automatically",
            "Yes, by returning a function from another function",
            "Only in ES6",
            "Only with arrow functions"
        ],
        answer: 1,
        explanation: "Closures are created when you return a function from another function, allowing the inner function to access variables from the outer function."
    },
    {
        id: 6,
        question: "What is JavaScript?",
        options: [
            "A markup language for web pages",
            "A programming language for web development",
            "A database management system",
            "A web browser"
        ],
        answer: 1,
        explanation: "JavaScript is a programming language primarily used for web development to add interactivity to web pages."
    },
    {
        id: 7,
        question: "What are the different data types in JavaScript?",
        options: [
            "String, Number, Boolean, Object, Undefined, Null, Symbol, BigInt",
            "Integer, Float, Char, String, Boolean",
            "Array, Object, Function, Class",
            "Text, Number, Boolean, Array"
        ],
        answer: 0,
        explanation: "JavaScript has 8 main data types: String, Number, Boolean, Object, Undefined, Null, Symbol, and BigInt."
    },
    {
        id: 8,
        question: "What is the difference between == and ===?",
        options: [
            "== compares value and type, === compares only value",
            "== compares only value, === compares value and type",
            "Both compare only value",
            "Both compare value and type"
        ],
        answer: 1,
        explanation: "== compares only value (with type coercion), while === compares both value and type (strict equality)."
    },
    {
        id: 9,
        question: "What is a closure?",
        options: [
            "A function that returns another function",
            "A function that has access to its own scope, the outer function's scope, and the global scope",
            "A function that is immediately invoked",
            "A function that only runs once"
        ],
        answer: 1,
        explanation: "A closure is a function that retains access to its lexical scope even when executed outside its original scope."
    },
    {
        id: 10,
        question: "Can you create a closure?",
        options: [
            "No, closures are created automatically",
            "Yes, by returning a function from another function",
            "Only in ES6",
            "Only with arrow functions"
        ],
        answer: 1,
        explanation: "Closures are created when you return a function from another function, allowing the inner function to access variables from the outer function."
    },
    {
        id: 11,
        question: "What is lexical scope?",
        options: [
            "Scope determined by the order in which functions are called",
            "Scope determined by the physical placement of code in the source file",
            "Scope determined by the value of 'this'",
            "Scope determined by the browser"
        ],
        answer: 1,
        explanation: "Lexical scope means that scope is determined by the physical placement of code in the source file."
    },
    {
        id: 12,
        question: "What is the difference between var, let, and const?",
        options: [
            "var is block-scoped, let and const are function-scoped",
            "var is function-scoped, let and const are block-scoped",
            "let is function-scoped, var and const are block-scoped",
            "All are block-scoped"
        ],
        answer: 1,
        explanation: "var is function-scoped, while let and const are block-scoped. const also creates a constant binding."
    },
    {
        id: 13,
        question: "What is hoisting?",
        options: [
            "Moving all variables to the top of their scope",
            "Moving all functions to the bottom of their scope",
            "Automatically executing code",
            "Blocking code execution"
        ],
        answer: 0,
        explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope."
    },
    {
        id: 14,
        question: "What is the Temporal Dead Zone?",
        options: [
            "A period when variables are not accessible before they are declared with let or const",
            "A period when variables are accessible before declaration",
            "A period when functions cannot be called",
            "A period when the browser is unresponsive"
        ],
        answer: 0,
        explanation: "The Temporal Dead Zone is the time between entering scope and variable declaration, during which let/const variables cannot be accessed."
    },
    {
        id: 15,
        question: "What is the event loop?",
        options: [
            "A loop that runs events in the browser",
            "A mechanism that handles asynchronous callbacks in JavaScript",
            "A function that loops through events",
            "A way to create infinite loops"
        ],
        answer: 1,
        explanation: "The event loop is a mechanism that handles asynchronous callbacks and coordinates execution of code, events, and messages."
    },
    {
        id: 16,
        question: "What is the call stack?",
        options: [
            "A stack of function calls that tracks execution",
            "A list of events to be processed",
            "A queue of asynchronous tasks",
            "A stack of variables"
        ],
        answer: 0,
        explanation: "The call stack is a stack data structure that records function calls and manages execution context in JavaScript."
    },
    {
        id: 17,
        question: "What are microtasks and macrotasks?",
        options: [
            "Types of JavaScript variables",
            "Types of asynchronous tasks scheduled by the event loop",
            "Types of functions",
            "Types of objects"
        ],
        answer: 1,
        explanation: "Microtasks (e.g., promises) and macrotasks (e.g., setTimeout) are types of asynchronous tasks managed by the event loop."
    },
    {
        id: 18,
        question: "What is the difference between setTimeout, setImmediate, and process.nextTick?",
        options: [
            "setTimeout runs after all microtasks, setImmediate runs after I/O events, process.nextTick runs before other microtasks",
            "setTimeout runs immediately, setImmediate runs after microtasks, process.nextTick runs after setTimeout",
            "setTimeout runs before microtasks, setImmediate runs before setTimeout, process.nextTick runs after setImmediate",
            "All run at the same time"
        ],
        answer: 0,
        explanation: "setTimeout schedules a macrotask, setImmediate runs after I/O events, and process.nextTick runs before other microtasks in Node.js."
    },
    {
        id: 19,
        question: "Which function is executed first: setTimeout, setImmediate, or process.nextTick?",
        options: [
            "setTimeout",
            "setImmediate",
            "process.nextTick",
            "All at the same time"
        ],
        answer: 2,
        explanation: "process.nextTick is executed before setTimeout and setImmediate in Node.js."
    },
    {
        id: 20,
        question: "What is a JavaScript runtime environment?",
        options: [
            "A place where JavaScript code is written",
            "A browser or Node.js where JavaScript code is executed",
            "A database for JavaScript",
            "A compiler for JavaScript"
        ],
        answer: 1,
        explanation: "A JavaScript runtime environment is where JavaScript code is executed, such as a browser or Node.js."
    },
    {
        id: 21,
        question: "What is JavaScript?",
        options: [
            "A markup language for web pages",
            "A programming language for web development",
            "A database management system",
            "A web browser"
        ],
        answer: 1,
        explanation: "JavaScript is a programming language primarily used for web development to add interactivity to web pages."
    },
    {
        id: 22,
        question: "What are the different data types in JavaScript?",
        options: [
            "String, Number, Boolean, Object, Undefined, Null, Symbol, BigInt",
            "Integer, Float, Char, String, Boolean",
            "Array, Object, Function, Class",
            "Text, Number, Boolean, Array"
        ],
        answer: 0,
        explanation: "JavaScript has 8 main data types: String, Number, Boolean, Object, Undefined, Null, Symbol, and BigInt."
    },
    {
        id: 23,
        question: "What is the difference between == and ===?",
        options: [
            "== compares value and type, === compares only value",
            "== compares only value, === compares value and type",
            "Both compare only value",
            "Both compare value and type"
        ],
        answer: 1,
        explanation: "== compares only value (with type coercion), while === compares both value and type (strict equality)."
    },
    {
        id: 24,
        question: "What is a closure?",
        options: [
            "A function that returns another function",
            "A function that has access to its own scope, the outer function's scope, and the global scope",
            "A function that is immediately invoked",
            "A function that only runs once"
        ],
        answer: 1,
        explanation: "A closure is a function that retains access to its lexical scope even when executed outside its original scope."
    },
    {
        id: 25,
        question: "Can you create a closure?",
        options: [
            "No, closures are created automatically",
            "Yes, by returning a function from another function",
            "Only in ES6",
            "Only with arrow functions"
        ],
        answer: 1,
        explanation: "Closures are created when you return a function from another function, allowing the inner function to access variables from the outer function."
    },
    {
        id: 26,
        question: "What is lexical scope?",
        options: [
            "Scope determined by the order in which functions are called",
            "Scope determined by the physical placement of code in the source file",
            "Scope determined by the value of 'this'",
            "Scope determined by the browser"
        ],
        answer: 1,
        explanation: "Lexical scope means that scope is determined by the physical placement of code in the source file."
    },
    {
        id: 27,
        question: "What is the difference between var, let, and const?",
        options: [
            "var is block-scoped, let and const are function-scoped",
            "var is function-scoped, let and const are block-scoped",
            "let is function-scoped, var and const are block-scoped",
            "All are block-scoped"
        ],
        answer: 1,
        explanation: "var is function-scoped, while let and const are block-scoped. const also creates a constant binding."
    },
    {
        id: 28,
        question: "What is hoisting?",
        options: [
            "Moving all variables to the top of their scope",
            "Moving all functions to the bottom of their scope",
            "Automatically executing code",
            "Blocking code execution"
        ],
        answer: 0,
        explanation: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope."
    },
    {
        id: 29,
        question: "What is the Temporal Dead Zone?",
        options: [
            "A period when variables are not accessible before they are declared with let or const",
            "A period when variables are accessible before declaration",
            "A period when functions cannot be called",
            "A period when the browser is unresponsive"
        ],
        answer: 0,
        explanation: "The Temporal Dead Zone is the time between entering scope and variable declaration, during which let/const variables cannot be accessed."
    },
    {
        id: 30,
        question: "What is the event loop?",
        options: [
            "A loop that runs events in the browser",
            "A mechanism that handles asynchronous callbacks in JavaScript",
            "A function that loops through events",
            "A way to create infinite loops"
        ],
        answer: 1,
        explanation: "The event loop is a mechanism that handles asynchronous callbacks and coordinates execution of code, events, and messages."
    },
    {
        id: 31,
        question: "What is the call stack?",
        options: [
            "A stack of function calls that tracks execution",
            "A list of events to be processed",
            "A queue of asynchronous tasks",
            "A stack of variables"
        ],
        answer: 0,
        explanation: "The call stack is a stack data structure that records function calls and manages execution context in JavaScript."
    },
    {
        id: 32,
        question: "What are microtasks and macrotasks?",
        options: [
            "Types of JavaScript variables",
            "Types of asynchronous tasks scheduled by the event loop",
            "Types of functions",
            "Types of objects"
        ],
        answer: 1,
        explanation: "Microtasks (e.g., promises) and macrotasks (e.g., setTimeout) are types of asynchronous tasks managed by the event loop."
    },
    {
        id: 33,
        question: "What is the difference between setTimeout, setImmediate, and process.nextTick?",
        options: [
            "setTimeout runs after all microtasks, setImmediate runs after I/O events, process.nextTick runs before other microtasks",
            "setTimeout runs immediately, setImmediate runs after microtasks, process.nextTick runs after setTimeout",
            "setTimeout runs before microtasks, setImmediate runs before setTimeout, process.nextTick runs after setImmediate",
            "All run at the same time"
        ],
        answer: 0,
        explanation: "setTimeout schedules a macrotask, setImmediate runs after I/O events, and process.nextTick runs before other microtasks in Node.js."
    },
    {
        id: 34,
        question: "Which function is executed first: setTimeout, setImmediate, or process.nextTick?",
        options: [
            "setTimeout",
            "setImmediate",
            "process.nextTick",
            "All at the same time"
        ],
        answer: 2,
        explanation: "process.nextTick is executed before setTimeout and setImmediate in Node.js."
    },
    {
        id: 35,
        question: "What is a JavaScript runtime environment?",
        options: [
            "A place where JavaScript code is written",
            "A browser or Node.js where JavaScript code is executed",
            "A database for JavaScript",
            "A compiler for JavaScript"
        ],
        answer: 1,
        explanation: "A JavaScript runtime environment is where JavaScript code is executed, such as a browser or Node.js."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/question/question.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mocks/questionsMocks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"],
        currentQuestion: null,
        setCurrentQuestion: (id)=>set(()=>({
                    currentQuestion: id
                }))
    }));
const __TURBOPACK__default__export__ = useQuestion;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/question/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/question/question.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/question/question.ts [app-client] (ecmascript) <export default as useQuestion>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuestion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/question/question.ts [app-client] (ecmascript)");
}),
"[project]/store/quiz/selectors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentQuestionSelector",
    ()=>currentQuestionSelector
]);
const currentQuestionSelector = (state)=>{
    if (state.currentQuestion === null) return null;
    return state.questions[state.currentQuestion];
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Question/Question.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const Question = ({ setScore })=>{
    _s();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onSelectOption = (idx)=>{
        setSelectedOption(idx);
    // if (idx === question.answer) {
    //   setScore(1);
    // }
    };
    if (!currentQuestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "No question available"
        }, void 0, false, {
            fileName: "[project]/app/components/Question/Question.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold mb-2",
                children: currentQuestion.question
            }, void 0, false, {
                fileName: "[project]/app/components/Question/Question.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: currentQuestion.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `block w-full text-left p-2 mb-2 border rounded ${selectedOption === idx ? "bg-blue-200" : "bg-white"}`,
                            onClick: ()=>onSelectOption(idx),
                            disabled: selectedOption !== null,
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/app/components/Question/Question.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/app/components/Question/Question.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Question/Question.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Question, "JA8CxE9ZrczvRffCFoauEAbBIYg=");
_c = Question;
const __TURBOPACK__default__export__ = Question;
var _c;
__turbopack_context__.k.register(_c, "Question");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Question/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Question/Question.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Question/Question.tsx [app-client] (ecmascript) <export default as Question>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Question",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Question/Question.tsx [app-client] (ecmascript)");
}),
"[project]/app/components/NextButton/NextButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/store/question/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__ = __turbopack_context__.i("[project]/store/question/question.ts [app-client] (ecmascript) <export default as useQuestion>");
;
var _s = __turbopack_context__.k.signature();
;
const NextButton = ()=>{
    _s();
    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"])({
        "NextButton.useQuestion[questions]": (state)=>state.questions
    }["NextButton.useQuestion[questions]"]);
    const setCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"])({
        "NextButton.useQuestion[setCurrent]": (state)=>state.setCurrentQuestion
    }["NextButton.useQuestion[setCurrent]"]);
    const nextQuestion = ()=>{
    // setSelectedOption(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded",
        onClick: nextQuestion,
        children: "Next"
    }, void 0, false, {
        fileName: "[project]/app/components/NextButton/NextButton.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NextButton, "Oc/rrK+qqU7zJtMXgfBntoI2PzI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"]
    ];
});
_c = NextButton;
const __TURBOPACK__default__export__ = NextButton;
var _c;
__turbopack_context__.k.register(_c, "NextButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/quiz/quiz.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mocks/questionsMocks.ts [app-client] (ecmascript)");
;
;
const useQuiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questions"],
        currentQuestion: 0,
        correctAnswers: 0,
        setCurrentQuestion: (current)=>set(()=>({
                    currentQuestion: current
                })),
        incrementCorrectAnswers: ()=>set((state)=>({
                    correctAnswers: state.correctAnswers + 1
                }))
    }));
const __TURBOPACK__default__export__ = useQuiz;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Quiz/Quiz.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/store/question/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__ = __turbopack_context__.i("[project]/store/question/question.ts [app-client] (ecmascript) <export default as useQuestion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/selectors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/Question/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Question$3e$__ = __turbopack_context__.i("[project]/app/components/Question/Question.tsx [app-client] (ecmascript) <export default as Question>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NextButton$2f$NextButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NextButton/NextButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/quiz.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Quiz() {
    _s();
    // const questions = useQuestion((state) => state.questions);
    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "Quiz.useQuiz[questions]": (state)=>state.questions
    }["Quiz.useQuiz[questions]"]);
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$selectors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentQuestionSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"].getState());
    const setCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"])({
        "Quiz.useQuestion[setCurrent]": (state)=>state.setCurrentQuestion
    }["Quiz.useQuestion[setCurrent]"]);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    console.log("current", current);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Question$3e$__["Question"], {
                setScore: setScore
            }, void 0, false, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NextButton$2f$NextButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Quiz/Quiz.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Quiz, "FpWeBbK+j+0FmsHE2htSqvszt+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$question$2f$question$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useQuestion$3e$__["useQuestion"]
    ];
});
_c = Quiz;
var _c;
__turbopack_context__.k.register(_c, "Quiz");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useStore.useSyncExternalStore[slice]": ()=>selector(api.getInitialState())
    }["useStore.useSyncExternalStore[slice]"], [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
]);

//# sourceMappingURL=_c37576a6._.js.map