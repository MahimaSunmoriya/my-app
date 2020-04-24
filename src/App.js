import React,{Component} from 'react';
import Header from './components/headercomponent/header';
import Footer from './components/footercomponent/footer';
import Post from './components/post/post';
import Main from './components/maincontent/main';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class App extends React.Component{
render() {
  return (
    <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/post/:postId" exact component={Post}/>
    </Switch>
    <Footer />
    </Router>

  );
}
}
export default App;
