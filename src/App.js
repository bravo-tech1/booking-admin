import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebsiteImage from "./pages/WebsiteImage/WebsiteImage";
import WebsiteVideo from './pages/websiteVedio/WebsiteVedio';
import ServicesList from "./pages/servicesList/ServiceList";
import Service from "./pages/Service/Service";
import NewService from "./pages/newService/NewService";
import States from "./pages/statesList/StateList";
import State from "./pages/state/State";
import NewState from "./pages/newState/NewState";
import CityList from "./pages/cityList/CityList";
import NewCity from "./pages/newCity/NewCity";
import City from "./pages/city/City";
import HotelsList from "./pages/hotlesList/HotleList";
import NewHotel from "./pages/newHotels/NewHotel";
import Hotel from "./pages/hotel/Hotel";
import PackageList from "./pages/packagesList/PackagesList";
import NewPackage from "./pages/newPack/NewPack";
import Package from "./pages/package/Package";
import Deatils from "./pages/deatilsList/DeatilsList";
import NewDeatils from "./pages/newDeatils/NewDeatils";
import Deatil from "./pages/details/Details";
import PackagesVideoList from "./pages/packageVedioLIst/PackagesVedioList";
import NewPackVideo from "./pages/NewPackageVedio/NewPackVideo";
import DepartmentList from "./pages/DepartmentLIst/DepartmentList";
import NewDepartment from "./pages/NewDepartment/NewDepartment";
import PartnersList from "./pages/partenersList/PartenersList";
import NewParteners from "./pages/newParteners/newParteners";
import Partner from './pages/parteners/parteners';
import BenefitsList from './pages/benefitsList/BenefitsList';
import Benefit from './pages/Benefit/Benefit';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <WebsiteImage />
          </Route>
          <Route path="/website">
            <WebsiteImage />
          </Route>
          <Route path="/websitevideo">
            <WebsiteVideo />
          </Route>
          <Route path="/partners">
            <PartnersList />
          </Route>
          <Route path="/partner/create">
            <NewParteners />
          </Route>
          <Route path="/partner/update/:partnerId">
            <Partner />
          </Route>
          <Route path="/benefits">
            <BenefitsList />
          </Route>
          <Route path="/benefit/update/:benefitId">
            <Benefit />
          </Route>
          <Route path="/services">
            <ServicesList />
          </Route>
          <Route path="/service/create">
            <NewService />
          </Route>
          <Route path="/service/update/:serviceId">
            <Service />
          </Route>
          <Route path="/state">
            <States />
          </Route>
          <Route path="/states/create">
            <NewState />
          </Route>
          <Route path="/states/update/:stateId">
            <State />
          </Route>
          <Route path="/city">
            <CityList />
          </Route>
          <Route path="/cities/create">
            <NewCity />
          </Route>
          <Route path="/cities/update/:cityId">
            <City />
          </Route>
          <Route path="/hotels">
            <HotelsList />
          </Route>
          <Route path="/hotel/create">
            <NewHotel />
          </Route>
          <Route path="/hotel/update/:hotelId">
            <Hotel />
          </Route>
          <Route path="/packages">
            <PackageList />
          </Route>
          <Route path="/package/create">
            <NewPackage />
          </Route>
          <Route path="/package/update/:packageId">
            <Package />
          </Route>
          <Route path="/deatils">
            <Deatils />
          </Route>
          <Route path="/deatil/create">
            <NewDeatils />
          </Route>
          <Route path="/detail/update/:detaillId">
            <Deatil />
          </Route>
          <Route path="/packagesvideo">
            <PackagesVideoList />
          </Route>
          <Route path="/packagevideo/create">
            <NewPackVideo />
          </Route>
          <Route path="/departments">
            <DepartmentList />
          </Route>
          <Route path="/department/create">
            <NewDepartment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
