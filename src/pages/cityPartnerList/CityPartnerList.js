import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function CityList() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    await axios
      .get(`https://osoolit.000webhostapp.com/api/city-partner/delete/${id}`)
      .then(() => {
        setData(data.filter((el) => el.id !== id));
      });
  };
  useEffect(() => {
    fetch("https://osoolit.000webhostapp.com/api/city-partner/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "state_id",
      headerName: "State",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.country_id}</div>;
      },
    },
    {
      field: "city_name_en",
      headerName: "City Name(English)",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.title_en}</div>;
      },
    },
    {
      field: "city_name_ar",
      headerName: "City Name(Arabic)",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.title_ar}</div>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/cityp/update/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        key={data.map((item) => item.id)}
      />
    </div>
  );
}
