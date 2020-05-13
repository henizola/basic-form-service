import React from  'react';
import { UserContext } from '../../context/context.context';
import './display.styles.scss'
const Display=(props)=>{

return <UserContext.Consumer>
    {
        context=><div className='display'>
                    <h1 className='name'>Hello {context.state.firstname} {context.state.lastname} !</h1>
                     {
                        context.state.origin===''?<h2>We don't know where you are from...</h2>
                        :<h2>You are from {context.state.origin}</h2>
                    }
                    {
                        typeof(context.state.dob)==='number'||context.state.dob===''?<h2>We couldn't understand your birthday...</h2>
                        :<h2>You are - {2020-context.state.dob}</h2>
                    }
                   
                    <button onClick={()=>props.history.push('/')} className='reset'>Reset</button>
        </div>        
    }
</UserContext.Consumer>


}
export default Display;