import Location from '../components/MultiStepForm/Location'
import Payment from '../components/MultiStepForm/Payment'
import Review from '../components/MultiStepForm/Review'
import { Steps } from 'antd'
import useMulti from '../context/MultiStepFormContext'

const { Step } = Steps

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
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="h-1/6 flex items-center justify-center">
                <Steps current={currentStep}>
                    <Step title={'Payment'} />
                    <Step title={'Address'} />
                    <Step title={'Review'} />
                </Steps>
            </div>
            <main className="w-full h-5/6">{renderStep(currentStep)}</main>
        </section>
    )
}
