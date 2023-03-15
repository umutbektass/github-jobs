import React from 'react'
import { FaGlobeEurope } from 'react-icons/fa';
import '../style.css'
import { useFormik ,Field,Formik,Form} from 'formik';

function Filters() {
    
        const formik = useFormik({
            initialValues:{
                time:"",
                search:"",
                country:"",
                color:[]
            },
            onSubmit:values=>{
                console.log(values)
            }
        })
    
  return (
    <div className="filters">
    <Formik
      initialValues={{
        time:[],
        country:"",
        search:""
        
      }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
    {({ values }) => (
        <Form>  
            <div className="filters">
             <div className="form-control">   <label>
            <Field type="checkbox" value="full" name="time" className="form-check-input"></Field>Full Time</label></div>
           <div className="form-control"><label><Field type="checkbox" value="part" name="time" className="form-check-input"></Field>Part Time</label> </div> 
            <div><label><Field type="checkbox" value="remote" name="time" className="form-check-input"></Field>Remote</label></div> 
            <div className="search">
                <label>LOCATION</label>
                <Field type="text" name="search" placeholder="City,state,zip code or country"></Field>
            </div>

            <div className="country">
            <div>   <label>
            <Field type="radio" value="istanbul" name="country" className="form-check-input"></Field>İstanbul</label></div>
           <div><label><Field type="radio" value="kastamonu" name="country" className="form-check-input"></Field>Kastamonu</label> </div> 
            <div><label><Field type="radio" value="karabuk" name="country" className="form-check-input"></Field>Karabük</label>
            </div>
            <div><label><Field type="radio" value="hatay" name="country" className="form-check-input"></Field>Hatay</label>
            </div>
            </div>

            <button className="btn btn-primary " type="submit">Uygula</button></div>
        
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default Filters