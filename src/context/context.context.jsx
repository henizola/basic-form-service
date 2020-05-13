import React,{createContext} from 'react';

export const UserContext=createContext();


export class UserProvider extends React.Component{

    constructor(props){
        super(props);
        this.state={
          firstname:'',
          lastname:'',
          dob:'',
          origin:''
        }
      }


      handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
        console.log(name,value)
      }

      
      render(){
          return <UserContext.Provider  value={{
                     state:this.state,
                     setState:(name,value)=>this.setState({
                     [name]:value})
                             }}>
                {
                    this.props.children
                }
          </UserContext.Provider>
      }



} 