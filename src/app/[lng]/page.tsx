import { Games } from '@/app/_componments/games'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getTranslation } from '@/i18n'
import { cookies } from 'next/headers'

type PageProps = { params: Promise<{ lng: string }> }
export default async function Home({ params }: PageProps) {
    const resolvedParams = await params
    const { t } = await getTranslation(resolvedParams.lng, 'translation')
    console.log(cookies)

    const designs = [
        // { text: 'Tech', link: 'https://violet-demo-tech.netlify.app' },
        // { text: 'Farm', link: 'https://violet-demo-farm.netlify.app' },
        {
            text: t('myWork.categ1.content1'),
            link: 'https://www.behance.net/gallery/190795541/Medical-and-Health-Website-Design-',
            tag: '#UIUX Design',
        },
        {
            text: t('myWork.categ1.content2'),
            link: 'https://weddingrsvp-template.netlify.app',
            tag: '#UIUX Design #RWD #GSAP',
        },
        {
            text: t('myWork.categ1.content3'),
            link: 'https://displayflex.gitlab.io/official_website',
            tag: '#UIUX Design #RWD #SVG',
        },
    ]
    const projects = [
        {
            text: t('myWork.categ2.content1'),
            link: 'https://pd-website.netlify.app',
            tag: '#Interactive Design #RWD #GSAP',
        },
        {
            text: t('myWork.categ2.content2'),
            link: 'https://udnhealth-hd.com/HD',
            tag: '#UIUX Design #RWD',
        },
        {
            text: t('myWork.categ2.content3'),
            link: 'https://www.cottonfieldfarm.com/',
            tag: '#UIUX Design #RWD',
        },
    ]
    const games = [
        { name: t('myWork.categ3.content1'), url: '/wordle', img: '/assets/images/wordle.png' },
        {
            name: t('myWork.categ3.content2'),
            url: 'https://violet-luckywheel1.netlify.app/',
            img: '/assets/images/luckywheel.png',
        },
        {
            name: t('myWork.categ3.content3'),
            url: 'https://violet-slotmachine2.netlify.app',
            img: '/assets/images/slotmachine.png',
        },
        {
            name: t('myWork.categ3.content4'),
            url: 'https://violet-scratchoff.netlify.app',
            img: '/assets/images/scratchoff.png',
        },
    ]

    return (
        <div className="wrapper">
            <h2 className="title">{t('myWork.title')}</h2>
            <div className="md:grid grid-cols-4 mb-12">
                <p className="font-semibold text-xl my-2">01</p>
                <div className="col-start-2 col-span-3">
                    <h3 className="subtitle">{t('myWork.categ1.title')}</h3>
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
                    <h3 className="subtitle">{t('myWork.categ2.title')}</h3>
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
                    <h3 className="subtitle">{t('myWork.categ3.title')}</h3>
                    <Games gameList={{ games }} />
                </div>
            </div>
            <div className="mb-12">
                <h2 className="title">About Me</h2>
            </div>
        </div>
    )
}
