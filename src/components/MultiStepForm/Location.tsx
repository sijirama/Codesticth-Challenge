import { Formik, Field, Form, ErrorMessage } from 'formik'
import useMulti from '../../context/MultiStepFormContext.tsx'
import { toast } from 'sonner'

export default function Location() {
    const { address, setAddress, next } = useMulti()

    const handleSubmit = (values: typeof address) => {
        setAddress(values)
        toast.error('Address has been submitted')
        next()
    }

    const validate = (values: typeof address) => {
        let errors: typeof address | any = {}
        if (!values.city) {
            errors.city = 'City is required'
        } else if (!values.state) {
            errors.state = 'Your state is required'
        } else if (!values.street) {
            errors.street = 'Street is required'
        } else if (!values.postalCode) {
            errors.postalCode = 'Your postal code is requires'
        } else if (values.postalCode.length < 5) {
            errors.postalCode = 'Yout Postal Code must be at least 5 characters'
        }
        return errors
    }

    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="bg-gray-700  text-black w-5/6 md:w-2/3 lg:w-1/3 h-2/3 p-3 rounded-3xl shadow-2xl">
                <Formik
                    initialValues={address}
                    onSubmit={(values) => handleSubmit(values)}
                    validate={(values) => validate(values)}
                >
                    {({}) => (
                        <Form className="w-full h-full flex flex-col items-center justify-evenly border-black p-3">
                            <Field
                                className=" w-full md:w-full font-rubik text-white font-light rounded-md focus:outline-none p-3 bg-[#292929] focus:border-2 border-white"
                                placeholder="Your City e.g Lagos"
                                type="text"
                                name="city"
                            />
                            <ErrorMessage
                                className="text-red-700 font-bold font-rubik text-sm"
                                name="city"
                                component="div"
                            />
                            <Field
                                className=" w-full md:w-full font-rubik text-white font-light rounded-md focus:outline-none p-3 bg-[#292929] focus:border-2 border-white"
                                placeholder="Your State "
                                type="text"
                                name="state"
                            />
                            <ErrorMessage
                                className="text-red-700 font-bold text-sm font-rubik"
                                name="state"
                                component="div"
                            />
                            <Field
                                className=" w-full md:w-full font-rubik text-white font-light rounded-md focus:outline-none p-3 bg-[#292929] focus:border-2 border-white"
                                placeholder="Your Street"
                                type="text"
                                name="street"
                            />
                            <ErrorMessage
                                className="text-red-700 font-bold text-sm font-rubik"
                                name="street"
                                component="div"
                            />
                            <Field
                                className=" w-full md:w-full font-rubik text-white font-light rounded-md focus:outline-none p-3 bg-[#292929] focus:border-2 border-white"
                                placeholder="Your Postal code"
                                type="text"
                                name="postalCode"
                            />
                            <ErrorMessage
                                className="text-red-700 font-bold text-sm font-rubik"
                                name="postalCode"
                                component="div"
                            />

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
