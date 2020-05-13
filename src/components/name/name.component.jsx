import React from 'react';
import './style.styles.scss'
import { UserContext } from '../../context/context.context';
import Header from '../header/header.component';
const Name=(props)=>{

    return <UserContext.Consumer>
        {
            context=><div>
                    <Header/>
                    <form onSubmit={e=>{
                                         e.preventDefault();
                                         props.history.push('/about')
                                         }}>
                           <div className="inputs">
                                <span className='name'>Type your first name:</span>
                                <input name='firstname' type='text'
                                     onChange={(e)=>context.setState(e.target.name,e.target.value)} />
                             </div>
                            <div className="inputs">
                                <span className='name'>Type your last name:</span>
                                <input name='lastname' type='text' 
                                    onChange={e=>context.setState(e.target.name,e.target.value)} />
                             </div>
                        <button type={"submit"}>Proceed</button>

                        </form>
                </div>
        }
    </UserContext.Consumer>
    
    
       
}
export default Name