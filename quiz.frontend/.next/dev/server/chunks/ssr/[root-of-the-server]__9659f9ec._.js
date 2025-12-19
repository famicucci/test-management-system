module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/mocks/questionsMocks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "questionsMocks",
    ()=>questionsMocks
]);
const questionsMocks = [
    {
        id: 1,
        question: "What is JavaScript?",
        options: [
            "A markup language for web pages",
            "A programming language for web development",
            "A database management system",
            "A web browser"
        ],
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 2,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 1,
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
        correctAnswer: 0,
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
        correctAnswer: 2,
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
        correctAnswer: 1,
        explanation: "A JavaScript runtime environment is where JavaScript code is executed, such as a browser or Node.js."
    }
];
}),
"[project]/store/quiz/quiz.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mocks/questionsMocks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
;
const useQuiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questionsMocks"].map((q)=>({
                ...q,
                selectedAnswer: null
            })),
        currentQuestion: 0,
        nextQuestion: ()=>set((state)=>{
                if (state.currentQuestion === null) return {
                    currentQuestion: 0
                };
                return {
                    currentQuestion: state.currentQuestion + 1
                };
            }),
        answerQuestion: (questionId, answeredOptionId)=>set((state)=>({
                    questions: state.questions.map((question)=>question.id === questionId ? {
                            ...question,
                            selectedAnswer: answeredOptionId
                        } : question)
                }))
    })));
const __TURBOPACK__default__export__ = useQuiz;
}),
"[project]/store/quiz/selectors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/components/Question/Question.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/quiz.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/selectors.ts [app-ssr] (ecmascript)");
;
;
;
const Question = ({ setScore })=>{
    const currentQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$selectors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["currentQuestionSelector"]);
    const setSelectedOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.answerQuestion);
    if (!currentQuestion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "No question available"
        }, void 0, false, {
            fileName: "[project]/app/components/Question/Question.tsx",
            lineNumber: 10,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold mb-2",
                children: currentQuestion.question
            }, void 0, false, {
                fileName: "[project]/app/components/Question/Question.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: currentQuestion.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `block w-full text-left p-2 mb-2 border rounded ${currentQuestion.selectedAnswer === idx ? "bg-blue-200" : "bg-white"}`,
                            onClick: ()=>setSelectedOption(currentQuestion.id, idx),
                            disabled: currentQuestion.selectedAnswer !== null,
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/app/components/Question/Question.tsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, idx, false, {
                        fileName: "[project]/app/components/Question/Question.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/components/Question/Question.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Question;
}),
"[project]/app/components/Question/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Question/Question.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/app/components/Question/Question.tsx [app-ssr] (ecmascript) <export default as Question>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Question",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Question/Question.tsx [app-ssr] (ecmascript)");
}),
"[project]/app/components/NextButton/NextButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/quiz.ts [app-ssr] (ecmascript)");
;
;
const NextButton = ()=>{
    const nextQuestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.nextQuestion);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded",
        onClick: nextQuestion,
        children: "Next"
    }, void 0, false, {
        fileName: "[project]/app/components/NextButton/NextButton.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NextButton;
}),
"[project]/app/components/QuestionNumber/QuestionNumber.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/quiz.ts [app-ssr] (ecmascript)");
;
;
const QuestionNumber = ()=>{
    const currentQuestionIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.currentQuestion);
    const totalQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.questions.length);
    if (currentQuestionIndex === null) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            currentQuestionIndex + 1,
            " / ",
            totalQuestions
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/QuestionNumber/QuestionNumber.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = QuestionNumber;
}),
"[project]/app/components/Quiz/Quiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/components/Question/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Question$3e$__ = __turbopack_context__.i("[project]/app/components/Question/Question.tsx [app-ssr] (ecmascript) <export default as Question>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NextButton$2f$NextButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NextButton/NextButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/quiz/quiz.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$QuestionNumber$2f$QuestionNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/QuestionNumber/QuestionNumber.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Quiz() {
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const questions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$quiz$2f$quiz$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.questions);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Question$2f$Question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Question$3e$__["Question"], {
                setScore: setScore
            }, void 0, false, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NextButton$2f$NextButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/Quiz/Quiz.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$QuestionNumber$2f$QuestionNumber$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/Quiz/Quiz.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Quiz/Quiz.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
