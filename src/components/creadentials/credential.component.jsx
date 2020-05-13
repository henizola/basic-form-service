import React from 'react';
import { UserContext } from '../../context/context.context';
import Header from '../header/header.component'


const Cridentials=(props)=>{

    return <UserContext.Consumer>
      {
          context=><div>
            <Header/> 
            <form  onSubmit={(e)=>{e.preventDefault();
                                 
                                    props.history.push('/home')}}>
                 <div className='inputs' >
                 
                  <span className='name'>Type the year of your birthday :</span>
                 <input name='dob' type='text'   
                 onChange={e=>context.setState(e.target.name,e.target.value)}/>
                </div>
                <div className='inputs'>
                  <span className='name'>Type where you are from :</span>
                  <input name='origin' type='text' 
                  onChange={e=>context.setState(e.target.name,e.target.value)}/>
                </div>
                <button>Proceed</button>
              </form>

          </div>
         
      }
                
     </UserContext.Consumer> 
  
}
export default Cridentials;