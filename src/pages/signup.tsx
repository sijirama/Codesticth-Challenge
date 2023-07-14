import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import BackGround from '/bg/bg.jpg'
import { toast } from 'sonner'
import { UserRegisterType } from '../Types/User'
import useUserAuth from '../context/AuthContext'
import { useState } from 'react'
import { updateProfile } from 'firebase/auth'

const initialState: UserRegisterType = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export default function Register() {
    const navigate = useNavigate()
    const { signUp } = useUserAuth()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (user: UserRegisterType) => {
        console.log('Submitting...')
        const { name, email, password, confirmPassword } = user
        try {
            setIsLoading(true)
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match')
            }
            const response = await signUp(email, password)
            if (!response) {
                throw new Error()
            }
            await updateProfile(response.user, {
                displayName: name
            })
            toast.success('Welcome to Dureva!')
            navigate('/')
        } catch (error) {
            toast.error('Failed to create account')
        } finally {
            setIsLoading(false)
        }
    }

    const validate = (values: UserRegisterType) => {
        const errors: UserRegisterType | any = {}
        if (!values.name) {
            errors.name = 'First name is required'
        } else if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        } else if (values.password.length < 8) {
            errors.password = 'Invalid password'
        } else if (!(values.password === values.confirmPassword)) {
            errors.confirmPassword = 'Password does not match'
        }
        return errors
    }

    return (
        <main className=" w-full min-h-screen flex ">
            <section
                style={{ backgroundImage: `url(${BackGround})` }}
                className="w-0 md:w-1/3 lg:w-1/2 bg-center bg-cover"
            ></section>
            <section className=" w-full md:w-2/3 lg:w-1/2 bg-myprimary flex justify-center items-center">
                <div className="w-5/6 md:w-2/3 bg-mysecondary px-5 md:px-7 lg:px-10 py-5 rounded-lg shadow-md">
                    <p className="font-bold text-lg lg:text-2xl my-4 lg:my-6 font-rubik -tracking-wide text-white">
                        Welcome to <span className="text-myprimary"> Dureva</span>
                    </p>
                    <Formik
                        initialValues={initialState}
                        validate={(values) => validate(values)}
                        onSubmit={(values, {}) => {
                            handleSubmit(values)
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="flex flex-col text-black ">
                                <Field
                                    className="bg-mylightgray font-light focus:outline-none p-1 md:p-2 my-1 md:my-2 border border-gray-300 rounded-md"
                                    placeholder="Your Name"
                                    type="text"
                                    name="name"
                                />
                                <ErrorMessage
                                    className="text-red-700 font-semibold text-xs"
                                    name="name"
                                    component="div"
                                />

                                <Field
                                    className="bg-mylightgray font-light focus:outline-none p-1 md:p-2 my-1 md:my-2 border border-gray-300 rounded-md"
                                    placeholder="Email Adress"
                                    type="email"
                                    name="email"
                                />
                                <ErrorMessage
                                    className="text-red-700 font-semibold text-xs"
                                    name="email"
                                    component="div"
                                />

                                <Field
                                    className="bg-mylightgray font-light focus:outline-none p-1 md:p-2 my-1 md:my-2 border border-gray-300 rounded-md"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                />
                                <ErrorMessage
                                    className="text-red-700 font-semibold text-xs"
                                    name="password"
                                    component="div"
                                />

                                <Field
                                    className="bg-mylightgray font-light focus:outline-none p-1 md:p-2 my-1 md:my-2 border border-gray-300 rounded-md"
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="confirmPassword"
                                />
                                <ErrorMessage
                                    className="text-red-700 font-semibold text-xs"
                                    name="confirmPassword"
                                    component="div"
                                />

                                <p className="font-thin text-sm my-1 text-white">
                                    Already have an account?{' '}
                                    <Link to="/sigin">
                                        <span className="text-myprimary font-semibold">Sign in</span>
                                    </Link>
                                </p>
                                <button
                                    className={`text-white font-bold border-2 border-white rounded-lg w-2/3 my-2 h-10 ${
                                        isSubmitting && isLoading && 'opacity-25'
                                    }`}
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Submitting' : 'Sign Up!'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </main>
    )
}
