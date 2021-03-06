import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Topbar from './component/Topbar/Topbar';
import Home from './component/Pages/Home/Home';
import SingleBlogPost from './component/Pages/SingleBlogPost/SingleBlogPost';
import WriteBlogs from './component/Pages/WriteBlogs/WriteBlogs';
import Settings from './component/Pages/Settings/Settings';
import Login from './component/Pages/Login/Login';
import { useContext } from 'react';
import { Context } from './context/Context';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Router>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            {user ? <Home /> : <Login />}
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/write">
            {user ? <WriteBlogs /> : <Login />}
          </Route>

          <Route path="/settings">
            {user ? <Settings /> : <Login />}
          </Route>

          <Route path="/post/:postId">
            <SingleBlogPost />
          </Route>

          <Route path="*">
            {/* <NotFound /> */}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
