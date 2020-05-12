import React from 'react';

import './style.styles.scss'

const Name=({handleChange})=>{

    const handlech=(event)=>{
        handleChange(event)
    }

    return <div classsName='form'>
        <span className='name'>Type your first name</span>
      <input name='firstname' type='text' onChange={handlech}/>
      <span className='name'>Type your last name</span>
      <input name='lastname' type='text' onChange={handlech}/>
    </div>
}
export default Name