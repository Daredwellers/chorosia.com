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
    title: string;
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
    subtitle: 'Discharging decibels since 2017.',
    description: 'Chorosia is a progressive sludge metal band from Vienna, Austria.',
    image: {
        src: '/07_Chorosia_by_Martin_Ramisu_2023.jpg',
        alt: 'Chorosia'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Music & Merch',
            href: '/projects'
        },
        {
            text: 'News & Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        // {
        //      text: 'About',
        //     href: '/about'
        // },
        //  {
        //      text: 'Contact',
        //      href: '/contact'
        //  },
        //  {
        //      text: 'Terms',
        //      href: '/terms'
        //  },
        //  {
        //      text: 'Download theme',
        //      href: 'https://github.com/JustGoodUI/dante-astro-theme'
        //  }
    ],
    socialLinks: [
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/@chorosia'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/chorosia.doom'
        },
        {
            text: 'Bandcamp',
            href: 'https://chorosia.bandcamp.com/'
        },
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@chorosia'
        }
    ],
    hero: {
        //   title: 'Chorosia',
        text: "Is it progressive sludge? Is it death/doom? To many, it's unclear what genre niche we belong to but one thing is certain — it's heavy, both sonically and emotionally. Since our foundation in 2017, we've been pushing the envelope of this vaguely described genre called progressive sludge album after album, gig after gig. Think of caveman riffs but the caveman just became self-aware. Essentially, we play the music we want to hear. Iommosphere is where we dwell.",
        image: {
            src: '/07_Chorosia_by_Martin_Ramisu_2023.jpg',
            alt: 'Chorosia photo by Martin Ramisu'
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
        text: 'We only send emails once in a while.',
        formUrl: '#'
    },
    postsPerPage: 4,
    projectsPerPage: 4,
};

export default siteConfig;
