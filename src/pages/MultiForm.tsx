import Location from '../components/MultiStepForm/Location'
import Payment from '../components/MultiStepForm/Payment'
import Review from '../components/MultiStepForm/Review'
import { Steps } from 'antd'
import useMulti from '../context/MultiStepFormContext'
import { BsFillCartCheckFill, BsBank2 } from 'react-icons/bs'
import { SlLocationPin as GrMapLocation } from 'react-icons/sl'

const renderStep = (step: Number) => {
    switch (step) {
        case 0:
            return <Payment />
        case 1:
            return <Location />
        case 2:
            return <Review />
        default:
            return null
    }
}
export default function MultiStepForm() {
    const { currentStep } = useMulti()
    const iconSize = 27
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="h-1/6 w-full hidden md:w-2/3 lg:w-1/3 p-4 md:flex items-center justify-center ">
                <Steps
                    size="default"
                    current={currentStep}
                    items={[
                        {
                            title: 'Payment',
                            icon: <BsBank2 size={iconSize} className="text-[##292929] font-semibold" />
                        },
                        {
                            title: 'Location',
                            icon: <GrMapLocation size={iconSize} className="text-[##292929] font-semibold" />
                        },
                        {
                            title: 'Review',
                            icon: <BsFillCartCheckFill size={iconSize} className="text-[##292929] font-semibold" />
                        }
                    ]}
                />
            </div>
            <main className="w-full h-5/6">{renderStep(currentStep)}</main>
        </section>
    )
}
