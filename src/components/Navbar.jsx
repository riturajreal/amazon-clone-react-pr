import { Search } from "./";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="min-w-[1000px]">
      {/* main container */}
      <div className="flex  bg-amazonclone text-white h-[60px]">
        {/* left */}
        <div className="flex items-center m-4">
          {/* amazon image */}

          <Link to={"/"}> 
          <img
            className="h-[35px] w-[100px] m-2"
            src={"../images/amazon.png"}
            alt=""
          /></Link>

          <div className="pr-4 pl-4">
            <div className="text-xs text-gray-400 xl:text-sm">Delivering to A House, UK </div>
            <div className="text-md xl:text-base font-bold">Choose location for most accurate options</div>
          </div>
        </div>

        {/* middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* right */}
        <div className="flex items-center m-4">
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


          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="mt-7 text-xs font-bold">Cart</div>
          </div>
          </Link>


        </div>

      </div>

{/* deals */}
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-sm p-2 pl-6">
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registery</div>
            <div>Gift Card</div>
            <div>Sell</div>
        </div>

    </header>
  );
};

export default Navbar;
