export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string | Image;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Chorosia',
    subtitle: 'Prog-Sludge from Vienna, AT founded 2017. ',
    description: 'Chorosia is a prog-sludge metal band from Vienna, Austria.',
    image: {
        src: '/07_Chorosia_by_Martin_Ramisu_2023.jpg',
        alt: 'Chorosia // Stray Dogs OUT NOW!'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Music',
            href: '/projects'
        },
        {
            text: 'News',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        //    {
        //        text: 'Download theme',
        //        href: 'https://github.com/JustGoodUI/dante-astro-theme'
        //    }
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/chorosia/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/chorosia.doom/'
        },
        {
            text: 'YouTube',
            href: 'https://youtube.com/@chorosia/'
        },
        {
            text: 'Bandcamp',
            href: 'https://chorosia.bandcamp.com/'
        }
    ],
    hero: {
        title: "About:",
        text: "Chorosia is a prog/post-sludge metal band from Vienna, Austria. The band was founded in 2017 by Anto Pranjić (guitars/vocals), Florian Zeus (guitars), Christian Umkehrer (bass), and Gregory Reinig (drums). Already the following year, in May 2018, Chorosia independently released their first, self-titled, album which was welcomed with positive reviews by various underground music critics, some even naming it an honorable mention for the metal album of the year. After doing a number of local dates to promote the album which included playing before or after various well-known names such as Crowbar, Dopelord, Yob, Neurosis, Black Tusk, and the Skull and a self-booked 8-day tour through southern Europe in 2019, Chorosia released their sophomore studio effort entitled “A Call To Love” through Grazil Records. “A Call To Love” marked the band's departure from the traditional sludge sound into a more experimental ground. Combining elements of sludge, doom, grind, and even folk music, online critics often struggled to put a genre tag to the album. Instead, they praised it for its creativity, weirdness, and even strange beauty. The band’s third studio effort has been released once again via Grazil Records in collaboration with Kvlt und Kaos Productions. The 35-minute EP “Stray Dogs” deepens the experimental efforts and becomes a prog/post-sludge odyssey that pushes the envelope of the genre. Chorosia’s signature blend of intriguing instrumentation and growling vocals once again left the reviewers unable to place the album within one single genre. Instead, reviewers and magazines generally praised the raw power of this unique sounding record describing it as “vicious” and “disturbing in a good way”.",
        image: {
            src: '/07_Chorosia_by_Martin_Ramisu_2023.jpg',
            alt: 'Chorosia-2023-Photo-by-Martin-Ramisu'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Our Newsletter',
        text: 'Subscribe to stay in touch. We only send emails once in a while.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
