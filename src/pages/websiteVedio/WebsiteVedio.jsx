import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading.jsx";

export default function WebsiteImage() {
  const [website_image, setwebsite_image] = useState();

  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/website/showbyid/2")
      .then((res) => res.json())
      .then((dataRes) => console.log(dataRes));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    SetLoading(true);
    const formData = new FormData();
    formData.append("title_en", "none");
    formData.append("title_en_night", "none");
    formData.append("title_ar", "none");
    formData.append("title_ar_night", "none");
    formData.append("website_image_night", "none");
    formData.append("type", "video");
    formData.append("website_image", website_image);

    axios
      .post("https://booking.emkanfinances.net/api/website/update/2", formData, {
        "Content-Type": "multipart/form-data",
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.href = "/services";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Update Video(Or Image)</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Website Video(Or Image)</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setwebsite_image(e.target.files.item(0))}
          />
        </div>
        <button className="addProductButton" type="submit">
          Update
        </button>
        {loading && <Loading />}
      </form>
    </div>
  );
}
