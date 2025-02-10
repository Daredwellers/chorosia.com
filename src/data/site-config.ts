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
            text: 'Albums',
            href: '/projects'
        },
        {
            text: 'News & Blog',
            href: '/blog'
        },
        //    {
        //      text: 'Tags',
        //    href: '/tags'
        // }
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
        title: 'Chorosia',
        text: "Chorosia is a progressive sludge metal band from Vienna, Austria. The band was formed in 2017 and has since released two full-length albums and an EP. Chorosia's music is characterized by its heavy riffs, complex rhythms, and dark atmospheres. The band's lyrics explore themes of existentialism, nihilism, and the human condition. Chorosia has played numerous shows in Austria and Europe and has gained a reputation for its intense live performances. The band is currently working on new material and plans to release a new album in the near future.",
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
    //  subscribe: {
    //       title: 'Subscribe to Dante Newsletter',
    //      text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 1,
    projectsPerPage: 4,
};

export default siteConfig;
