import './style.css'
import './App.css';
import jobs from './api/post.json'
import { FaGlobeEurope } from 'react-icons/fa';
import Filters from './component/Filters'
import {DropdownItem} from 'reactstrap'
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
import Main from './component/Main';
import EmployerRegister from './pages/EmployerRegister';
import EmployerSignln from './pages/EmployerSignln';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <header>
        <nav>
      <Link to="/" style={{textDecoration:"none",color:"black"}}><h2>Github <span>Jobs</span></h2> </Link> 
        <div class="dropdown">
        <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Giriş Yap / Üye Ol
      </a>

      <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <h2>Aday(iş mi arıyorsun ?)</h2>
      <p>Burda seni bekleyen binlerce ilan var!</p>
      <button type="button" class="btn btn-light">Giriş Yap</button>
      <button type="button" class="btn btn-primary">Kayıt Ol</button></li>
      <DropdownItem divider />
    <li>
    
    <h2>İşveren (İlan mı Vereceksiniz?)</h2>
    <p>Pozisyonunuza en uygun aday burada!</p>
    <Link to="/isveren/giris"> <a>İşveren Giriş</a></Link>
   <Link to="/isveren/kayit"> <a>Ücretsiz üye ol</a></Link>
    
    </li>
         </ul>
      </div>
        </nav>
        <section>
          <div className="header-form">
            <input placeholder="title"></input>
            <button className="btn btn-primary">Search</button>
          </div>
        </section>
      </header>
   
    
      {/* main */}
      <Routes>
<Route exact path="/" element={<Main></Main>}></Route>
<Route path="/isveren/kayit" element={<EmployerRegister></EmployerRegister>}></Route>
<Route path="/isveren/giris" element={<EmployerSignln></EmployerSignln>}></Route>
    </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
