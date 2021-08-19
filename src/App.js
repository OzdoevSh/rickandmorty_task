import Characters from "./components/Character/Characters";
import Episodes from "./components/Episode/Episodes";
import Locations from "./components/Location/Locations";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss'
import Title from "./components/Title/Title";
import { connect } from "react-redux";
import { getCharacters } from './store/actions/characterActions'



function App() {

  return (
    <div>
      <Router>
        <div>
            <Title/>
            <ul className="navbar">
              <li>
                <Link className="linkClass" to="/">Home</Link>
              </li>
              <li>
                <Link className="linkClass" to="/characters">Characters</Link>
              </li>
              <li>
                <Link className="linkClass" to="/episodes">Episodes</Link>
              </li>
              <li>
                <Link className="linkClass" to="/locations">Locations</Link>
              </li>
            </ul>
        </div>
          <Switch>
            <Route path="/characters">
              <Characters/>
            </Route>
            <Route path="/episodes">
              <Episodes />
            </Route>
            <Route path="/locations">
              <Locations />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({ characters: state.characters })
export default connect(mapStateToProps, {getCharacters})(App)

