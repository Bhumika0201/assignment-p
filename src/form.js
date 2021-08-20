import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import UserTable from './userTable'


const Form = () => {
    const [name, setName] = React.useState('')
    const [occupation, setOccupation] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [dob, setDob] = React.useState('')
    const [formErrors, setFormErrors] = React.useState([]);
    const [users, setUsers] = React.useState([]);


    function mySubmitHandler(event) {
  
        event.preventDefault();
        setFormErrors([])
        if(name===''){
            console.log('here')
            let error = {
                name:'name',
                message:'Name Cannot be Empty'
            }
            setFormErrors(formErrors => [...formErrors, error])
            console.log(formErrors)

           
        }
         if(address===''){
            let error = {
                name:'address',
                message:'Address Cannot be Empty'
            }
            setFormErrors(formErrors => [...formErrors, error])
        }
         if(dob===''){
            let error = {
                name:'dob',
                message:'Date Of Birth Cannot be Empty'
            }
            setFormErrors(formErrors => [...formErrors, error])
        }
       
         if(new Date(dob) > new Date()){
            let error = {
                name:'dob',
                message:'Date Of Birth Cannot be greater than today'
            }
            setFormErrors(formErrors => [...formErrors, error])
        }
         if(occupation===''){
            let error = {
                name:'occupation',
                message:'Occupation Cannot be Empty'
            }
            setFormErrors(formErrors => [...formErrors, error])
        }
        else if(formErrors.length===0){
            console.log(formErrors)
            let value ={
                name:name,
                occupation:occupation,
                address:address,
                dob:dob
            }
            setUsers(users => [...users, value])
        }
    }
    return (
        <div className="App" style={{ flexDirection: 'row',  display: 'flex'}}>
            <form style={{ 
                width: '30%', flexDirection: 'column', border: 'solid', borderColor: 'rgb(213 209 209)', padding: 30, margin: 40
            }} onSubmit={mySubmitHandler}>
                <div className="grid-container">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="name"  className="grid-item" name="name"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                </div>
                <div className="panel">
                    {formErrors.map(val =>{
                        if(val.name==='name'){
                            return(val.message)
                        }

                    })}
        </div>
                <div className="grid-container">
                    <label className="label" htmlFor="address">Address</label>
                    <textarea type="address"  className="grid-item" name="address"
                        placeholder="Address"
                        value={address}
                        onChange={e => setAddress(e.target.value)} />

                </div>
                <div className="panel">
                    {formErrors.map(val =>{
                        if(val.name==='address'){
                            return(val.message)
                        }

                    })}
        </div>
                <div className="grid-container">
                    <label className="label" htmlFor="occcupation">Occupation</label>
                    <select className="grid-item"  name="occupation"
                        placeholder="occupation"
                        value={occupation}
                        onChange={e => setOccupation(e.target.value)}>
                        <option value="">Please choose</option>
                        <option value="Salaried">Salaried</option>
                        <option value="Government">Government</option>
                        <option value="Other">Other</option>
                    </select>

                </div>
                <div className="panel">
                    {formErrors.map(val =>{
                        if(val.name==='occupation'){
                            return(val.message)
                        }

                    })}
        </div>
                <div className="grid-container">
                    <label className="label" htmlFor="dob">DOB</label>
                    <input className="grid-item" name="dob" type="date"
                        placeholder="dob"
                        value={dob}
                        onChange={e => setDob(e.target.value)} />

                </div>
                <div className="panel">
                    {formErrors.map(val =>{
                        if(val.name==='dob'){
                            return(val.message)
                        }

                    })}
        </div>
                
                <button type="submit" style={{ textAlign: 'center' }}>ADD USER</button>
            </form>
            <div style={{  
                width: '70%', flexDirection: 'column', border: 'solid', borderColor: 'rgb(213 209 209)', padding: 30, margin: 40
            }}>
            {users.length!==0?<UserTable users={users}/>:<p>No users present please add users</p>}
            </div>

        </div>
    );
}

export default Form;