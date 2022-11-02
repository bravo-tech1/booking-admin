import { useEffect, useState } from "react";
import axios from "axios";

export default function NewCountry() {
  const [title_en, settitle_en] = useState();
  const [title_ar, settitle_ar] = useState();

  let update;
  const id = Number(window.location.pathname.replace("/country/update/", ""));
  useEffect(() => {
    fetch(`https://osoolit.000webhostapp.com/api/country/show`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        update = data.filter((item) => item.id === id);
        settitle_en(update[0].title_en);
        settitle_ar(update[0].title_ar);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title_en", title_en);
    formData.append("title_ar", title_ar);

    axios
      .post(
        `https://osoolit.000webhostapp.com/api/country/update/${id}`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/countryp";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Update Country</h1>
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
          Update
        </button>
      </form>
    </div>
  );
}
