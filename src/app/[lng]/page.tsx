import { Games } from './_componments/games'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type PageProps = { params: { lng: string } }
export default function Home({ params: { lng } }: PageProps) {
    const designs = [
        // { text: 'Tech', link: 'https://violet-demo-tech.netlify.app' },
        // { text: 'Farm', link: 'https://violet-demo-farm.netlify.app' },
        {
            text: 'Pharmacy and Medicine Website Design (Behance)',
            link: 'https://www.behance.net/gallery/190795541/Medical-and-Health-Website-Design-',
            tag: '#UIUX Design',
        },
        {
            text: 'Wedding RSVP Website Design & Development',
            link: 'https://weddingrsvp-template.netlify.app',
            tag: '#UIUX Design #RWD #GSAP',
        },
        {
            text: 'Design Brand Website Design & Development',
            link: 'https://displayflex.gitlab.io/official_website',
            tag: '#UIUX Design #RWD #SVG',
        },
    ]
    const projects = [
        {
            text: 'Peritoneal Dialysis Website Design & Development',
            link: 'https://pd-website.netlify.app',
            tag: '#Interactive Design #RWD #GSAP',
        },
        {
            text: 'Hemodialysis Website Design & Development',
            link: 'https://udnhealth-hd.com/HD',
            tag: '#UIUX Design #RWD',
        },
        {
            text: 'Farm Brand Website Design & Development',
            link: 'https://www.cottonfieldfarm.com/',
            tag: '#UIUX Design #RWD',
        },
    ]
    return (
        <div className="wrapper">
            <h1>{lng}</h1>
            <h2 className="title">My Work</h2>

            <div className="md:grid grid-cols-4 mb-12">
                <p className="font-semibold text-xl my-2">01</p>
                <div className="col-start-2 col-span-3">
                    <h3 className="subtitle">Website Designs</h3>
                    {designs.map((item, i) => {
                        return (
                            <div key={i} className="mb-4 border-b border-tertiary pb-2">
                                <Link
                                    href={item.link}
                                    className="hover:text-primary inline-block md:flex justify-between items-baseline"
                                    target="_blank"
                                >
                                    <p className="flex items-center">
                                        <ChevronRight className="inline size-6 pr-2" />
                                        {item.text}
                                    </p>
                                    <p className="text-sm text-gray-400 md:text-right md:pl-4">{item.tag}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="md:grid grid-cols-4 mb-12">
                <p className="font-semibold text-xl my-2">02</p>
                <div className="col-start-2 col-span-3">
                    <h3 className="subtitle">Business Projects</h3>
                    {projects.map((item, i) => {
                        return (
                            <div key={i} className="mb-4 border-b border-tertiary pb-2">
                                <Link
                                    href={item.link}
                                    className="hover:text-primary inline-block md:flex justify-between items-baseline"
                                    target="_blank"
                                >
                                    <p className="flex items-center">
                                        <ChevronRight className="inline size-6 pr-2" />
                                        {item.text}
                                    </p>
                                    <p className="text-sm text-gray-400 md:text-right md:pl-4">{item.tag}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="md:grid grid-cols-4 mb-12">
                <p className="font-semibold text-xl my-2">03</p>
                <div className="col-start-2 col-span-3">
                    <h3 className="subtitle">Interactive Games</h3>
                    <Games />
                </div>
            </div>
            <div className="mb-12">
                <h2 className="title">About Me</h2>
            </div>
        </div>
    )
}
