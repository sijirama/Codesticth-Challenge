import { ReactNode, createContext, useContext, useState } from 'react'

interface Props {
    children: ReactNode
}

export interface SearchContextModel {
    showModal: () => void
    hideModal: () => void
    toggleModal: () => void
    isModalOpen: boolean
}

export const SearchContext = createContext({} as SearchContextModel)

export const SearchProvider = ({ children }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }
    const hideModal = () => {
        setIsModalOpen(false)
    }
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
        console.log(isModalOpen)
    }

    const value: SearchContextModel = {
        hideModal,
        toggleModal,
        showModal,
        isModalOpen
    }
    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export default function useSearch(): SearchContextModel {
    return useContext(SearchContext)
}
