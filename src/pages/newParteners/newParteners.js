import "../newState/newState.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";

export default function NewParteners() {
  const [name_ar, setname_ar] = useState();
  const [data, setData] = useState([]);
  const [name_en, setname_en] = useState();
  const [city_id, setCityId] = useState();
  const [email, setemail] = useState();
  const [website, setwebsite] = useState();
  const [location_ar, setlocation_ar] = useState();
  const [location_en, setlocation_en] = useState();
  const [describtion_ar, setdescribtion_ar] = useState();
  const [describtion_en, setdescribtion_en] = useState();
  const [profile, setprofile] = useState();
  const [logo, setlogo] = useState();

  const [loading, SetLoading] = useState(false);

  const CityId = data.map((item) => (
    <option value={item.id}>{item.title_en}</option>
  ));
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/city-partner/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    SetLoading(true);
    const formData = new FormData();
    formData.append("city_partner_id", city_id);
    formData.append("name_ar", name_ar);
    formData.append("name_en", name_en);
    formData.append("email", email);
    formData.append("website", website);
    formData.append("location_ar", location_ar);
    formData.append("location_en", location_en);
    formData.append("describtion_ar", describtion_ar);
    formData.append("describtion_en", describtion_en);
    formData.append("profile", profile);
    formData.append("logo", logo);

    axios
      .post("https://booking.emkanfinances.net/api/partner/create", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        if (response.status === 201) {
          window.location.href = "/partners";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Partner</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Choose City</label>
          <select
            className="newUserSelect"
            name="country_id"
            id="active"
            onChange={(e) => setCityId(e.target.value)}
            value={city_id}
            required
          >
            <option selected disabled>
              Choose one
            </option>
            {CityId}
          </select>
        </div>
        <div className="addProductItem">
          <label>Partner Name (Arabic)</label>
          <input
            type="text"
            placeholder="Partner Name (Arabic)"
            name="name_ar"
            value={name_ar}
            onChange={(e) => setname_ar(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Partner Name (English)</label>
          <input
            type="text"
            placeholder="Partner Name (English)"
            name="name_en"
            value={name_en}
            onChange={(e) => setname_en(e.target.value)}
          />
        </div>

        <div className="addProductItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Website URL</label>
          <input
            type="text"
            placeholder="https://www.google.com"
            name="city_name_en"
            value={website}
            onChange={(e) => setwebsite(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Location Title(Arabic)</label>
          <input
            type="text"
            placeholder="Location Title(Arabic)"
            name="location_ar"
            value={location_ar}
            onChange={(e) => setlocation_ar(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Location Title(English)</label>
          <input
            type="text"
            placeholder="Location Title(English)"
            name="location_en"
            value={location_en}
            onChange={(e) => setlocation_en(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description (Arabic)</label>
          <input
            type="text"
            placeholder="Description (Arabic)"
            name="describtion_ar"
            value={describtion_ar}
            onChange={(e) => setdescribtion_ar(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Description (English)</label>
          <input
            type="text"
            placeholder="Description (English)"
            name="describtion_en"
            value={describtion_en}
            onChange={(e) => setdescribtion_en(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Profile</label>
          <input
            type="text"
            placeholder="Description (English)"
            name="profile"
            value={profile}
            onChange={(e) => setprofile(e.target.value)}
          />
        </div>

        <div className="addProductItem">
          <label>Logo</label>
          <input
            type="file"
            id="file"
            multiple
            onChange={(e) => setlogo(e.target.files.item(0))}
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
