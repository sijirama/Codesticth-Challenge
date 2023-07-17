import { FiSearch } from 'react-icons/fi'
import useSearch from '../context/SearchCOntext'

export default function SearchInput() {
    const { toggleModal } = useSearch()
    return (
        <div className="p-2 cursor-pointer rounded-2xl bg-myprimary text-white font-bold" onClick={toggleModal}>
            <FiSearch size={22} className="font-extrabold" />
        </div>
    )
}
