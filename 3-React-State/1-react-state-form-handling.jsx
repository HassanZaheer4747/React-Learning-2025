// ------>EVENT LISTNER:
onclick="handleClick()"
// we will use this onclick="handleClick()" inplace of in React
someElement.addEventListener("click", function() {}) 



// ------->Different Hover Options in React<-------
{/* <div
  onClick={e => console.log('onClick')}
  onMouseEnter={e => console.log('onMouseEnter')}
  onMouseOver={e => console.log('onMouseOver')}
  onMouseDown={e => console.log('onMouseDown')}
  onMouseUp={e => console.log('onMouseUp')}
  onMouseLeave={e => console.log('onMouseLeave')}
/> */}
// <input
//   onKeyDown={e => console.log('onKeyDown')}
//   onKeyUp={e => console.log('onKeyUp')}
// />\





// ----->In modern react we dont want our page to refresh whenever we submit a form
// So we pass an event in handelsumbmit fun and do   "event.preventDefault()"
 function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!")
    }
    




    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
// --------------HandleSubmit in React when form is submitted----------------
  function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients) 
    }    
// ----->EXPLANATION OF FORM DATA IN REACT<-------
<form>
  <input name="ingredient" value="Garlic" />
</form>
// Now when you submit the form:
const formData = new FormData(event.currentTarget); 
// Grabs the entire <form>

const newIngredient = formData.get("ingredient");
// Looks inside formData and grabs the value of input with name="ingredient"
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )





    // -----------STATE IN REACT<-----------
    // STATE is used in react to store data that can change over time(by click of buttton or any other event)
    // It allows us to create dynamic and interactive components
    export default function App() {
    let state = "Yes"
    
    function handleClick() {
        state = "Heck yes"
    }
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{state}</button>
        </main>
    )
}
// it will not yes to heck yes because we are not using state in React
// To make it work we need to use useState hook in React


import React from "react"
export default function App() {
    const result = React.useState("Yes")
    console.log(result)
    return (
        <main>
            <h1 className="title">Is sta te important to know?</h1>
            <button className="value">{result[0]}</button>
        </main>
    )
}
// when we use react STATE we are returning the array with two elements
// 1st element is the current state value and 2nd element is a function to update the state
// so thats why we are using result[0] to get the current state value

// ------------------>BETTER WAY TO USE STATE IN REACT<----------------
export default function App() {
    const [result, func] = React.useState("Yes")
    console.log(result) 
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result}</button>
        </main>
    )
}

// ------State FInal(chANGING ON ONCLICK) -----------
export default function App() {
    let [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick() {
        setIsImportant("Heck yes")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}

//----- Array DEstructuring ----(concept for State in React)-----
const arr = ["apple", "banana", "cherry"];
const [first, second, third] = arr;
console.log(first, second, third); // apple banana cherry
// So we can use array destructuring to get the current state value and the function to update the state


// state example (for subtractig and adding the count variable)
export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(count + 1)
    }

    function subtract() {
        setCount(count - 1)
    }
}


// ----->State Example with Callback Function[VERY RERELY USED]<-------
// can use callback function to update the state
//if we need old value of the state to update the new value of the state
    // TO see if we wanna use callback function or not we just see if we need the previous state value to update the new state value
   function add() {
        setCount(function(oldValue) {
            return oldValue + 1
        })
   }
// modified form of above function using arrow function
   function add() {
        setCount(prevCount=> prevCount + 1)
        setCount(prevCount=> prevCount + 1)         //add fun will add 3 times
        setCount(prevCount=> prevCount + 1)          //as it will remember the previous state value
    } 

    function subtract() {
        setCount(count - 1)                        //sun fun will subtract one time 
        setCount(count - 1)                         //as it will not remember the previous state value
        setCount(count - 1) 
    }



    // ---------Ternary Operator in React<-----------
       const isGoingOut = true
    const answer = isGoingOut ? "Yes" : "No"


    // when we want to get new array in react(when using state) we dont just .push or do something like that as it modifie that
    // that array we use state SET_FUN and and do something like we havve done beneth

