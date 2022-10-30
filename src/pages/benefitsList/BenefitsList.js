import "../cityList/cityList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



export default function PartenresList() {


  const [data, setData] = useState([]);


  useEffect(()=>{
    fetch("https://osoolit.000webhostapp.com/api/benefits/show")
      .then(res => res.json())
      .then(data => setData(data))
    },[])


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
  
    { field: "title_ar", headerName: "Title (AR)", width: 200,
      renderCell: (params) => {
        return(
          <div className="userListUser">
            {params.row.title_ar}
          </div>
        )
      }
    },
    { field: "title_en", headerName: "Title (EN)", width: 200,
    renderCell: (params) => {
      return(
        <div className="userListUser">
          {params.row.title_en}
        </div>
      )
    }
  },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/benefit/update/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
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
