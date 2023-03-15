import React from 'react'
import { Field, Form, Formik, } from 'formik';
import { addEmployerUsers } from '../redux/users/usersSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

function EmployerRegister() {
  const refreshPage = ()=>{
    window.location.reload();
 }

  const formik = useFormik({
    initialValues: {
      adSoyad:"",email:"",telefon:"",sirketAdi:"",vergiNo:"",password:"",confirmPassword:""
    },
    onSubmit: ((values,{resetForm}) => {
      setTimeout(() => dispatch(addEmployerUsers(values)),alert("Baraşıyla Kayıt oldunuz."), 2000)
      console.log(values)
      resetForm()
    }),
  });
  const dispatch = useDispatch;
  return (
    <div className="register">
     <form onSubmit={formik.handleSubmit}>
     <input
         id="adSoyad"
         name="adSoyad"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.adSoyad}
         placeholder="Ad Soyad"
       />
       <input
         id="sirketAdi"
         name="sirketAdi"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.sirketAdi}
         placeholder="Şirket Adı"
       />
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="E-mail"
       />
       <input
         id="telefon"
         name="telefon"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.telefon}
         placeholder="Telefon no"
       />
        <input
         id="vergiNo"
         name="vergiNo"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.vergiNo}
         placeholder="Vergi no"
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

export default EmployerRegister