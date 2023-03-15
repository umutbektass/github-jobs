import React, { useEffect, useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { useFormik,Field,Form,Formik ,FormikProps ,FieldArray } from 'formik';
import axios from 'axios';
import { addPost } from '../redux/post/postSlice';
import { useru}  from '../redux/users/usersSlice';
import { useSelector } from 'react-redux';

function Dashboard() {
  const usersList = useSelector(state=>state.users.users)
  console.log(usersList)
  const search=""
  const [ilListesi,setİlListesi]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3002/illistesi").then(res=>setİlListesi(res.data))
    
  },[])
  console.log(useru)
    
  return (
    <div className="dashboard">
    
      <button className="btn btn-primary ms-5 my-2 mt-5" id="search-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">İş ilanı ekle</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">İş İlanı Ekle</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Formik
       initialValues={{location:[],time:[],ustbilgi:"",baslik:"",aciklama:"",tecrube:"",userId:localStorage.getItem("userId")}}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
           addPost(values)
         }, 1000);
       }}
     >
       {props => (
        
        



         <form onSubmit={props.handleSubmit}>      
          <div class="form-floating mb-3 w-100 ">
        <input class="form-control w-100 fs-4"  placeholder="İlan başlığı"
        id="baslik"
        name="baslik"
        type="text"
        onChange={props.handleChange}
        value={props.values.baslik}
        ></input>
        <label for="floatingInput" className="lh-base fs-5 fst-normal">Başlık</label>
        </div>


           {/* <Field type="email" name="email" placeholder="Email" /> */}
           <div className="location-list">
            <div className="ilkeleman">
           <Field as="select" name="color"
           onChange={props.handleChange}
           onBlur={props.handleBlur}
           value={props.values.color}
            className="location-select">
             <option value="red">Lütfen İl Seçiniz.</option>
             {
              ilListesi.map(u=>(
                  <option value={u}>{u}</option>
              ))
             }
             
             
           </Field>
           
           </div>


           
           <div className="my-4">
           <FieldArray name="location">
            {({insert,remove,push})=>(
              
             <>
             <button className="btn btn-primary"
                   onClick={()=>props.values.location.indexOf(props.values.color) >= 0 ? null : 
                    push(props.values.color) } 
                  type="button">Ekle</button> 
                  <div className="lokasyon-main">
                  {                                       
                    props.values.location &&
                    props.values.location.map((location,index)=>(                                           
                      <div className="location-select-list">
                      <div class="card m-1">
                        <div className="card-body p-2">
                      <a className="" onClick={()=>remove(index)} role="button">X</a> 
                      <span class="fs-4">{location}</span>
                      </div>
                      </div>
                       
                      </div>                                          
                    )
                    )                    
                  }
                  </div>
                   {/* <button className="btn btn-primary"
                   onClick={()=>props.values.location.indexOf(props.values.color) >= 0 ? null : 
                    push(props.values.color) } 
                  type="button">Ekle</button>  */}
             </>
            )}
             
            </FieldArray> 
            </div>    
            </div>
            <div className="time-select">   
      <div>
        <label>
            <Field type="checkbox" value="full" name="time" className="form-check-input"></Field>Full Time</label></div>
           <div><label><Field type="checkbox" value="part" name="time" className="form-check-input"></Field>Part Time</label> </div> 
            <div><label><Field type="checkbox" value="remote" name="time" className="form-check-input"></Field>Remote</label>
            </div> 
            </div>
            <div class="form-floating w-100">
  <textarea class="form-control" placeholder="Leave a comment here"  style={{height:"6rem"}}
   id="ustbilgi"
   name="ustbilgi"
   type="text"
   onChange={props.handleChange}
   value={props.values.ustbilgi}
  ></textarea>
  <label for="floatingTextarea2" style={{fontSize:"1.2rem"}}>Üst bilgi</label>

</div>

<div class="form-floating w-100 my-2">
  <textarea class="form-control" placeholder="Leave a comment here"  style={{height:"8rem"}}
   id="aciklama"
   name="aciklama"
   type="text"
   onChange={props.handleChange}
   value={props.values.aciklama}
  ></textarea>
  <label for="floatingTextarea2" style={{fontSize:"1.2rem"}}>İlan Açıklaması</label>

</div>
<Field as="select" name="tecrube"
           onChange={props.handleChange}
           onBlur={props.handleBlur}
           value={props.values.tecrube}
            className="fs-4">
             <option >Lütfen Tecrübe seçiniz</option>
             <option value="tecrubeli / tecrubesiz" >Tecrubeli / Tecrübesiz</option>
             <option value="0-1" >0-1 yıl </option>
             <option value="+2" >+2 yıl </option>
             <option value="3-5" >3-5 yıl </option>

             
             
             
           </Field>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary fs-5 p-2" data-bs-dismiss="modal">Kapat</button>
        <button type="submit" class="btn btn-primary fs-5 p-2">Kaydet</button>
        
        
      </div>



      
                    
      
      </form>
       )}
             
             </Formik>
     
        </div>
    </div>
  </div>
</div>
    
      
      <div className="card my-2 mx-5">
      <p className="card-footer text-start px-5 fw-light" style={{fontSize:"2.1rem"}}>İş ilanları</p> 
                <div class="card-body">
                  <div className="card-title">
                  <p className="mx-4">İş ilanı : </p>
                  <div className="search"> 
                  <p className="mx-2">Ara : </p>
                  <input></input>
                  </div>


                  </div>

<table id="customers">
  <thead>
  <tr className="bg-primary">
    <th>Başlık</th>
    <th>Açıklama</th>
    <th>Lokasyon</th>
    <th>Kategori</th>
    <th>Tecrübe</th>
  </tr>
  </thead>
  <tr>
    <td data-label="Başlık">Alfreds Futterkiste</td>
    <td data-label="Açıklama">Maria Anders</td>
    <td data-label="Lokasyon">Germany</td>
    <td data-label="Kategori">Maria Anders</td>
    <td data-label="Tecrübe">Germanuuuuuuuuuuuuuuuywqgqwgqwqwe</td>
  </tr>
  <tr>
    <td data-label="Başlık">Alfreds Futterkiste</td>
    <td data-label="Açıklama">Maria Anders</td>
    <td data-label="Lokasyon">Germany</td>
    <td data-label="Kategori">Maria Anders</td>
    <td data-label="Tecrübe">Germanuuuuuuuuuuuuuuuywqgqwgqwqwe</td>
  </tr>
  {/* <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
    <td>Maria Andersawgawdawdawfawfasefsefalkfnakjenfawjdalkwjalkdnmamnfaf</td>
    <td>Germ</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr> */}
</table>
</div>
</div>
    </div>
 
  )

}


export default Dashboard