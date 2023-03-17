import React from 'react'
import { useParams } from 'react-router-dom'

function Jobsdetail() {
    let  {id} = useParams();


    const jobsId = ({id})=>{
        let sonuc = id.split("");
        let sonuc1 = sonuc.splice((id.lastIndexOf("-") +1 ),sonuc.length)
        console.log(JSON.parse(sonuc1))

    }
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