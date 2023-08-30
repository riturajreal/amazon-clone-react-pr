import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { useEffect, useState  } from 'react'
import { callAPI} from '../utils/CallApi'



const Search = () => {
    const [suggestions, setSuggestions] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");

    const getSuggestions = () =>{
        callAPI(`data/suggestions.json`)
        .then((suggestionsResults) =>{
                setSuggestions(suggestionsResults);
        })

    }

    useEffect ( () =>{
        getSuggestions();
    },[]);

  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select className='p-2 rounded-1 bg-gray-300 border-[4px] border-gray-300 rounded text-xs  text-black'>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>

            <input type="text" placeholder='Search here' value={searchTerm} className='p-5 font-semibold flex items-center grow h-[100%] rounded-1 text-black ' onChange={(e) => setSearchTerm(e.target.value)} />
            <button className='w-[45px]'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
            </button>
        </div>



      
    </div>
  )
}

export default Search
