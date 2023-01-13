import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {
  const [pid, setId] = useState("");
  const [pname, setName] = useState("");
  const [ploc, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [productList, srtProductList] = useState([]);




  const addProduct = () => {
    Axios.post("http://localhost:3001/create", {
      pid: pid,
      pname: pname,
      ploc: ploc,
      price: price,
    }).then(() => {
      setProductList([
        ...productList,
        {
          pid: pid,
          pname: pname,
          ploc: ploc,
          price: price,
        },
      ]);
    });
  };

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((response) => {
      setProductList(response.data);
    });
  };

  // const updateEmployeeWage = (id) => {
  //   Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
  //     (response) => {
  //       setEmployeeList(
  //         employeeList.map((val) => {
  //           return val.id == id
  //             ? {
  //               id: val.id,
  //               name: val.name,
  //               country: val.country,
  //               age: val.age,
  //               position: val.position,
  //               wage: newWage,
  //             }
  //             : val;
  //         })
  //       );
  //     }
  //   );
  // };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setProductList(
        productList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };


  return (
    <html>
      <body>
        <div className="App">
          <div className="info" padding-left="10px;">
            <label for="pid">Product Name:</label>
            <input type="text" onChange={(event) => {
              setId(event.target.value);
            }} /><br />
            <label for="pname">Product Name:</label>
            <input type="text" onChange={(event) => {
              setName(event.target.value);
            }} /><br />
            <label for="ploc">Product Location:</label>
            <input type="text" onChange={(event) => {
              setLocation(event.target.value);
            }} /><br />
            <label for="price">Product Price:</label>
            <input type="text" onChange={(event) => {
              setPrice(event.target.value);
            }} />

            <button onClick={addProduct}>Add Product</button>
          </div>
          <div className="products">
            <button onClick={getProducts}>Show Products</button>

            {productList.map((val, key) => {
              return (
                <div className="product">
                  <div>
                    <h3>Name: {val.pid}</h3>
                    <h3>Age: {val.pname}</h3>
                    <h3>Country: {val.ploc}</h3>
                    <h3>Position: {val.price}</h3>
                  </div>
                  <div>
                    
                    <button
                      onClick={() => {
                        updateProducts(val.id);
                      }}
                    >
                      {" "}
                      Update
                    </button>

                    <button
                      onClick={() => {
                        deleteProduct(val.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
