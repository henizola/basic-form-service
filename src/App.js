import React from 'react';
import Name from './components/name/name.component';
import Cridentials from './components/creadentials/credential.component';
import { Route } from 'react-router-dom';
import { UserProvider } from './context/context.context';
import Display from './components/display/display.component';


const App =()=> <UserProvider>
           <Route exact path='/' component={Name}/>
          <Route exact path='/about' component={Cridentials}/>
          <Route exact path='/home' component={Display}/>
      </UserProvider>


export default App;
