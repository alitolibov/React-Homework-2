import { AiOutlineSearch } from 'react-icons/ai';

const SearchAppBar = () => {
  return ( 
      <div className="h-[50px] px-[12px] bg-[#00AC73] rounded-[15px] mb-[24px]">
        <form name="form" className="w-full flex items-center justify-between h-full">
            <input type="text" placeholder="Введите название товара или заболевания" name="search" className=""/>
            <button>
              <AiOutlineSearch size={24}/>
            </button>
        </form>
      </div>
   );
}
 
export default SearchAppBar;