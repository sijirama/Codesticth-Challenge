import { ReactNode, createContext, useContext } from 'react'
import { useState } from 'react'

interface Props {
    children: ReactNode
}

const FormContext = createContext({} as MultiFormModel)

const paymentInitialState = {
    cardNumber: '',
    phoneNumber: '',
    cvv: '',
    name: ''
}

const addressInitialState = {
    address1: '',
    address2: '',
    city: ''
}

export interface MultiFormModel {
    currentStep: number
    payment: typeof paymentInitialState
    address: typeof addressInitialState
    next: () => void
    prev: () => void
    setAddress: any
    setPayment: any
}

export const MultiProvider = ({ children }: Props) => {
    const [payment, setPayment] = useState(paymentInitialState)
    const [address, setAddress] = useState(addressInitialState)
    const [currentStep, setCurrentStep] = useState(0)
    const next = () => {
        if (currentStep === 2) {
            setCurrentStep(0)
            setPayment(paymentInitialState)
            setAddress(addressInitialState)
            return
        }
        setCurrentStep(currentStep + 1)
    }
    const prev = () => setCurrentStep(currentStep - 1)
    const value = {
        currentStep,
        payment,
        setPayment,
        next,
        prev,
        address,
        setAddress
    }
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default function useMulti(): MultiFormModel {
    return useContext(FormContext)
}
