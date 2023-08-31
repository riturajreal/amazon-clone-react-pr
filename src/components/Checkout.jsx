import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductDetails } from './'
import { GB_CURRENCY } from '../utils/constants'
import { removeFromCart } from '../redux/cartSlice'



const Checkout = () => {

  // getting products
  const products = useSelector((state)  => state.cart.products);

  // getting totalNumber of Products
  const itemNumber = useSelector ((state) => state.cart.productNumber);

  // getting total price of cart
  const subtotal = useSelector ((state) => state.cart.products.reduce((subtotal,product) => 
  subtotal+ (product.price * product.quantity),0 ));

  const dispatch  = useDispatch();


  return (
    <div className='h-screen bg-amazonclone-background'>
      <div className='min-w-[100px] max-w-[1500px] m-auto pt-8'>
        <div className='grid grid-cols-8 gap-10'>
        {/* Products */}
          <div className='col-span-6  bg-white'>
            <div className='text-2xl m-4' >Shopping Cart</div>
            {
              products.map(product => {
                return (
                  <div key={product.id}>
                    <div className='grid grid-cols-12 divide-y divide-gray-300 mr-4'>
                    {/* part 1 */}
                      <div className='col-span-10 grid grid-cols-8 divide-y divide-gray-300'>
                      
                        <div className='col-span-2'>
                              <Link to={`/product/${product.id}`}>
                                <img className='p-4 m-auto' src={product.image_small} alt="" />
                              </Link>
                        </div>

                        <div className='col-span-6 relative'>
                                <div className='font-medium text-black mt-2'>
                                    <Link to={`/product/${product.id}`}>
                                       <ProductDetails product={product} ratings={true} />
                                    </Link>
                                </div>

                        {/* delete button */}
                              <div className='relative'>
                                <button className='text-lg font-semibold text-blue-500 mb-3' onClick={()=> dispatch(removeFromCart(product.id))}>Delete</button>
                              </div>

                              <div className='grid grid-cols-3 w-20 text-center absolute bottom-5'>
                                <div className='text-xl bg-gray-400 rounded'>-</div>
                                <div className='text-lg bg-gray-200'>{product.quantity}</div>
                                <div className='text-xl bg-gray-400 rounded'>+</div>
                              </div>

                        </div>
                      </div>

                      {/* part 2 */}
                      <div className='col-span-2'>
                                <div className='text-lg mt-2 mr-4 font-semibold'>
                                  {GB_CURRENCY.format(product.price)}
                                </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            
            {/* subtotal div */}

            <div className='text-lg text-right mb-4 mr-4'>Subtotal ({itemNumber} items) : <span className='font-semibold'>{GB_CURRENCY.format(subtotal)}</span></div>

          </div>

          {/* checkout */}
          <div className='col-span-2 bg-white rounded h-[250px] p-7'>
          {/* message */}
            <div className='text-sm text-green-800 mb-2 '>Your Order qualifies for 
            <span className='font-bold'>FREE DELIVERY</span>. Delivery details</div>
          
          {/* amount */}
            <div className='text-lg mb-4'>Subtotal ({itemNumber} items) : 
            <span className='font-semibold'>{GB_CURRENCY.format(subtotal)}</span></div>

          {/* checkout btn */}
          <div className='btn'>Proceed to Checkout</div>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Checkout
