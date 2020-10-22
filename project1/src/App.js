import React from 'react'
import ReactDOM from 'react-dom'
import SearchParams from "./SearchParams"
import {Link, Router} from '@reach/router'
import Details from "./Details";
const App = () => {
  // return React.createElement("div", { id: "my-id" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, { name: "PApel", animal: "bird", breed: "Aaa" }),
  //   React.createElement(Pet, { name: "Don", animal: "Cat", breed: "Mixed" }),
  // ]);
  return(
      <div id="my-id">
          <header>
          <Link to="/">
              Adopt me!
          </Link>
          </header>

        {/*<Pet name="Luna" animal="Dog"  breed="Havanna"/>*/}
        {/*<Pet name="Pepper" animal="Bird"  breed="Aaa"/>*/}
        {/*<Pet name="Doink" animal="Cat"  breed="Mixed"/>*/}
        <Router>
            <SearchParams path ="/"/>
            <Details  path = "/details/:id"/>
        </Router>


      </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
