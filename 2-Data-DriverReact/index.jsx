 return (
    <h1>Hello {firstName} {lastName}</h1>
  )   
//   when we put curly braces we are like we are writing javascript code we exit jsx and move into JS land

// we can run any jS code we ant inside of curly braces {} even if we are in jsx
// ---->eg:(RUNNING JSX CODE INSIDE OF JSX)
{/* <h1>It is currently about {new Date().getHours() % 12}</h1> */}

// BETTER PRACTICE
  const hours = new Date().getHours() % 12
  
  return (
    <h1>It is currently about {hours}</h1>
  )





  function App() {
    return (
        <div className="contacts">
            <Contact
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}
// we have created props for the Contact component
// with each prop containing the data we want to pass to the component
// we have created 4 instances of our Contact component

// props aer similar to passing attributes to a HTML element




// QUESTION------>Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
//    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
// No, because the JSX we use to describe native DOM elements will
// be turned into REAL DOM elements by React. And real DOM elements
// only have the prooperties/attributes specified in the HTML specification.
// (Which doesn't include properties like `blahblahblah`)



// ----->CONDATIONAL RANDERING :temm i only want to include(render) this part of the component if a certain condition is true(exist)
// To do put curly braces around the code you want to conditionally render
// and then use a ternary operator to check the condition
// FOR RG:   props.setup && 
// /export default function Joke(props) {
//     return (
//         <>
//             {props.setup && <p className="setup">Setup: {props.setup}</p>}
//             <p className="punchline">Punchline: {props.punchline}</p>
//             <hr />
//         </>
//     )
// }



// ------>NON STRING PROPS: we can pass any type of data as props
// for example we can pass a number, boolean, array, object, function etc.
// export default function App() {
//     return (
//         <main>
//             <Joke
//                 punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
//                 upvotes={10}
//                 isPun={true}
//                 comments={[                                array of objects
//                     {author: "", text: "", title: ""},
//                     {author: "", text: "", title: ""}
//                 ]}
//             />



// ----->for passing an obj in component we can use curly braces
//  <Entry
                    // img={{ 
                        // src: "https://scrimba.com/links/travel-journal-japan-image-url",
                        // alt: "Mount Fuji" 
                    // }}
                // />


 




// ------>MAP
const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
//-----> Step-by-step of what name[0].toUpperCase() + name.slice(1) does:
// name[0]: Gets the first letter of the string.

// For "alice" → 'a'

// .toUpperCase(): Makes that first letter capital.

// 'a'.toUpperCase() → 'A'

// name.slice(1): Gets the rest of the string starting from index 1.

// "alice".slice(1) → "lice"

// Then you add them together:

// 'A' + 'lice' → 'Alice'




// IMP:
// React caannont render objects diresctly but can redner the properties of the object
// but can redder jsx emelents that contain the properties of the object
 const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]  
    return (
        <main>
            {ninjaTurtles}
        </main>)
        // This will not give an error but not right way to do as output will be  DonatelloMichaelangeloRafaelLeonardo
        // So the right way to do it is given below (can also do it using MAP)


    //         const ninjaTurtles = [                //rendring jsx elements (right)  ,You are now directly storing JSX elements inside the array
    //     <h2>Donatello</h2>, 
    //     <h2>Michaelangelo</h2>,
    //     <h2>Rafael</h2>,
    //     <h2>Leonardo</h2>
    // ]
    // return (
    //     <main>
    //         {ninjaTurtles}
    //     </main>
    // )







// Pulling data from an external source (we use map to iterate over the data and render it)
    import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <main>
            {jokeElements}
        </main>
    )
}




// You should use .map() when:
//  Hardcoded array
//  Local data.js file
//  Fetched from an API



//Q-------> Critical thinking: why is using `.map()` better than just
//    creating the components manually by typing them out?
//     1. We often don't have the data ahead of time when we're building
//        the app, so we simply can't manually type them out.
//     2. It makes our code more "self-sustaining" - not requiring additional
//        changes to the code whenever the data changes.