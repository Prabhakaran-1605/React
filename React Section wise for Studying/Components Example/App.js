/* Components are classified into two types

1. Functional Components 
2. Class Components */


// Class Components                                 

import React from "react"
import Klaus from "./Components/Klaus"
import Elijah from "./Components/Elijah"

// While using class component we need to import react from react dependency or Package

// Because react dependency or package have inbuilt class components which contain one constructor and many methods

// One of the method is render(), we use this render() - method by overriding it to return User Interface code. 

// Inheritance concept is used to fetch data from parent class Which is React.Component to child Class which is App.

class App extends React.Component {
  render() {
    return <div>
      <hr/>
      <h1> Web Series </h1>
      <hr/>
      <h2> The Originals </h2>
      <hr/>
      <p> The Originals is an American fantasy supernatural drama television series 
        that began airing on The CW on October 3, 2013. It is a spin-off of The Vampire Diaries
        and the first television series expansion of the franchise based on its parent series.
        The series follows vampire-werewolf hybrid Klaus Mikaelson as he and his family become embroiled
        in the supernatural politics of the French Quarter of New Orleans.</p>
        <hr/>
        <Klaus/>
        <hr/>
        <Elijah/>
        <hr/>
    </div>

  }
}
export default App