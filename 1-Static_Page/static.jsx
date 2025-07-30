import createRoot from 'react-dom/client';
const root=createRoot(document.getElementById('root'));
root.render(<h1>Hello World,, in React</h1>);


// ______CAN WRITE LIKE THIS______
// import ReactDOM from "react-dom/client"
// ReactDOM.createRoot(document.querySelector("#root")).render(<p>Hello from the ReactDOM</p>);


// ----->Step-by-step Explanation :
// import { createRoot } from 'react-dom/client';
// This brings in a function from React that lets us "control" part of the webpage (the #root div).

// document.getElementById('root')
// Finds the <div id="root"></div> in your HTML.

// createRoot(...)
// React takes control of the #root div.

// root.render(<h1>Hello, React</h1>)
// React renders this JSX code (<h1>Hello, React</h1>) inside the root div. JSX looks like HTML, but it’s actually JavaScript!


// Older days React code used to look like this:
import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root2 = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, "Hello from createElement!")

console.log(reactElement)

root.render(
    reactElement
)


// --->JSX:
// JSX is a syntax (like HTML inside JS) that you use within React to describe what the UI should look like.
// JSX is not required to use React — but it's heavily used because it makes writing components much easier.



import { createRoot } from "react-dom/client"

const root3 = createRoot(document.getElementById("root"))
const reactElement3 = <h1>Hello from JSX!</h1>

console.log(reactElement)

root.render(
    reactElement
)
// JSX(a syntax extension for writing HTML in JavaScript).(in back same createElement is happening it is just sugar coting on top to make syntax easier) is a syntax extension for JavaScript that looks similar to HTML.
// It allows you to write HTML-like code directly in your JavaScript files, making it easier




/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 * 
 * Afterward, render it on the line below MyAwesomeNavbar
 */

function MainContent() {
    return <h1>React is great!</h1>
}

root.render(
    <div>
        <MyAwesomeNavbar />
        <MainContent />
    </div>
)
// Composability in React?
// Composability means building small, reusable components and combining them to create complex UIs — like building with Lego bricks 
 



// DECLARATIVE CODING EXAMPLE(Using React):
// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.   
*/
// IMPERATIVE CODING EXAMPLE(not using React):
// This is how you would do it without React, using plain JavaScript to manipulate the DOM
const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header" 
document.getElementById("root").appendChild(h1) 




import { createElement } from "react"
import { createRoot } from "react-dom/client"
const root4= createRoot(document.getElementById("root"))
root.render(
    <main>
        <img src="react-logo.png" />
        <h1>This is another element</h1>
    </main>
)
// To add an image in React, you can use the <img> tag just like in HTML.
// but to render two tags at the same time put them inside parent tag like <main> or <div> or <section> etc.




// ---------> What does it mean for something to be "declarative" instead of "imperative"?
// *Imperative* means we need to give specific step-by-step instructions on how to
// accomplish a task.
// *Declarative* means we can write our code to simply "describe" *what* should show up
// on the page and allow the rool (React, e.g.) to handle the details on *how* to 
// put those things on the page.

// --------->  What does it mean for something to be "composable"? 
// We have small pieces that we can put together to make something
// larger or greater than the individual pieces themselves.



// ------> What is a React component?
// A function that returns React elements. (UI)

// -------> What's wrong with this code?
// ```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

// root.render(<Header/>)
//  creates an instance of the Header component
// which under the hood calls our component 
// then returns the header element with image inside it
// which then compile down to javascript object
// which then react interprets as real elements in DOM










