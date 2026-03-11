import SearchIcon from "../../assets/icons/SearchIcon";
import ButtonIcon from "../Buttons/ButtonIcon";

const SearchInput = () => {
    return (
        <div className="rounded rounded-2 bg-(--primaryDarkGradient) p-1 border border-(--primaryLight) font-medium uppercase px-3 md:px-3.75 py-3.75  h-5.5 flex items-center justify-center w-full md:w-100 lg:w-150 relative">
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-inherit"
            />
            <div className="absolute right-0 top-0">
                <ButtonIcon
                    border="border-none"
                    borderColor="border-inherit"
                    bgColor="bg-inherit"
                    icon={<SearchIcon className="w-6 h-6" />}
                />
            </div>
        </div>
    );
};
export default SearchInput;
