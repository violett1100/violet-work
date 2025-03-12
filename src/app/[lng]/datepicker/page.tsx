import { DatePicker } from '@/app/_componments/datePicker'
import '@/app/assets/css/DatePicker.min.css'

export default function Page() {
    return (
        <>
            <h1 className="title text-center">Date Picker</h1>
            <div className="grid md:grid-cols-2 gap-8 md:container mx-auto px-4 py-8">
                <div>
                    <h4 className="font-bold text-xl mb-4 text-center">
                        Date Range Component for <span style={{ color: 'purple' }}>current month</span>
                    </h4>
                    <div className="grid justify-center">
                        <DatePicker restrictMonth={true} />
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-xl mb-4 text-center">
                        Date Range Component for <span style={{ color: 'purple' }}>cross months</span>
                    </h4>
                    <div className="grid justify-center">
                        <DatePicker />
                    </div>
                </div>
            </div>{' '}
        </>
    )
}
