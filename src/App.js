
import './App.css';
// import Homepage from './Components/Homepage';
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
import RepackingPutaway from './Components/Solutions/Warehousemanagement/RepackingPutaway';
import Pickmanagement from './Components/Solutions/Warehousemanagement/Pickmanagement';
import Dispatch from './Components/Solutions/Warehousemanagement/Dispatch';
import Inventorymanagement from './Components/Solutions/Warehousemanagement/Inventorymanagement';
import Apiintegration from './Components/Solutions/Warehousemanagement/Apiintegration';
import IotIntegration from './Components/Solutions/Warehousemanagement/IotIntegration';
import Multichannelintegration from './Components/Solutions/Warehousemanagement/AIPowered/Multichannelintegration';
import Orderprocessing from './Components/Solutions/Warehousemanagement/AIPowered/Orderprocessing';
import Picklistgeneration from './Components/Solutions/Warehousemanagement/AIPowered/Picklistgeneration';
import Navbars from './Navbar/Navbar';
import Picksequencing from './Components/Solutions/Warehousemanagement/AIPowered/Picksequencing';
import Workforceoptimization from './Components/Solutions/Warehousemanagement/AIPowered/Workforceoptimization';
import Packageandshipping from './Components/Solutions/Warehousemanagement/AIPowered/Packageandshipping';

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
    <Route path='/warehousemanagement' element={<Warehousemanagementsystem/>}/>
    <Route path='/inboundreceipt' element={<Inboundreceipt/>}/>
    <Route path='/crossdocking' element={<Crossdocking/>}/>
    <Route path='/deconsolidation' element={<Deconsolidation/>}/>
    <Route path='/qualitycheck' element={<Qualitycheck/>}/>
    <Route path='/repackingputaway' element={<RepackingPutaway/>}/>
    <Route path='/pickmanagement' element={<Pickmanagement/>}/>
    <Route path='/dispatch' element={<Dispatch/>}/>
    <Route path='/inventorymanagement' element={<Inventorymanagement/>}/>
    <Route path='/apiintegration' element={<Apiintegration/>}/>
    <Route path='/iotintegration' element={<IotIntegration/>}/>
    <Route path='/multichannelintegration' element={<Multichannelintegration/>}/>
    <Route path='/orderprocessing' element={<Orderprocessing/>}/>
    <Route path='/picklistgeneration' element={<Picklistgeneration/>}/>
    <Route path='/picksequencing' element={<Picksequencing/>}/>
    <Route path='/workforceoptimization' element={<Workforceoptimization/>}/>
    <Route path='/packageandshipping' element={<Packageandshipping/>}/>
   </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
