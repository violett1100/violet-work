import clsx from 'clsx'

export function SpecialKey(data: { name: string; onKeyClick: VoidFunction }) {
    return (
        <>
            <div
                onClick={data.onKeyClick}
                className="w-16 h-12 text-xs inline-flex justify-center items-center cursor-pointer uppercase m-1 rounded-md bg-gray-300 dark:bg-gray-700 font-semibold"
            >
                {data.name}
            </div>
        </>
    )
}

export function LetterKey(data: { keyValue: { name: string; state: string }; onKeyClick: VoidFunction }) {
    return (
        <>
            <div
                onClick={data.onKeyClick}
                className={clsx(
                    'w-9 h-12 inline-flex justify-center items-center cursor-pointer uppercase m-1 rounded-md font-semibold',
                    { 'bg-gray-300 dark:bg-gray-700': data.keyValue.state === '' },
                    { 'bg-teal-500 text-white': data.keyValue.state === 'true' },
                    { 'bg-amber-400 text-white': data.keyValue.state === 'miss' },
                    { 'bg-gray-400 text-white': data.keyValue.state === 'false' }
                )}
            >
                {data.keyValue.name}
            </div>
        </>
    )
}
