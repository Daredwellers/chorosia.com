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
    subtitle: 'Prog-Sludge from Vienna, AT',
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
        // title: ' ',
        text: "We're a band from Vienna, Austria. We play prog-sludge. We're Chorosia.",
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
