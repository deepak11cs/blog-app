import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ReadArticle from './components/ReadArticle';
import PublishArticle from './components/PublishArticle';
import UserProfile from './components/UserProfile';
import { Route, Switch } from 'react-router-dom';
import * as actions from './actions';
import { connect } from 'react-redux';

const App = (props) => {

  return (
    <div className="App">

      <Navbar />


      <Switch>
        {props.isLogged && <Route path='/user/:name' component={UserProfile} />}
        {props.isLogged && <Route path='/publish' component={PublishArticle} />}
        <Route path='/article/:id' component={ReadArticle} />
        <Route path='/' component={HomePage} />
      </Switch>

    </div>
  );
}

function mapStateToProps(state){

  return {
    isLogged: (state.auth.token !== '' && state.auth.token !== null)?true:false
}

}

export default connect(mapStateToProps,actions)(App);
