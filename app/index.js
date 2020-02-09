import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Popular from './components/popular/popular'

class App extends React.Component {
  render() {
    return (
      <div className= 'container'>
        <Popular/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
