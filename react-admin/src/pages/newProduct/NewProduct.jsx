import React from 'react'
import './newProduct.css'

export default function NewProduct() {
  return (
    <div className="addProduct">
    <h1 className="addProductTitle">New Product</h1>
    <form className="addProductForm">
        <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
        </div>
        <div className="addProductItem">
            <label>Name</label>
            <input type="text" placeholder='Apple Airpods' />
        </div>
        <div className="addProductItem">
            <label>Stock</label>
            <input type="email" placeholder='123' />
        </div>
        <div className="addProductItem">
            <label >Active</label>
            <select name="active" id="active" className="addProductSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="addProductbutton">Create</button>
    </form>
</div>
  )
}
