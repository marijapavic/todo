import React, {createContext, useState} from "react"
import {TodoList} from "./TodoList"
import {TodoStore} from "./TodoStore"
import "./App.css"

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light")
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="main" id={theme}>
      <div className="container" >
          <div className="switch-container">
            <p className="toggletext">light</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" onClick={toggleTheme} checked={theme === "dark"} ></span>
            </label>
            <p className="toggletext">dark</p>
          </div>
        <div className="inner">
          <h1 className="header">my to-do list</h1>
          <TodoList todoStore={TodoStore} />
        </div>
      </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App