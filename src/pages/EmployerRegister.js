import React from 'react'
import { Field, Form, Formik, FormikProps } from 'formik';
import '../style.css'

function EmployerRegister() {
  return (
    <div className="register">
      <Formik
       initialValues={{adSoyad:"",telefon:"",sirketAdi:"",vergiNo:"" }}
       onSubmit={(values, actions) => {
         console.log(values)
       }}
     >
       {(props) => (
         <Form>
          <div>
            <h2>Hemen Kaydolun!</h2>
            <Field type="email" name="adSoyad" placeholder="Ad Soyad" />
          </div>
          <div>
          <Field type="text" name="telefon" placeholder="Telefon" />
          </div>
          <div>
          <Field type="text" name="sirketAdi" placeholder="Şirket Adı" />
          </div>
          <div>
          <Field type="text" name="vergiNo" placeholder="Vergi Numarası" />
          </div>
          <button type="submit" className="btn btn-primary">Kayıt Ol</button>
          

           {/* <Field type="email" name="email" placeholder="Email" />
           <Field as="select" name="color">
             <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
           </Field>
           <Field name="lastName" placeholder="Doe"/> */}
           
         </Form>
       )}
     </Formik>
        
    </div>
  )
}

export default EmployerRegister