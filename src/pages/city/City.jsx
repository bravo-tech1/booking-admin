import { Link } from "react-router-dom";
import "../Service/service.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function State() {
  const [state_id, setStateId] = useState();
  const [data, setData] = useState([]);
  const [city_name_en, setcity_name_en] = useState();
  const [city_name_ar, setcity_name_ar] = useState();
  const [city_image, setcity_image] = useState();

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/state/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const stateTitle = data.map((item) => (
    <option value={item.id}>{item.state_title_en}</option>
  ));
  const id = Number(window.location.pathname.replace("/cities/update/", ""));
  let update;
  useEffect(() => {
    fetch(`https://booking.emkanfinances.net/api/city/show`)
      .then((res) => res.json())
      .then((data) => {
        update = data.filter((item) => item.id === id);
        setStateId(update[0].state_id);
        setcity_name_en(update[0].city_name_en);
        setcity_name_ar(update[0].city_name_ar);
        setcity_image(update[0].city_image);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("state_id", state_id);
    formData.append("city_name_en", city_name_en);
    formData.append("city_name_ar", city_name_ar);
    formData.append("city_image", city_image);

    axios
      .post(
        `https://booking.emkanfinances.net/api/city/update/${id}`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/city";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Cities</h1>
        <Link to="/city/create">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="newProduct">
        <form className="addProductForm" onSubmit={handleSubmit}>
          <div className="addProductItem">
            <label>Choose State</label>
            <select
              className="newUserSelect"
              name="state_id"
              id="active"
              onChange={(e) => setStateId(e.target.value)}
              value={state_id}
              required
            >
              <option selected disabled>
                Choose one
              </option>
              {stateTitle}
            </select>
          </div>
          <div className="addProductItem">
            <label>City Title(Arabic)</label>
            <input
              type="text"
              placeholder="City Title(Arabic)"
              name="city_name_ar"
              value={city_name_ar}
              onChange={(e) => setcity_name_ar(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>City Title(English)</label>
            <input
              type="text"
              placeholder="City Title(English)"
              name="city_name_en"
              value={city_name_en}
              onChange={(e) => setcity_name_en(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Stat's Image</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={(e) => setcity_image(e.target.files.item(0))}
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
