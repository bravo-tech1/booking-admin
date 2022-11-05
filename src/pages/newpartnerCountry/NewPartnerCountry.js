import { useEffect, useState } from "react";
import axios from "axios";

export default function NewCountry() {
  const [title_en, settitle_en] = useState();
  const [title_ar, settitle_ar] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title_en", title_en);
    formData.append("title_ar", title_ar);
    axios
      .post("http://booking.emkanfinances.net/api/country/create", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = "/countryp";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Country</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Country Name(English)</label>
          <input
            type="text"
            placeholder="Country (English)"
            name="title_en"
            value={title_en}
            onChange={(e) => settitle_en(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Country Name(Arabic)</label>
          <input
            type="text"
            placeholder="Country(Arabic)"
            name="title_ar"
            value={title_ar}
            onChange={(e) => settitle_ar(e.target.value)}
          />
        </div>

        <button className="addProductButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
