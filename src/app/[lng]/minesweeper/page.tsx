import { Minesweeper } from '@/app/_componments/Minesweeper'
import '@/app/assets/css/Minesweeper.min.css'

export default function Page() {
  return (
    <div id="minesweeper" className="text-center">
      <h1 className="title text-center">Minesweeper</h1>
      <Minesweeper />
    </div>
  )
}
