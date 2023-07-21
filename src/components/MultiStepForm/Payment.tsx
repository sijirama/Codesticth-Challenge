import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import useMulti from '../../context/MultiStepFormContext.tsx'
import { PaymentCard, valid } from 'baseui/payment-card'
import { MaskedInput } from 'baseui/input'
import { toast } from 'sonner'

export default function Payment() {
    const [number] = React.useState('')
    const { payment, setPayment, next } = useMulti()
    const [value, setValue] = useState('')
    const [expiration, setExpiration] = React.useState('')
    const [code, setCode] = React.useState('')

    const { card } = valid.number(number)
    let codeLength: number
    if (card && card.code && card.code.size) {
        codeLength = card.code.size
    }

    const handleSubmit = (values: typeof payment) => {
        if ((values.name, values.phoneNumber, expiration, code, value)) {
            setPayment({ ...values, expiration, cvv: code, cardNumber: value })
            next()
        } else {
            toast.error('Some values are missing')
        }
    }

    const validate = (values: typeof payment) => {
        const errors: typeof payment | any = {}
        if (!values.name) {
            errors.name = 'Your name is required.'
        } else if (!values.phoneNumber) {
            errors.phoneNumber = 'Your phone number is required.'
        }
        return errors
    }

    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="bg-gray-700  text-black w-5/6 md:w-2/3 lg:w-1/3 h-2/3 p-3 rounded-3xl shadow-2xl">
                <Formik
                    initialValues={payment}
                    onSubmit={(values) => handleSubmit(values)}
                    validate={(values) => validate(values)}
                >
                    {({}) => (
                        <Form className="w-full h-full gap-3 flex flex-col items-center justify-evenly border-black p-3">
                            <Field
                                className=" w-full md:w-full font-rubik text-white font-light rounded-md focus:outline-none p-3 bg-[#292929] focus:border-2 border-white"
                                placeholder="Your Card Name"
                                type="text"
                                name="name"
                            />
                            <ErrorMessage
                                className="text-red-700 font-bold font-rubik text-sm"
                                name="name"
                                component="div"
                            />
                            <Field
                                className=" w-full md:w-full font-rubik text-white font-light rounded-md focus:outline-none p-3 bg-[#292929] focus:border-2 border-white"
                                placeholder="Your Phonenumber"
                                type="text"
                                maxLength="11"
                                name="phoneNumber"
                            />
                            <ErrorMessage
                                className="text-red-700 font-bold text-sm font-rubik"
                                name="phoneNumber"
                                component="div"
                            />
                            <PaymentCard
                                clearOnEscape
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Please enter your credit card details"
                                overrides={{
                                    InputContainer: {
                                        style: ({}) => ({
                                            //backgroundColor: ' ',
                                            color: 'black'
                                        })
                                    },
                                    Root: {
                                        style: () => ({
                                            //backgroundColor: '',
                                            color: 'black'
                                        })
                                    }
                                }}
                            />
                            <div className="grid gap-3 w-full md:grid-cols-2">
                                <MaskedInput
                                    value={expiration}
                                    onChange={(event: any) => setExpiration(event.currentTarget.value)}
                                    placeholder="MM/YY"
                                    mask="99/99"
                                />
                                <MaskedInput
                                    value={code}
                                    onChange={(event: any) => setCode(event.currentTarget.value)}
                                    placeholder="CVC"
                                    mask={codeLength ? '9'.repeat(codeLength) : '999'}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-mysecondary text-white font-rubik py-3 px-12 rounded-md"
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}
