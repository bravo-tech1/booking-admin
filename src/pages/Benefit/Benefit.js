import { useEffect } from "react";
import "../Service/service.css";
import axios from "axios";
import { useState } from "react";
import Loading from "../../components/Loading/Loading.jsx";

export default function State() {
  const [title_ar, settitle_ar] = useState();
  const [title_en, settitle_en] = useState();
  const [description_ar, setdescription_ar] = useState();
  const [description_en, setdescription_en] = useState();
  const [image_light, setimage_light] = useState();
  const [image_dark, setimage_dark] = useState();
  const [loading, SetLoading] = useState(false);

  const id = Number(window.location.pathname.replace("/benefit/update/", ""));
  let update;
  useEffect(() => {
    fetch(`https://booking.emkanfinances.net/api/benefits/show`)
      .then((res) => res.json())
      .then((data) => {
        update = data.filter((item) => item.id === id);
        settitle_ar(update[0].title_ar);
        settitle_en(update[0].title_en);
        setdescription_ar(update[0].description_ar);
        setdescription_en(update[0].description_en);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    SetLoading(true);
    const formData = new FormData();
    formData.append("title_ar", title_ar);
    formData.append("title_en", title_en);
    formData.append("description_ar", description_ar);
    formData.append("description_en", description_en);
    formData.append("image_light", image_light);
    formData.append("image_dark", image_dark);

    axios
      .post(
        `https://booking.emkanfinances.net/api/benefits/update/${id}`,
        formData,
        {
          "Content-Type": "multipart/form-data",
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/benefits";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update Benefit</h1>
      </div>
      <div className="newProduct">
        <form className="addProductForm" onSubmit={handleSubmit}>
          <div className="addProductItem">
            <label>Title (Arabic)</label>
            <input
              type="text"
              placeholder="Title(Arabic)"
              name="title_ar"
              value={title_ar}
              onChange={(e) => settitle_ar(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Title (English)</label>
            <input
              type="text"
              placeholder="Title(English)"
              name="city_name_en"
              value={title_en}
              onChange={(e) => settitle_en(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Description (Arabic)</label>
            <input
              type="text"
              placeholder="Description (Arabic)"
              name="description_ar"
              value={description_ar}
              onChange={(e) => setdescription_ar(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Description (English)</label>
            <input
              type="text"
              placeholder="Description (English)"
              name="description_en"
              value={description_en}
              onChange={(e) => setdescription_en(e.target.value)}
            />
          </div>
          <div className="addProductItem">
            <label>Image (Light Mode)</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={(e) => setimage_light(e.target.files.item(0))}
            />
          </div>
          <div className="addProductItem">
            <label>Image (Dark Mode)</label>
            <input
              type="file"
              id="file"
              multiple
              onChange={(e) => setimage_dark(e.target.files.item(0))}
            />
          </div>

          <button className="addProductButton" type="submit">
            Update
          </button>
          {loading && <Loading />}
        </form>
      </div>
    </div>
  );
}
