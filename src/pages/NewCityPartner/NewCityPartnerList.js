import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";

export default function NewService() {
  const [country, setcountry] = useState();
  const [data, setData] = useState([]);
  const [title_en, settitle_en] = useState();
  const [title_ar, settitle_ar] = useState();
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    fetch("http://booking.emkanfinances.net/api/country/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const countryId = data.map((item) => (
    <option value={item.id}>{item.title_en}</option>
  ));

  const handleSubmit = (event) => {
    event.preventDefault();
    SetLoading(true);

    const formData = new FormData();
    formData.append("title_en", title_en);
    formData.append("title_ar", title_ar);
    formData.append("country_id", country);

    axios
      .post(
        "http://booking.emkanfinances.net/api/city-partner/create",
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((response) => {
        if (response.status === 201) {
          window.location.href = "/citiesp";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New City</h1>
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
          Create
        </button>
        {loading && <Loading />}
      </form>
    </div>
  );
}
