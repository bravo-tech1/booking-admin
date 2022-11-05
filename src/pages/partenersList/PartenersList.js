import "../cityList/cityList.css";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function PartenresList() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://booking.emkanfinances.net/api/partner/delete/${id}`)
      .then(() => {
        setData(data.filter((el) => el.id !== id));
      });
  };
  useEffect(() => {
    fetch("http://booking.emkanfinances.net/api/partner/show")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "name_ar",
      headerName: "Partner Name(AR)",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name_ar}</div>;
      },
    },
    {
      field: "name_en",
      headerName: "Partner Name(EN)",
      width: 200,
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name_en}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/partner/update/" + params.row.id}>
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
      />
    </div>
  );
}
