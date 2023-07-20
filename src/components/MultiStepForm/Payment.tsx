import { Formik, Field, Form, ErrorMessage } from 'formik'
import useMulti from '../../context/MultiStepFormContext.tsx'

export default function Payment() {
    const { payment, setPayment, next } = useMulti()

    const handleSubmit = (values: typeof payment) => {
        console.log(values)
        next()
    }

    const validate = (values: typeof payment) => {}

    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="bg-gray-900  text-black w-5/6 md:w-1/3 h-2/3 p-3 rounded-3xl shadow-2xl">
                <Formik
                    initialValues={payment}
                    onSubmit={(values) => handleSubmit(values)}
                    validate={(values) => validate(values)}
                >
                    {({}) => (
                        <Form className="w-full h-full flex flex-col items-center justify-evenly border-black">
                            <Field
                                className=" w-5/6 md:w-2/3 font-rubik font-light rounded-md focus:outline-none p-3 bg-gray-100 focus:border border-black"
                                placeholder="Your Card Name"
                                type="text"
                                name="name"
                            />
                            <Field
                                className=" w-5/6 md:w-2/3 font-rubik font-light rounded-md focus:outline-none p-3 bg-gray-100"
                                placeholder="Your Phonenumber"
                                type="text"
                                maxLength="11"
                                name="phoneNumber"
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
