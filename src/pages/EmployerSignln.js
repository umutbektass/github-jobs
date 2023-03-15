import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { getEmployerUsers,loginTrue } from '../redux/users/usersSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";


function EmployerSignln() {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.users.users)
  const [error,setError]=useState("")
  const refreshPage =()=>{
    window.location.reload();
     
     
 }
 const navigate = useNavigate();
  useEffect(()=>{
   dispatch(getEmployerUsers()) 
  },[])
  const loginCheck=async(values)=>{
    const userCheck = users.find(u=>u.email ==values.email)
    if(userCheck){
      if(userCheck.password==values.password){
        setError("giriş başarılı")
        dispatch(loginTrue(userCheck.id))
        navigate("/dashboard")
       refreshPage()
       
        
      }
      else{
       return setError("Hatalı Şifre")
      }
    }
    else{
    return  setError("E-mail adresi kayıtlı değil.")
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password:"",
      confirmPassword:""
    },
    onSubmit: ((values,{resetForm}) => {
      loginCheck(values)
      console.log(values)
      resetForm()
    }),
  });
  return (
    <div className="login">
        <form onSubmit={formik.handleSubmit}>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="E-mail"
       />
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder="Şifre"
         
       />
       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         placeholder="Şifreyi onayla"
        

       />
       <button type="submit" className="btn btn-primary">Giriş Yap</button>
     </form>
    </div>
  )
}

export default EmployerSignln