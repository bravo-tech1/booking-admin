import { Link } from "react-router-dom";
import "../Service/service.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function State() {
  const [city_id, setcity_id] = useState();
  const [data, setData] = useState([]);
  const [showHotel, setShowHotel] = useState(true);
  const [hotel_name_en, sethotel_name_en] = useState();
  const [hotel_name_ar, sethotel_name_ar] = useState();
  const [hotel_location_en, sethotel_location_en] = useState();
  const [hotel_location_ar, sethotel_location_ar] = useState();
  const [location_url, setlocation_url] = useState();
  const [hotel_image, sethotel_image] = useState();
  let update;
  const id = Number(window.location.pathname.replace("/hotel/update/", ""));
  useEffect(() => {
    fetch(`https://booking.emkanfinances.net/api/hotel/show`)
      .then((res) => res.json())
      .then((data) => {
        update = data.filter((item) => item.id === id);
        setcity_id(update[0].city_id);
        sethotel_name_en(update[0].hotel_name_en);
        sethotel_name_ar(update[0].hotel_name_ar);
        sethotel_location_en(update[0].hotel_location_en);
        sethotel_location_ar(update[0].hotel_location_ar);
        setlocation_url(update[0].location_url);
        sethotel_image(update[0].hotel_image);
        setShowHotel(update[0].hotel_show === "yes" ? true : false);
      });
  }, []);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/city/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const stateTitle = data.map((item) => (
    <option value={item.id}>{item.city_name_en}</option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("city_id", city_id);
    formData.append("hotel_name_en", hotel_name_en);
    formData.append("hotel_name_ar", hotel_name_ar);
    formData.append("hotel_location_en", hotel_location_en);
    formData.append("hotel_location_ar", hotel_location_ar);
    formData.append("location_url", location_url);
    formData.append("hotel_show", showHotel ? "yes" : "no");
    formData.append("hotel_image", hotel_image);

    axios
      .post(
        `https://booking.emkanfinances.net/api/hotel/update/${id}`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/hotels";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update Hotel</h1>
        <Link to="/hotels/create">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="newProduct">
        <form className="addProductForm" onSubmit={handleSubmit}>
          <div className="addProductItem">
            <label>Choose City</label>
            <select
              className="newUserSelect"
              name="city_id"
              id="active"
              onChange={(e) => setcity_id(e.target.value)}
              value={city_id}
              required
            >
              <option selected disabled>
                Choose one
              </option>
              {stateTitle}
            </select>
          </div>
          <div className="addProductItem">
            <label>Hotel Title(Arabic)</label>
            <input
              type="text"
              placeholder="Hotel Title(Arabic)"
              name="hotel_name_ar"
              value={hotel_name_ar}
              onChange={(e) => sethotel_name_ar(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Hotel Title(English)</label>
            <input
              type="text"
              placeholder="Hotel Title(English)"
              name="city_name_en"
              value={hotel_name_en}
              onChange={(e) => sethotel_name_en(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Location Title(English)</label>
            <input
              type="text"
              placeholder="Location Title(English)"
              name="hotel_location_en"
              value={hotel_location_en}
              onChange={(e) => sethotel_location_en(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Location Title(Arabic)</label>
            <input
              type="text"
              placeholder="Location Title(Arabic)"
              name="hotel_location_ar"
              value={hotel_location_ar}
              onChange={(e) => sethotel_location_ar(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Location URL</label>
            <input
              type="text"
              placeholder="Location URL"
              name="location_url"
              value={location_url}
              onChange={(e) => setlocation_url(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Hotel Image</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={(e) => sethotel_image(e.target.files.item(0))}
            />
          </div>
          <div className="show">
            <label htmlFor="show">Show Hotel</label>
            <input
              id="show"
              type="checkbox"
              checked={showHotel}
              onChange={(e) => setShowHotel(!showHotel)}
            />
          </div>
          <button className="addProductButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
