import "../Service/service.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function City() {
  const [country, setcountry] = useState();
  const [data, setData] = useState([]);
  const [title_en, settitle_en] = useState();
  const [title_ar, settitle_ar] = useState();

  useEffect(() => {
    fetch("https://osoolit.000webhostapp.com/api/country/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const countryId = data.map((item) => (
    <option value={item.id}>{item.title_en}</option>
  ));
  const id = Number(window.location.pathname.replace("/cityp/update/", ""));
  let update;
  useEffect(() => {
    fetch(`https://osoolit.000webhostapp.com/api/city-partner/show`)
      .then((res) => res.json())
      .then((data) => {
        update = data.filter((item) => item.id === id);
        setcountry(update[0].country_id);
        settitle_en(update[0].title_en);
        settitle_ar(update[0].title_ar);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("country_id", country);
    formData.append("title_en", title_en);
    formData.append("title_ar", title_ar);

    axios
      .post(
        `https://osoolit.000webhostapp.com/api/city-partner/update/${id}`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/citiesp";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Update City</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Choose Country</label>
          <select
            className="newUserSelect"
            name="country_id"
            id="active"
            onChange={(e) => setcountry(e.target.value)}
            value={country}
            required
          >
            <option selected disabled>
              Choose one
            </option>
            {countryId}
          </select>
        </div>
        <div className="addProductItem">
          <label>City Name(English)</label>
          <input
            type="text"
            placeholder="New Srevice"
            name="title_en"
            value={title_en}
            onChange={(e) => settitle_en(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>City Name(Arabic)</label>
          <input
            type="text"
            placeholder="New Srevice"
            name="title_ar"
            value={title_ar}
            onChange={(e) => settitle_ar(e.target.value)}
          />
        </div>

        <button className="addProductButton" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
