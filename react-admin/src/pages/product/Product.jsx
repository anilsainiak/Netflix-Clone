import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { ProductData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/newProduct'>
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={ProductData} title="Sales Performance" dataKey="Sales"></Chart>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://ivenus.in/wp-content/uploads/2021/06/Airpods2.png" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">2400</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label >Product Name</label>
                    <input type="text" placeholder='Apple Airpod' />
                    <label >In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label >Active</label>
                    <select name="Active" id="Active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://ivenus.in/wp-content/uploads/2021/06/Airpods2.png" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
