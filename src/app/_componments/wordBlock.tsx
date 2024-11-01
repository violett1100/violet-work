import clsx from 'clsx'

export function WordBlock(letter: { text: string; state: string }) {
    return (
        <>
            <div
                className={clsx(
                    'uppercase border-2 w-12 h-12 m-1 flex justify-center items-center text-2xl font-semibold',
                    { 'border-gray-300 dark:border-gray-700': letter.text === '' && letter.state === '' },
                    { 'border-gray-400': letter.text !== '' && letter.state === '' },
                    { 'bg-teal-500 border-teal-500 text-white': letter.state === 'true' },
                    { 'bg-amber-400 border-amber-400 text-white': letter.state === 'miss' },
                    { 'bg-gray-400 border-gray-400 text-white': letter.state === 'false' }
                )}
            >
                {letter.text}
            </div>
        </>
    )
}
