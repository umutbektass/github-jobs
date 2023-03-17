import React, { useEffect } from 'react'
import Filters from './Filters'
import {DropdownItem} from 'reactstrap'
import { FaGlobeEurope } from 'react-icons/fa';
import jobs from '../api/post.json'
import { getPost, post} from '../redux/post/postSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { Link,useParams } from 'react-router-dom';


function Main() {
  const postList = useSelector(post)
  const postFull = useSelector(state=>state.post.post)
  console.log(postFull)
  const dispatch = useDispatch()

  let storageUser =JSON.parse(localStorage.getItem("userId"))
    let storageUserId = storageUser.id
    let storageUserName = storageUser.sirketAdi
    let sonuc = storageUserName.split(" ")
    let sonuc1 = sonuc.join("-")
    console.log(sonuc1)
   
  useEffect(()=>{
    dispatch(getPost())
  },[])

  const umut=(u)=>{
    let storageUserId = u.userId
    let storageUserName = u.userName
    let baslik = u.baslik
    let sonuc = storageUserName.split(" ")
    let sonuc1 = sonuc.join("-")
    let sonuc2 = baslik.split(" ")
    let sonuc3 = sonuc2.join("-")
    let sonuc5= `/is-ilani/${sonuc1}-${sonuc3.toLowerCase()}-${u.id}`

    return sonuc5
  }
  return (
    <div>
        <main>
      <div className="flex-items">
        <div className="column-1">
          
            <Filters></Filters>
          
        </div>
        <div className="column-2">
         
          {
             postFull.map(u=>(
              
            
              // {umut(u)/:u.id}
                  // {umut(u)}
                  // "/is-ilani/umut"
              <Link to={umut(u)} style={{textDecoration:"none"}}>
              <div className="card">
              
                
            <div className="jobs" style={{textDecoration:"none"}}>
              <h5>{u.userName.toUpperCase()}</h5>
              <h2>{u.baslik}</h2>
              <div className="card-down">
              <div className="jobs-time">
              
              {
                
                u.zaman.map(time=>(
                  
                  <span>{time}</span>
                  )
                )
               
              }
              </div>
              <div className="jobs-country">
              {/* <span><FaGlobeEurope/></span> */}
               {
                  u.lokasyon.map(u=>(
                    <>
                    <span><FaGlobeEurope/></span>
                    <h7>{u}</h7></>
                  ))
                }
                </div>
                </div>

            </div>
            
            </div>
            </Link>
             )
            )
          }
          </div>
      </div>
      </main>
    </div>
  )
}

export default Main