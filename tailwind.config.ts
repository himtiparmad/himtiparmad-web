import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			],
  			main: [
  				'MyFont',
  				'sans-serif'
  			]
  		},
  		colors: {
  			brand: {
  				main: '#0066FF',
  				dark: '#202884',
  				light: '#4300FF',
  				subtle: '#BEC0FF'
  			},
  			state: {
  				error: {
  					main: '#FF3B3B',
  					dark: '#E53535',
  					light: '#FF5C5C',
  					subtle: '#FF8080'
  				},
  				warning: {
  					main: '#FFCC00',
  					dark: '#E5B800',
  					light: '#FDDD48',
  					subtle: '#FDED72'
  				},
  				info: {
  					main: '#0063F7',
  					dark: '#004FC4',
  					light: '#5B8DEF',
  					subtle: '#9DBFF9'
  				},
  				success: {
  					main: '#06C270',
  					dark: '#05A660',
  					light: '#39D98A',
  					subtle: '#57EBA1'
  				}
  			},
  			dark: {
  				main: '#3A3A3C',
  				dark: '#6B7588',
  				light: '#8F90A6',
  				subtle: '#C7C9D9',
  				himti: '#121316'
  			},
  			light: {
  				main: '#DDE5E9',
  				dark: '#EBEBF0',
  				light: '#F2F2F5',
  				subtle: '#FAFAFC'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
