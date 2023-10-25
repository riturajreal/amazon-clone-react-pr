import { Search } from "./";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Log,AdminAuth} from "./";



const Navbar = () => {

  const cart = useSelector((state) => state.cart.productsNumber)

  return (
    <header className="max-w-[1700px] mt-5 mb-5 mx-auto z-40">
      {/* main container */}
      <div className="flex rounded-xl bg-amazonclone text-white h-[60px]">
        {/* left */}
        <div className="flex items-center m-4">
          {/* amazon image */}

          <Link to={"/"}> 
          <img
            className="h-[38px] w-[126px] m-2"
            src={"../images/renewdLogo.png"}
            alt=""
          /></Link>

          <div className="pr-4 pl-4">
            <div className="text-xs text-white xl:text-sm">Delivering to A House, UK </div>
            <div className="text-md xl:text-base font-bold">Choose location for most accurate options</div>
          </div>
        </div>

        {/* middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* right */}
        <div className="flex items-center gap-3 m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, Sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>

          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>

    {/* shopping cart */}
          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />

            {/* cart value */}
            <div className="relative bg-amazonclone-yellow">
            <div className="absolute h-5 w-5 rounded-xl bg-amazonclone-yellow -right-[7px] bottom-4 text-sm m-2 text-center mt-3 font-bold text-white">
              {cart}
            </div>

            </div>

            <div className="mt-7 text-xs font-bold">Cart</div>
          </div>
          </Link>

          {/* user */}
        <Link to={"/log"}>
            <div className="bg-amazonclone-yellow px-3 py-2 rounded-lg text-white">Log in</div>
          </Link>

          {/* admin */}
          <Link to={"/adminauth"}>
            <div className="bg-white px-3 py-2 rounded-lg text-black">Become a Seller</div>
          </Link>

        </div>


        

      </div>

    </header>
  );
};

export default Navbar;
