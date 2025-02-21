import Link from 'next/link'
import Image from 'next/image'

export function Games({ gameList }) {
    const games = gameList.games

    return (
        <div id="games" className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {games.map((item, i) => {
                return (
                    <div key={i}>
                        {/* <iframe
                            className="inline-block"
                            src={item.url}
                            style={{ height: '650px', minWidth: '360px', width: '100%' }}
                        ></iframe> */}
                        <Link href={item.url} target="_blank" className="group overflow-hidden game-container">
                            <Image
                                src={item.img}
                                // layout="responsive"
                                width={400}
                                height={400}
                                alt={item.name}
                                className="game grayscale w-full object-cover aspect-square group-hover:blur-sm group-hover:brightness-60 group-hover:opacity-100 transition-all blur-sm brightness-60 opacity-100 sm:opacity-80 sm:brightness-100 sm:blur-none"
                            ></Image>
                            <p className="game text-center text-xl drop-shadow-md font-semibold text-background group-hover:opacity-100 opacity-100 sm:opacity-0 transition-all">
                                {item.name}
                            </p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
