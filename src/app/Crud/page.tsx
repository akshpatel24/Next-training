"use client";
import { useState, useEffect } from "react";

interface Product {
  pId: number;
  pName: string;
  rate: number;
  department: string;
  mfgDate: string;
  notes: string;
  isDeleted: boolean;
}

function Productlist() {
  const [products, setProduct] = useState<Product[]>([]);
  const [formProduct, setFormProduct] = useState<Product>({
    pId: 0,
    pName: '',
    rate: 0,
    department: '',
    mfgDate: '',
    notes: '',
    isDeleted: false
  });
  const [productid, setProductid] = useState<Product>({
    pId: 0,
    pName: '',
    rate: 0,
    department: '',
    mfgDate: '',
    notes: '',
    isDeleted: false
  });
  const [change, setChange] = useState(false);
//used for the edit function.
  async function fetchAndSetData() {
    const response = await fetch('http://182.237.13.165/AkshReactAPI/api/Product/List');
    const data = await response.json();
    setProduct(data);
    console.log("Fetched product items:", data);
  }

  useEffect(() => {
    fetchAndSetData();
  }, []);

  async function Productlistbyid(pId: number) {
    const response = await fetch(`http://182.237.13.165/AkshReactAPI/api/Product/Get-by-code/${pId}`);
    if (response.ok) {
      const data = await response.json();
      setProductid(data);
      console.log("Selected product:", data);
    }
  }

  async function addProduct(formProduct: Product) {
    try {
      const response = await fetch('http://182.237.13.165/AkshReactAPI/api/Product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formProduct),
      });

      if (response.status === 200 || response.status === 201) {
        alert("Product added successfully!");
        setFormProduct({
          pId: 0,
          pName: "",
          rate: 0,
          department: "",
          mfgDate: "",
          notes: "",
          isDeleted: false
        });
        setChange(false);
        fetchAndSetData();
      } else {
        alert("Error adding product.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (e: any) =>
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });


  async function updateProduct(formProduct: Product) {
    try {
      const response = await fetch(`http://182.237.13.165/AkshReactAPI/api/Product/update?id=${formProduct}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formProduct),
        //single object
      });

      if (response.ok) {
        alert("Product updated successfully!");
        fetchAndSetData();
        setFormProduct({
          pId: 0,
          pName: '',
          rate: 0,
          department: '',
          mfgDate: '',
          notes: '',
          isDeleted: false
        });
        setChange(false);
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error(error);
    }
  }

  

  const handleEdit = (product: Product) => {
    setFormProduct(product);
    setChange(true);
  };

  return (
    <>
      <input
        type="number"
        name="pId"
        placeholder="Product ID"
        value={formProduct.pId}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="pName"
        placeholder="Product Name"
        value={formProduct.pName}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rate"
        placeholder="Rate"
        value={formProduct.rate}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formProduct.department}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="mfgDate"
        placeholder="Manufacture Date (e.g., 2024-06-17)"
        value={formProduct.mfgDate}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="notes"
        placeholder="Notes"
        value={formProduct.notes}
        onChange={handleInputChange}
      />
      <button
        onClick={() => {
          change ? updateProduct(formProduct) : addProduct(formProduct);
        }}
// If change is true then use the update otherwise if stays at false use addproduct function.

        style={{ backgroundColor: "#f0f0f0", color: "#000" }}
      >
        {change ? "Update Product" : "Add Product"}
      </button>

      <table>
      <thead>
  <tr>
    <th>pId</th>
    <th>pName</th>
    <th>rate</th>
    <th>department</th>
    <th>mfgDate</th>
    <th>notes</th>
    <th>isDeleted</th> 
    <th>Update</th>
    <th>View</th>
  </tr>
</thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.pId}</td>
              <td>{product.pName}</td>
              <td>{product.rate}</td>
              <td>{product.department}</td>
              <td>{product.mfgDate}</td>
              <td>{product.notes}</td>
              <td> <td>{product.isDeleted ? "Yes" : "No"}</td>
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
              </td>
              <td>
                <button onClick={() => Productlistbyid(product.pId)}>
                  View product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Selected Product Details:</h2>
      <p><strong>Product ID:</strong> {productid.pId}</p>
      <p><strong>Name:</strong> {productid.pName}</p>
      <p><strong>Rate:</strong> {productid.rate}</p>
      <p><strong>Department:</strong> {productid.department}</p>
      <p><strong>Manufacture Date:</strong> {productid.mfgDate}</p>
      <p><strong>Notes:</strong> {productid.notes}</p>
    </>
  );
}

export default Productlist;
