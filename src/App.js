import React from 'react';
import Router from "@/router";
import Header from "@/components/layout/header"


class App extends React.Component{
  render(){
    return (
      <div>
        <Header></Header>
        <Router></Router>
      </div>
    )
  }
}

export default App;
