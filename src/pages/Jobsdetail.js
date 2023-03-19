import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Jobsdetail() {
    let  {id} = useParams();
    const [jobsDetail,setJobsDetail]=useState([])
    const [newId,setnewId]=useState("")

    const jobsId = ({id})=>{
        let sonuc = id.split("");
        let sonuc1 = sonuc.splice((id.lastIndexOf("-") +1 ),sonuc.length)
         let sonuc5=sonuc1.toString()
        let sonuc6=sonuc5.replace(",","")
        
            return sonuc6
    

    }
    

       const getPost = async(Id)=>{
      await axios.get(`http://localhost:3002/post/${Id}`).then(res=> setJobsDetail(res.data))
    }

     useEffect(()=>{
         getPost(jobsId({id}))
         },[])
     
     console.log(newId)
     console.log(jobsDetail)
     
 




    
  return (
    <div>
        <div className="grid">
            <div className="item1">
            <div class="card">
  <div class="card-body">
                 <div className="flex-item">
                    <div className="flex-item-item1">
    <h5 class="card-title">Yazılım Geliştirme Uzmanı</h5>
    <h6 className="fs-4 fw-normal text-uppercase my-3">Bektaş Teknoloji</h6>
    <p className="text-muted fs-5">İstanbul avr.</p>
    </div>
    <div className="flex-item2-button">
        <button className="btn btn-primary px-5">Başvur</button>
        <button className="btn btn-outline-primary px-5">Kaydet</button>

    </div>
                </div>
                <div className="card-footer">
                    <h5>Çalışma Şekli</h5>
                    <h5>Pozisyon seviyesi</h5>
                </div>
  </div>
</div>

     <div className="card my-5" >
        <div className="card-body jobs-description">
            <h5 className="card-title">GENEL NİTELİKLER VE İŞ TANIMI</h5>
            <p dangerouslySetInnerHTML={{__html:jobsDetail.icerik}} style={{textAlign:"left"}}></p>

           
        </div>

    </div> 



            </div>
            <div className="item2">
                Bektaş
            </div>
        </div>








        Jobsdetail : {id}
    <button className="btn btn-primary" onClick={()=>jobsId({id})}>Click</button>
    </div>
  )
}

export default Jobsdetail