import "./sidebar.css";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import HotelIcon from "@mui/icons-material/Hotel";
import InventoryIcon from "@mui/icons-material/Inventory";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import AddIcon from "@mui/icons-material/Add";
import DomainIcon from "@mui/icons-material/Domain";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import HandshakeIcon from "@mui/icons-material/Handshake";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/website" className="link">
              <li className="sidebarListItem newTitle">
                <PhotoSizeSelectActualIcon className="sidebarIcon" />
                Website Image
              </li>
            </Link>
            <Link to="/websitevideo" className="link">
              <li className="sidebarListItem newTitle">
                <VideoCameraBackIcon className="sidebarIcon" />
                Website Video
              </li>
            </Link>
            <Link to="/benefits" className="link">
              <li className="sidebarListItem newTitle">
                <CheckCircleOutlineIcon className="sidebarIcon" />
                Benefits
              </li>
            </Link>
            <a
              class="sidebarListItem  newTitle"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Partners Section
            </a>
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <Link to="/countryp" className="link">
                <li className="sidebarListItem newTitle">
                  <DomainIcon className="sidebarIcon" />
                  Countries
                </li>
              </Link>
              <Link to="/country/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Country
                </li>
              </Link>
              <Link to="/citiesp" className="link">
                <li className="sidebarListItem newTitle">
                  <LocationCityRoundedIcon className="sidebarIcon" />
                  Cities
                </li>
              </Link>
              <Link to="/cityp/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New City
                </li>
              </Link>
              <Link to="/partners" className="link">
                <li className="sidebarListItem newTitle">
                  <HandshakeIcon className="sidebarIcon" />
                  Partners
                </li>
              </Link>
              <Link to="/partner/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Partner
                </li>
              </Link>
            </div>

            <a
              class="sidebarListItem newTitle"
              data-bs-toggle="collapse"
              href="#services"
              role="button"
              aria-expanded="false"
              aria-controls="services"
            >
              Services Section
            </a>
            <div class="collapse multi-collapse" id="services">
              <Link to="/departments" className="link">
                <li className="sidebarListItem newTitle">
                  <InventoryIcon className="sidebarIcon" />
                  Departments
                </li>
              </Link>
              <Link to="/department/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Depertment
                </li>
              </Link>

              <Link to="/services" className="link">
                <li className="sidebarListItem newTitle">
                  <DesignServicesRoundedIcon className="sidebarIcon" />
                  Services
                </li>
              </Link>
              <Link to="/service/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Service
                </li>
              </Link>
              <Link to="/state" className="link">
                <li className="sidebarListItem newTitle">
                  <DomainIcon className="sidebarIcon" />
                  States
                </li>
              </Link>
              <Link to="/states/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New State
                </li>
              </Link>
              <Link to="/city" className="link">
                <li className="sidebarListItem newTitle">
                  <LocationCityRoundedIcon className="sidebarIcon" />
                  Cities
                </li>
              </Link>
              <Link to="/cities/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New City
                </li>
              </Link>
              <Link to="/hotels" className="link">
                <li className="sidebarListItem newTitle">
                  <HotelIcon className="sidebarIcon" />
                  Hotels
                </li>
              </Link>
              <Link to="/hotel/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Hotel
                </li>
              </Link>
              <Link to="/packages" className="link">
                <li className="sidebarListItem newTitle">
                  <InventoryIcon className="sidebarIcon" />
                  Packages
                </li>
              </Link>
              <Link to="/package/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Package
                </li>
              </Link>
              <Link to="/deatils" className="link">
                <li className="sidebarListItem newTitle">
                  <InventoryIcon className="sidebarIcon" />
                  Packages Deatils
                </li>
              </Link>
              <Link to="/deatil/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Deatils
                </li>
              </Link>
              <Link to="/packagesvideo" className="link">
                <li className="sidebarListItem newTitle">
                  <InventoryIcon className="sidebarIcon" />
                  Packages's Videos
                </li>
              </Link>
              <Link to="/packagevideo/create" className="link">
                <li className="sidebarListItem new">
                  <AddIcon className="sidebarIcon" />
                  New Package's Videos
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
