import { WordRow } from '../_componments/wordRow'

export default function Page() {
    return (
        <>
            <h1>Wordle</h1>
            <div className="container mx-auto">
                <WordRow />
            </div>
        </>
    )
}
