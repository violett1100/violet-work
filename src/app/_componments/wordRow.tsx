'use client'

import { WordBlock } from './wordBlock'

export function WordRow(row: { word: { id: number; row: { id: number; text: string; state: string }[] } }) {
    const wordRow = row.word.row
    return (
        <>
            <div className="flex justify-center">
                {wordRow.map((letter) => (
                    <WordBlock key={letter.id} text={letter.text} state={letter.state} />
                ))}
            </div>
        </>
    )
}
