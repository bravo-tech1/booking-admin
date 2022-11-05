import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function ProductList() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    await axios
      .get(`https://booking.emkanfinances.net/api/country/delete/${id}`)
      .then(() => {
        setData(data.filter((el) => el.id !== id));
      });
  };
  useEffect(() => {
    fetch("https://booking.emkanfinances.net/api/country/show")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title_en",
      headerName: "Country Name(English)",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem serviceNameC">
            {params.row.title_en}
          </div>
        );
      },
    },
    {
      field: "title_ar",
      headerName: "Country Name(Arabic)",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.title_ar}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/country/update/" + params.row.id}>
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
    <div className="productList">
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
