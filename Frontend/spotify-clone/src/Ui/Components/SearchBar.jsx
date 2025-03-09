import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div className="items-center gap-4 bg-[#242424] px-4 py-[7px] rounded-full hover:bg-[#303030] hidden md:flex">
      <label htmlFor="search">
        <LuSearch className="text-white h-5 w-5 cursor-pointer" />
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search for your fav songs"
        className="bg-transparent focus:outline-none text-white text-sm w-48"
      />
    </div>
  );
};

export default SearchBar;
