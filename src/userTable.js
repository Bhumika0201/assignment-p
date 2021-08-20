import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';


const UserTable = (props) => {
    console.log(props.users)
 
    const [users, setUsers] = React.useState([]);
 
  
    return (
        <div>
           <p className="label">USER TABLE</p>   
             <div  className="grid-container-table" >
               
        <div  className="label" style={{width:150}}>
            Name
        </div>
        <div  className="label" style={{width:200}}>
            Address
        </div>
        <div className="label" style={{width:100}}>
            Occupation
        </div>
        <div className="label" style={{width:100}}>
            DOB
        </div>
    </div><hr/>
    {props.users.map(val=>{return(    <div>   <div  className="grid-container-table" >
                <div style={{width:150,textAlign:'left'}}>
                 {val.name}
                </div>
                <div style={{width:200,textAlign:'left'}}>
                {   val.address}
                </div>
                <div style={{width:100}}>
                {   val.occupation}
                </div>
                <div style={{width:100}}>
                {   val.dob}
                </div>
            </div>
           <hr/></div>

    )
         
    })}
       </div>
    );
}

export default UserTable;