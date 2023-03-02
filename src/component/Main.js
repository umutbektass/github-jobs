import React from 'react'
import Filters from './Filters'
import {DropdownItem} from 'reactstrap'
import { FaGlobeEurope } from 'react-icons/fa';
import jobs from '../api/post.json'


function Main() {
  return (
    <div>
        <main>
      <div className="flex-items">
        <div className="column-1">
          
            <Filters></Filters>
          
        </div>
        <div className="column-2">
         
          {
             
            jobs.map(u=>(
              <div className="card">
            <div className="jobs">
              <h5>{u.şirket}</h5>
              <h2>{u.title}</h2>
              <div className="card-down">
              <div className="jobs-time">
              
              {
                
                u.time.map(time=>(
                  
                  <span>{time}</span>
                  )
                )
               
              }
              </div>
              <div className="jobs-country">
              <span><FaGlobeEurope/></span>
               {
                  u.lokasyon.map(u=>(
                   
                    <h7>{u.ülke}</h7>
                  ))
                }
                </div>
                </div>

            </div>
            </div> )
              )
          }
          </div>
      </div>
      </main>
    </div>
  )
}

export default Main