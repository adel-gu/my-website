import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        whiteice: 'var(--white--ice)',
        solitude: 'var(--solitude)',
        tundora: 'var(--tundora)',
        codgray: 'var(--cod--gray)',
        mineshaft: 'var(--mine--shaft)',
        dovegray30: 'var(--dove--gray-30)',
        oceangreen: 'var(--ocean--green)',
        celtic: 'var(--celtic)',
        bush: 'var(--bush)',
        blackbean: 'var(--black--bean)',
        junglegreen: 'var(--jungle--green)',
        greenpea: 'var(--green--pea)',
        jewel: 'var(--jewel)',
        dodgerblue: 'var(--dodger--blue)',
        azureradiance: 'var(--azure--radiance)',
        scienceblue: 'var(--science--blue)',
        endeavour: 'var(--endeavour)',
        downriver: 'var(--downriver)',
        bluezodiac: 'var(--blue--zodiac)',
        amethyst: 'var(--amethyst)',
        fuchsiapink: 'var(--fuchsia--pink)',
        cerise: 'var(--cerise)',
        disco: 'var(--disco)',
        wineberry: 'var(--wine--berry)',
        loulou: 'var(--loulou)',
        revolver: 'var(--revolver)',
        antiquebronze: 'var(--antique--bronze)',
        bracken: 'var(--bracken)',
        valencia: 'var(--valencia)',
        brickred: 'var(--brick--red)',
        crownofthorns: 'var(--crown-of--thorns)',
        roseofsharon: 'var(--rose-of--sharon)',
        brown: 'var(--brown)',
        supernova: 'var(--supernova)',
        tanhide: 'var(--tan--hide)',
        silverchalice: 'var(--silver--chalice)',
      },
      fontFamily: {
        Inter: ['var(--font-inter)'],
        Silkscreen: ['var(--font-silkscreen)'],
      },

      backgroundImage: {
        main: 'url("/bg-img.png")',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))',
          },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
