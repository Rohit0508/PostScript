import react , {useState} from 'react'
import { NavLink , useNavigate} from 'react-router-dom';
import Login from './login';
import {IoIosPerson} from 'react-icons/io'
import {MdLocationCity} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {RiLockPasswordFill} from 'react-icons/ri'

function Signup(){

    const navigate = useNavigate() ;
    const [user,setUser] = useState({
            name:"",
            email:"",
           
            password:""
            
    });

    let name , value ;

    const handleInputs = (e) => {
        console.log(e) ;

        name = e.target.name ;
        value = e.target.value ;

        setUser({...user , [name]:value});
    };

    const postData = async (e) => {
        e.preventDefault() ;

        const {name, email, password} = user ;

        const res = await fetch("http://localhost:4000/api/v1/signup",{
            method : "POST" ,
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                name, email,  password
            })
        }) ;
        
        const data = await res.json() ;
        console.log(data);
        if(data.success=== false || !data){
            window.alert("Invalid Registration") ;
            console.log("Invalid Registration") ;
        }
        else{
            window.alert("Registration Successful") ;
            console.log("Registration Successful") ;

           navigate('/login') ;
        }
    }
    return (
        <>
       
        <div className='center-card' style={{margin:'10%',width:'60%',margin:'auto',marginTop:'10%',marginBottom:'10%'}}>
                <div className='Contact-2'>
                    <h2 style={{color : 'rgba(31,72,125,1)'}}>
                       Register As New User
                    </h2>

                {/*Signup Form Start*/}

                <form method='POST' id='register-form'>
                <label>Name<span style={{color:'red'}}>*</span></label>
                <br/>
                <IoIosPerson/>
                <input type='text'  autoComplete='off' name='name' id='name'  value={user.name} onChange={handleInputs}></input>
                <br/>
                
                <label>Email<span style={{color:'red'}}>*</span></label>
                <br/>
                <MdEmail/>
                <input type='text'  autoComplete='off' name='email' id='email' value={user.email} onChange={handleInputs}></input>
                <br/>
            
                <label>Password<span style={{color:'red'}}>*</span></label>
                <br/>
                <RiLockPasswordFill/>
                <input type='password'  autoComplete='off' name='password' id='password' value={user.password} onChange={handleInputs}></input>
                
                <br/>
                <button type='Submit' name='signup' id='signup' className='Button-2' value='register' onClick={postData}>Register</button>
                </form>
                <a href='./login' style={{textDecoration:'none',color:'rgba(31,72,125,1)'}}>Already Registered ?</a>
                </div>
            </div>
        
        </>
    );
}

export default Signup ;