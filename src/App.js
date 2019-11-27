import React from 'react';
import './App.css';
import Header from './component/header.jsx'
import Homepage from './component/homepage.jsx';
import Notfound from './pages/notfound.jsx'
import {Route,Switch} from 'react-router-dom'

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
        <section className='section1'>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/notfound' component={Notfound}/>
            <Route path='/*' component={Notfound}/>
          </Switch>
        </section>
      </div>
    );
  }
}
 
export default App;