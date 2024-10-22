import clsx from 'clsx'

export function WordBlock(letter: { text: string; state: boolean }) {
    return (
        <>
            <div
                className={clsx(
                    'uppercase border-2 border-slate-300 w-12 h-12 m-1 flex justify-center items-center text-2xl font-semibold',
                    {
                        'bg-cyan-600 text-white ': letter.state === true,
                    }
                )}
            >
                {letter.text}
            </div>
        </>
    )
}