;
const identity = (arg)=>arg;
function useStore(api, selector = identity) {
    const slice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useSyncExternalStore(api.subscribe, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getState()), [
        api,
        selector
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>selector(api.getInitialState()), [
        api,
        selector
    ]));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createImpl = (createState)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStore = (selector)=>useStore(api, selector);
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
const create = (createState)=>createState ? createImpl(createState) : createImpl;
;
}),
"[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "combine",
    ()=>combine,
    "createJSONStorage",
    ()=>createJSONStorage,
    "devtools",
    ()=>devtools,
    "persist",
    ()=>persist,
    "redux",
    ()=>redux,
    "subscribeWithSelector",
    ()=>subscribeWithSelector,
    "unstable_ssrSafe",
    ()=>ssrSafe
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/zustand/esm/middleware.mjs")}`;
    }
};
const reduxImpl = (reducer, initial)=>(set, _get, api)=>{
        api.dispatch = (action)=>{
            set((state)=>reducer(state, action), false, action);
            return action;
        };
        api.dispatchFromDevtools = true;
        return {
            dispatch: (...args)=>api.dispatch(...args),
            ...initial
        };
    };
const redux = reduxImpl;
const trackedConnections = /* @__PURE__ */ new Map();
const getTrackedConnectionState = (name)=>{
    const api = trackedConnections.get(name);
    if (!api) return {};
    return Object.fromEntries(Object.entries(api.stores).map(([key, api2])=>[
            key,
            api2.getState()
        ]));
};
const extractConnectionInformation = (store, extensionConnector, options)=>{
    if (store === void 0) {
        return {
            type: "untracked",
            connection: extensionConnector.connect(options)
        };
    }
    const existingConnection = trackedConnections.get(options.name);
    if (existingConnection) {
        return {
            type: "tracked",
            store,
            ...existingConnection
        };
    }
    const newConnection = {
        connection: extensionConnector.connect(options),
        stores: {}
    };
    trackedConnections.set(options.name, newConnection);
    return {
        type: "tracked",
        store,
        ...newConnection
    };
};
const removeStoreFromTrackedConnections = (name, store)=>{
    if (store === void 0) return;
    const connectionInfo = trackedConnections.get(name);
    if (!connectionInfo) return;
    delete connectionInfo.stores[store];
    if (Object.keys(connectionInfo.stores).length === 0) {
        trackedConnections.delete(name);
    }
};
const findCallerName = (stack)=>{
    var _a, _b;
    if (!stack) return void 0;
    const traceLines = stack.split("\n");
    const apiSetStateLineIndex = traceLines.findIndex((traceLine)=>traceLine.includes("api.setState"));
    if (apiSetStateLineIndex < 0) return void 0;
    const callerLine = ((_a = traceLines[apiSetStateLineIndex + 1]) == null ? void 0 : _a.trim()) || "";
    return (_b = /.+ (.+) .+/.exec(callerLine)) == null ? void 0 : _b[1];
};
const devtoolsImpl = (fn, devtoolsOptions = {})=>(set, get, api)=>{
        const { enabled, anonymousActionType, store, ...options } = devtoolsOptions;
        let extensionConnector;
        try {
            extensionConnector = (enabled != null ? enabled : (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
        } catch (e) {}
        if (!extensionConnector) {
            return fn(set, get, api);
        }
        const { connection, ...connectionInformation } = extractConnectionInformation(store, extensionConnector, options);
        let isRecording = true;
        api.setState = (state, replace, nameOrAction)=>{
            const r = set(state, replace);
            if (!isRecording) return r;
            const action = nameOrAction === void 0 ? {
                type: anonymousActionType || findCallerName(new Error().stack) || "anonymous"
            } : typeof nameOrAction === "string" ? {
                type: nameOrAction
            } : nameOrAction;
            if (store === void 0) {
                connection == null ? void 0 : connection.send(action, get());
                return r;
            }
            connection == null ? void 0 : connection.send({
                ...action,
                type: `${store}/${action.type}`
            }, {
                ...getTrackedConnectionState(options.name),
                [store]: api.getState()
            });
            return r;
        };
        api.devtools = {
            cleanup: ()=>{
                if (connection && typeof connection.unsubscribe === "function") {
                    connection.unsubscribe();
                }
                removeStoreFromTrackedConnections(options.name, store);
            }
        };
        const setStateFromDevtools = (...a)=>{
            const originalIsRecording = isRecording;
            isRecording = false;
            set(...a);
            isRecording = originalIsRecording;
        };
        const initialState = fn(api.setState, get, api);
        if (connectionInformation.type === "untracked") {
            connection == null ? void 0 : connection.init(initialState);
        } else {
            connectionInformation.stores[connectionInformation.store] = api;
            connection == null ? void 0 : connection.init(Object.fromEntries(Object.entries(connectionInformation.stores).map(([key, store2])=>[
                    key,
                    key === connectionInformation.store ? initialState : store2.getState()
                ])));
        }
        if (api.dispatchFromDevtools && typeof api.dispatch === "function") {
            let didWarnAboutReservedActionType = false;
            const originalDispatch = api.dispatch;
            api.dispatch = (...args)=>{
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && args[0].type === "__setState" && !didWarnAboutReservedActionType) {
                    console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.');
                    didWarnAboutReservedActionType = true;
                }
                originalDispatch(...args);
            };
        }
        connection.subscribe((message)=>{
            var _a;
            switch(message.type){
                case "ACTION":
                    if (typeof message.payload !== "string") {
                        console.error("[zustand devtools middleware] Unsupported action format");
                        return;
                    }
                    return parseJsonThen(message.payload, (action)=>{
                        if (action.type === "__setState") {
                            if (store === void 0) {
                                setStateFromDevtools(action.state);
                                return;
                            }
                            if (Object.keys(action.state).length !== 1) {
                                console.error(`
                    [zustand devtools middleware] Unsupported __setState action format.
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);
                            }
                            const stateFromDevtools = action.state[store];
                            if (stateFromDevtools === void 0 || stateFromDevtools === null) {
                                return;
                            }
                            if (JSON.stringify(api.getState()) !== JSON.stringify(stateFromDevtools)) {
                                setStateFromDevtools(stateFromDevtools);
                            }
                            return;
                        }
                        if (!api.dispatchFromDevtools) return;
                        if (typeof api.dispatch !== "function") return;
                        api.dispatch(action);
                    });
                case "DISPATCH":
                    switch(message.payload.type){
                        case "RESET":
                            setStateFromDevtools(initialState);
                            if (store === void 0) {
                                return connection == null ? void 0 : connection.init(api.getState());
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "COMMIT":
                            if (store === void 0) {
                                connection == null ? void 0 : connection.init(api.getState());
                                return;
                            }
                            return connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                        case "ROLLBACK":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    connection == null ? void 0 : connection.init(api.getState());
                                    return;
                                }
                                setStateFromDevtools(state[store]);
                                connection == null ? void 0 : connection.init(getTrackedConnectionState(options.name));
                            });
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return parseJsonThen(message.state, (state)=>{
                                if (store === void 0) {
                                    setStateFromDevtools(state);
                                    return;
                                }
                                if (JSON.stringify(api.getState()) !== JSON.stringify(state[store])) {
                                    setStateFromDevtools(state[store]);
                                }
                            });
                        case "IMPORT_STATE":
                            {
                                const { nextLiftedState } = message.payload;
                                const lastComputedState = (_a = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _a.state;
                                if (!lastComputedState) return;
                                if (store === void 0) {
                                    setStateFromDevtools(lastComputedState);
                                } else {
                                    setStateFromDevtools(lastComputedState[store]);
                                }
                                connection == null ? void 0 : connection.send(null, // FIXME no-any
                                nextLiftedState);
                                return;
                            }
                        case "PAUSE_RECORDING":
                            return isRecording = !isRecording;
                    }
                    return;
            }
        });
        return initialState;
    };
const devtools = devtoolsImpl;
const parseJsonThen = (stringified, fn)=>{
    let parsed;
    try {
        parsed = JSON.parse(stringified);
    } catch (e) {
        console.error("[zustand devtools middleware] Could not parse the received json", e);
    }
    if (parsed !== void 0) fn(parsed);
};
const subscribeWithSelectorImpl = (fn)=>(set, get, api)=>{
        const origSubscribe = api.subscribe;
        api.subscribe = (selector, optListener, options)=>{
            let listener = selector;
            if (optListener) {
                const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
                let currentSlice = selector(api.getState());
                listener = (state)=>{
                    const nextSlice = selector(state);
                    if (!equalityFn(currentSlice, nextSlice)) {
                        const previousSlice = currentSlice;
                        optListener(currentSlice = nextSlice, previousSlice);
                    }
                };
                if (options == null ? void 0 : options.fireImmediately) {
                    optListener(currentSlice, currentSlice);
                }
            }
            return origSubscribe(listener);
        };
        const initialState = fn(set, get, api);
        return initialState;
    };
const subscribeWithSelector = subscribeWithSelectorImpl;
function combine(initialState, create) {
    return (...args)=>Object.assign({}, initialState, create(...args));
}
function createJSONStorage(getStorage, options) {
    let storage;
    try {
        storage = getStorage();
    } catch (e) {
        return;
    }
    const persistStorage = {
        getItem: (name)=>{
            var _a;
            const parse = (str2)=>{
                if (str2 === null) {
                    return null;
                }
                return JSON.parse(str2, options == null ? void 0 : options.reviver);
            };
            const str = (_a = storage.getItem(name)) != null ? _a : null;
            if (str instanceof Promise) {
                return str.then(parse);
            }
            return parse(str);
        },
        setItem: (name, newValue)=>storage.setItem(name, JSON.stringify(newValue, options == null ? void 0 : options.replacer)),
        removeItem: (name)=>storage.removeItem(name)
    };
    return persistStorage;
}
const toThenable = (fn)=>(input)=>{
        try {
            const result = fn(input);
            if (result instanceof Promise) {
                return result;
            }
            return {
                then (onFulfilled) {
                    return toThenable(onFulfilled)(result);
                },
                catch (_onRejected) {
                    return this;
                }
            };
        } catch (e) {
            return {
                then (_onFulfilled) {
                    return this;
                },
                catch (onRejected) {
                    return toThenable(onRejected)(e);
                }
            };
        }
    };
const persistImpl = (config, baseOptions)=>(set, get, api)=>{
        let options = {
            storage: createJSONStorage(()=>localStorage),
            partialize: (state)=>state,
            version: 0,
            merge: (persistedState, currentState)=>({
                    ...currentState,
                    ...persistedState
                }),
            ...baseOptions
        };
        let hasHydrated = false;
        const hydrationListeners = /* @__PURE__ */ new Set();
        const finishHydrationListeners = /* @__PURE__ */ new Set();
        let storage = options.storage;
        if (!storage) {
            return config((...args)=>{
                console.warn(`[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`);
                set(...args);
            }, get, api);
        }
        const setItem = ()=>{
            const state = options.partialize({
                ...get()
            });
            return storage.setItem(options.name, {
                state,
                version: options.version
            });
        };
        const savedSetState = api.setState;
        api.setState = (state, replace)=>{
            savedSetState(state, replace);
            return setItem();
        };
        const configResult = config((...args)=>{
            set(...args);
            return setItem();
        }, get, api);
        api.getInitialState = ()=>configResult;
        let stateFromStorage;
        const hydrate = ()=>{
            var _a, _b;
            if (!storage) return;
            hasHydrated = false;
            hydrationListeners.forEach((cb)=>{
                var _a2;
                return cb((_a2 = get()) != null ? _a2 : configResult);
            });
            const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
            return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue)=>{
                if (deserializedStorageValue) {
                    if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
                        if (options.migrate) {
                            const migration = options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
                            if (migration instanceof Promise) {
                                return migration.then((result)=>[
                                        true,
                                        result
                                    ]);
                            }
                            return [
                                true,
                                migration
                            ];
                        }
                        console.error(`State loaded from storage couldn't be migrated since no migrate function was provided`);
                    } else {
                        return [
                            false,
                            deserializedStorageValue.state
                        ];
                    }
                }
                return [
                    false,
                    void 0
                ];
            }).then((migrationResult)=>{
                var _a2;
                const [migrated, migratedState] = migrationResult;
                stateFromStorage = options.merge(migratedState, (_a2 = get()) != null ? _a2 : configResult);
                set(stateFromStorage, true);
                if (migrated) {
                    return setItem();
                }
            }).then(()=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
                stateFromStorage = get();
                hasHydrated = true;
                finishHydrationListeners.forEach((cb)=>cb(stateFromStorage));
            }).catch((e)=>{
                postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
            });
        };
        api.persist = {
            setOptions: (newOptions)=>{
                options = {
                    ...options,
                    ...newOptions
                };
                if (newOptions.storage) {
                    storage = newOptions.storage;
                }
            },
            clearStorage: ()=>{
                storage == null ? void 0 : storage.removeItem(options.name);
            },
            getOptions: ()=>options,
            rehydrate: ()=>hydrate(),
            hasHydrated: ()=>hasHydrated,
            onHydrate: (cb)=>{
                hydrationListeners.add(cb);
                return ()=>{
                    hydrationListeners.delete(cb);
                };
            },
            onFinishHydration: (cb)=>{
                finishHydrationListeners.add(cb);
                return ()=>{
                    finishHydrationListeners.delete(cb);
                };
            }
        };
        if (!options.skipHydration) {
            hydrate();
        }
        return stateFromStorage || configResult;
    };
const persist = persistImpl;
function ssrSafe(config, isSSR = ("TURBOPACK compile-time value", "undefined") === "undefined") {
    return (set, get, api)=>{
        if (!isSSR) {
            return config(set, get, api);
        }
        const ssrSet = ()=>{
            throw new Error("Cannot set state of Zustand store in SSR");
        };
        api.setState = ssrSet;
        return config(ssrSet, get, api);
    };
}
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9659f9ec._.js.map