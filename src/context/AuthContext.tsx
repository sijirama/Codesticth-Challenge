import {
    Auth,
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../utils/firebase'

interface Props {
    children?: ReactNode
}

export interface AuthContextModel {
    auth: Auth
    user: User | null
    signIn: (email: string, password: string) => Promise<UserCredential>
    signUp: (email: string, password: string) => Promise<UserCredential>
    logout: () => Promise<void>
    showModal: () => void
    hideModal: () => void
    toggleModal: () => void
    setUser: any
    isModalOpen: boolean
}

export const AuthContext = createContext({} as AuthContextModel)

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    //const [cartCount, setCartCount] = useState(0)

    function signUp(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(): Promise<void> {
        return signOut(auth)
    }

    const showModal = () => {
        setIsModalOpen(true)
    }
    const hideModal = () => {
        setIsModalOpen(false)
    }
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const value: AuthContextModel = {
        signUp,
        signIn,
        logout,
        user,
        setUser,
        auth,
        showModal,
        hideModal,
        toggleModal,
        isModalOpen
    }

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

export default function useUserAuth(): AuthContextModel {
    return useContext(AuthContext)
}
