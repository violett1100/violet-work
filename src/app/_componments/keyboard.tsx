import clsx from 'clsx'

export function SpecialKey(data: { name: string; onKeyClick: VoidFunction }) {
    return (
        <>
            <div
                onClick={data.onKeyClick}
                className="px-[0.5%] xxs:px-[2.5%] sm:px-3 h-12 text-sm inline-flex justify-center items-center cursor-pointer uppercase m-1 rounded-md bg-gray-300 dark:bg-gray-700 font-black font-[family-name:var(--font-ubuntu-mono)]"
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
                    'px-[2.5%] sm:px-3 h-12 text-lg inline-flex justify-center items-center cursor-pointer uppercase sm:m-1 m-[2px] rounded-md font-black font-[family-name:var(--font-ubuntu-mono)]',
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