//  setMyFavoriteThings(prevFavThings => [...prevFavThings, <new item here>])
// it will create a new array with the previous favorite things and the new item added to it




// This line of code:
// const formData = new FormData(event.currentTarget)
// const newIngredient = formData.get("ingredient")
// is used to extract the value the user typed into the <input> field of the form when they submitted it.





  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
      </form>
    </section>
  )
//   used to create a form with an input field for email  
//   to associate email(label) with input field we use htmlFor attribute in label and id attribute in input field
//   this way when user clicks on label it will focus on input field

//   another Way to do the same thing is:
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label>Email:
          <input type="email" name="email" placeholder="joe@schmoe.com" />
        </label>
      </form>
    </section>
  )    //      Not preferd css styling become comparitavely difficult in this way


//   <br />       :for moving tag to new line





// -----------Function to handle form submission in React<-----------
// This function will be called when the form is submitted
  function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const email = formData.get("email")
    // Submit the info to a backend
    formEl.reset()
  }
  
//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action="phpfile.php" onSubmit={handleSubmit} method="post">
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />



// ------------FormData in React<-----------(Way to do same above thing but in little more DECLARATIVE way)
// we can pass fun(signUp) to the form's action attribute then formData can be directly 
// accesed in parameter of function  and we can use it to get the value of email input field
// and we dont need to write these lines:    event.preventDefault()
//                                           const formEl = event.currentTarget
//                                           const formData = new FormData(formEl)
  function signUp(formData) {
    const email = formData.get("email")
    console.log(email)
  }
  
//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp} >
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
//         <br />
//         )




// -------------------INput Types in React<----------------------

1- <textarea></textarea>
//  textarea type of input(like input) but intended for longer text

2-Radio/
<fieldset>
          <label>
            <input type="radio" name="employmentStatus" />
            Label text
        </label>
          <label>
            <input type="radio" name="employmentStatus" />
            Label text
        </label>
          <label>
            <input type="radio" name="employmentStatus" />
            Label text
        </label>
        </fieldset>
        // Semantic to wrap the radio inputs in a <fieldset> element
        // The <legend> gives a label to the entire fieldset.

        // we need to give value to each radio that we will get in the formData
        // if we do form data.get("employmentStatus") it will return the NULL or on without "value attribute" set
        // put
        // defaultChecked={true}    to set the default radio button checked

        3-checkbox
        // Same like radio button but we can have multiple boxes checked at the same time 
        // just do formdataGetall("checkboxName") to get all the checked boxes 

        4-Selection
        //      <label htmlFor="favColor">What is your favorite color?</label>
        // <select id="favColor" name="favColor" defaultValue="">               default value is emty string and this """"<option value="" disabled>-- Choose a color --</option>"""" has emty string so will show this as dfault value
        //    <option value="" disabled>-- Choose a color --</option>
        //   <option value="red">Red</option>
        //   <option value="orange">Orange</option>
        //   <option value="yellow">Yellow</option>
        //   <option value="green">Green</option>
        //   <option value="blue">Blue</option>
        //   <option value="indigo">Indigo</option>
        //   <option value="violet">Violet</option>
        // </select>





        // __________ TO GET ALL THE FORM DATA IN REACT<-----------
        // usefull when want all the data from the form so it will return an on=bject containing all the form data
        // we can use Object.fromEntries(formData) to convert the formData to an object
          function signUp(formData) {
    console.log(Object.fromEntries(formData))
  }




//   but there is issue with this approach
//   if we have multiple inputs with same name then it will only return the last input value
// To fix this we get all values of array of an object by ...data and then we join the checkbox data with a comma
// so we can do something like this:
  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const dietaryData = formData.getAll("dietaryRestrictions")
    console.log(dietaryData)
    const allData = {
      ...data,
      dietaryRestrictions: dietaryData    //previously we were getting only one cekbox value(dietaryRestrictions) so we reaplce that with new object containing all the checkboxesvalues(dietaryData) 
    }}
