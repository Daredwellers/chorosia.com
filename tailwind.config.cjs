const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
            serif: ['Newsreader Variable', ...defaultTheme.fontFamily.serif]
        },
        extend: {
            colors: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)',
                bgMain: 'rgb(var(--color-bg-main) / <alpha-value>)',
                bgMuted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
                borderMain: 'rgb(var(--color-border-main) / <alpha-value>)'
            },
            typography: (theme) => ({
                dante: {
                    css: {
                        '--tw-prose-body': theme('colors.main'),
                        '--tw-prose-headings': theme('colors.main'),
                        '--tw-prose-lead': theme('colors.main'),
                        '--tw-prose-links': theme('colors.main'),
                        '--tw-prose-bold': theme('colors.main'),
                        '--tw-prose-counters': theme('colors.main'),
                        '--tw-prose-bullets': theme('colors.main'),
                        '--tw-prose-hr': theme('colors.borderMain'),
                        '--tw-prose-quotes': theme('colors.main'),
                        '--tw-prose-quote-borders': theme('colors.borderMain'),
                        '--tw-prose-captions': theme('colors.main'),
                        '--tw-prose-code': theme('colors.main'),
                        '--tw-prose-pre-code': theme('colors.zinc.100'),
                        '--tw-prose-pre-bg': theme('colors.zinc.800'),
                        '--tw-prose-th-borders': theme('colors.borderMain'),
                        '--tw-prose-td-borders': theme('colors.borderMain')
                    }
                }
            })
        }
    },
    plugins: [require('@tailwindcss/typography')],
};
