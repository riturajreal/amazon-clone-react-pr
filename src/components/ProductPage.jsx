import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { ProductDetails } from "./";

import { callAPI } from "../utils/CallApi";
import { GB_CURRENCY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'



const ProductPage = () => {

  const dispatch =useDispatch();

  const { id } = useParams();

  // tracking quantity of products
  const [quantity, setQuantity] = useState("1");


  // to update product state
  const [product, setProduct] = useState(null);


  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => { 

    setProduct(product.quantity = quantity);
    return product;

   };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product...........</h1>;

  return (
    product && 
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
        <div className="grid grid-cols-10 gap-2">
          {/* left side */}
          <div className="col-span-3 p-8 rounded bg-white m-auto">
            <img src={`${product.image}`} alt="" />
          </div>

          {/* Middle */}
          <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
          {/* ratings */}
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              
            {/* desciption */}
              <div className="text-base xl:text-lg mt-3">
               {product.description}
              </div>
            </div>

          
          {/* right */}
          <div className="col-span-2 p-4 rounded bg-white">
            <div className="text-2xl text-orange-500 font-semibold">{GB_CURRENCY.format(product.price)}</div>
            <div className="text-md text-gray-400 font-semibold line-through">{GB_CURRENCY.format(product.oldPrice)}</div>
            <div className="text-sm  text-blue-500 font-semibold mt-4">FREE Returns</div>
            <div className="text-sm  text-blue-500 font-semibold mt-1">FREE Delivery</div>
            <div className="text-base text-green-500 font-semibold mt-1">In Stock</div>
            <div className="text-base font-semibold mt-2">Ouantity : 
                <select onChange={(e) => setQuantity(e.target.value)} className="p-2 text-base border rounded-md focus:border-indigo-600 ">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            
            <Link to={"/checkout"}>
            <button onClick={() =>dispatch(addToCart(addQuantityToProduct()))} className="bg-yellow-400 w-full text-center p-3 text-sm rounded hover:bg-yellow-500 mt-4">Add to Cart</button>
            </Link>
           
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default ProductPage;
