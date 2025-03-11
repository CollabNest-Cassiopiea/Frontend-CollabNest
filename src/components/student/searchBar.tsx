import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#141414] text-gray-300 border border-gray-700 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-gray-600"
      />
    </div>
  );
};

export default SearchBar;