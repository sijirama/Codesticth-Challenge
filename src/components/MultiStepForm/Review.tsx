import useMulti from '../../context/MultiStepFormContext.tsx'
import { toast } from 'sonner'

export default function Review() {
    const { address, setAddress, next } = useMulti()

    const handleSubmit = (values: typeof address) => {
        setAddress(values)
        toast.error('Address has been submitted')
        next()
    }

    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="bg-gray-700  text-black w-5/6 md:w-2/3 h-2/3 p-3 rounded-3xl shadow-2xl"></div>
        </section>
    )
}
