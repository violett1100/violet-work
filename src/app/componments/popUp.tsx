// import clsx from 'clsx'

export function PopUp(text: { text: string }) {
    return (
        <>
            <div className="flex justify-center items-center">
                <p className="inline-block rounded-md px-4 py-2 mb-1 bg-black opacity-75 text-white text-nowrap transition ease-in-out">
                    {text.text}
                </p>
            </div>
        </>
    )
}
