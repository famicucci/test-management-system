module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/mocks/questionsMocks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
}),
"[project]/app/components/Quiz/Quiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mocks/questionsMocks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Quiz() {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleOptionClick = (idx)=>{
        setSelected(idx);
        if (idx === __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"][current].answer) {
            setScore(score + 1);
        }
    };
    const nextQuestion = ()=>{
        setSelected(null);
        setCurrent(current + 1);
    };
    if (current >= __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Your score: ",
                score,
                " / ",
                __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Quiz/Quiz.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-md mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-bold mb-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"][current].question
            }, void 0, false, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$mocks$2f$questionsMocks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"][current].options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `block w-full text-left p-2 mb-2 border rounded ${selected === idx ? "bg-blue-200" : "bg-white"}`,
                            onClick: ()=>handleOptionClick(idx),
                            disabled: selected !== null,
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/app/components/Quiz/Quiz.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/app/components/Quiz/Quiz.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            selected !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded",
                onClick: nextQuestion,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/app/components/Quiz/Quiz.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Quiz/Quiz.tsx",
        lineNumber: 31,
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61b57cb2._.js.map