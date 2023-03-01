import './style.css'
import './App.css';
import jobs from './json/jobs/jobs.json'
import { FaGlobeEurope } from 'react-icons/fa';
import Filters from './component/Filters'


function App() {
  return (
    <div className="App">

      <header>
        <h2>Github <span>Jobs</span></h2>
        <section>
          <div className="header-form">
            <input placeholder="title"></input>
            <button className="btn btn-primary">Search</button>
          </div>
        </section>
      </header>

      {/* main */}

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
  );
}

export default App;
