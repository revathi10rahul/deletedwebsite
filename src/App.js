
import './App.css';
import Homepage from './Components/Homepage';
  import {HashRouter,Routes,Route} from 'react-router-dom'
import Homepageagain from './Components/Homepageagain';
import Aboutpage from './Components/Aboutpage';
import Newdesign from './Components/Newdesign';
import Fulfillmentautomation from './Components/Fulfillmentautomation';
import Ordermanagement from './Components/Ordermanagement';
import Warehousemanagementsystem from './Components/Warehousemanagementsystem';
import Inboundreceipt from './Components/Solutions/Warehousemanagement/Inboundreceipt';
import Crossdocking from './Components/Solutions/Warehousemanagement/Crossdocking';
import Deconsolidation from './Components/Solutions/Warehousemanagement/Deconsolidation'
import Qualitycheck from './Components/Solutions/Warehousemanagement/Qualitycheck';

function App() {
  return (
  <HashRouter>
    <div className="App">
    <Routes>
    {/* <Route path='/' element={<Homepage/>}/> */}
    <Route path='/home' element={<Homepageagain/>}/>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/' element={<Newdesign/>}/>
    <Route path='/fulfillmentautomation' element={<Fulfillmentautomation/>}/>
    <Route path='ordermanagement' element={<Ordermanagement/>}/>
    <Route path='/warehousemanagementsystem' element={<Warehousemanagementsystem/>}/>
    <Route path='/inboundreceipt' element={<Inboundreceipt/>}/>
    <Route path='/crossdocking' element={<Crossdocking/>}/>
    <Route path='/deconsolidation' element={<Deconsolidation/>}/>
    <Route path='/qualitycheck' element={<Qualitycheck/>}/>
   </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
