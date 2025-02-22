import { Games } from '@/app/_componments/games'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
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
            tag: '#Interactive Design #Website Development',
        },
        {
            text: t('myWork.categ2.content2'),
            link: 'https://udnhealth-hd.com/HD',
            tag: '#Website Design & Development',
        },
        {
            text: t('myWork.categ2.content3'),
            link: 'https://www.cottonfieldfarm.com/',
            tag: '#Website Design & Development',
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
        <>
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
            </div>
            <div className="wrapper">
                <div className="mb-8">
                    <h2 className="title">{t('aboutMe.title')}</h2>
                    <div className="grid grid-cols-4 gap-4 md:gap-0">
                        <Image
                            src="/assets/images/profile.jpg"
                            // layout="responsive"
                            width={400}
                            height={400}
                            alt="profile"
                            className="game col-span-3 sm:col-span-1 grayscale w-full object-cover aspect-[3/4] brightness-100 mb-4"
                        ></Image>
                        <div
                            className={clsx('col-start-2 md:col-start-3 col-end-5 lg:col-end-4', {
                                'leading-relaxed': resolvedParams.lng == 'en',
                                'leading-loose': resolvedParams.lng == 'zh',
                            })}
                        >
                            <p className={resolvedParams.lng == 'en' ? 'mb-4' : 'mb-6'}>{t('aboutMe.content1')}</p>
                            <p>{t('aboutMe.content2')}</p>
                        </div>
                        <div className="col-start-4"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
