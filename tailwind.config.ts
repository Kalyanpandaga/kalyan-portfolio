import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					light: 'hsl(var(--secondary-light))',
					dark: 'hsl(var(--secondary-dark))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom Portfolio Colors
				'hero-gradient': {
					start: 'hsl(var(--hero-gradient-start))',
					end: 'hsl(var(--hero-gradient-end))'
				},
				'skill-bg': 'hsl(var(--skill-bg))',
				'project-hover': 'hsl(var(--project-card-hover))',
				'shadow-soft': 'hsl(var(--shadow-soft))',
				'shadow-teal': 'hsl(var(--shadow-teal))'
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-end)) 100%)',
				'button-gradient': 'linear-gradient(90deg, hsl(var(--secondary)) 0%, hsl(var(--secondary-light)) 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			boxShadow: {
				'soft': '0 4px 6px -1px hsl(var(--shadow-soft) / 0.1), 0 2px 4px -1px hsl(var(--shadow-soft) / 0.06)',
				'teal': '0 4px 6px -1px hsl(var(--shadow-teal) / 0.2), 0 2px 4px -1px hsl(var(--shadow-teal) / 0.1)',
				'card': '0 1px 3px 0 hsl(var(--shadow-soft) / 0.1), 0 1px 2px 0 hsl(var(--shadow-soft) / 0.06)'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "hsl(220 50% 25%)",
					"secondary": "hsl(190 75% 45%)",
					"accent": "hsl(190 50% 92%)",
					"neutral": "hsl(220 15% 15%)",
					"base-100": "hsl(0 0% 100%)",
					"base-200": "hsl(220 10% 96%)",
					"base-300": "hsl(220 15% 85%)",
					"info": "hsl(190 75% 45%)",
					"success": "hsl(142 76% 36%)",
					"warning": "hsl(38 92% 50%)",
					"error": "hsl(0 84% 60%)"
				},
				dark: {
					"primary": "hsl(190 75% 65%)",
					"secondary": "hsl(220 45% 25%)",
					"accent": "hsl(220 15% 18%)",
					"neutral": "hsl(220 10% 95%)",
					"base-100": "hsl(220 25% 8%)",
					"base-200": "hsl(220 20% 12%)",
					"base-300": "hsl(220 15% 20%)",
					"info": "hsl(190 75% 65%)",
					"success": "hsl(142 76% 46%)",
					"warning": "hsl(38 92% 60%)",
					"error": "hsl(0 75% 55%)"
				}
			}
		]
	},
} satisfies Config;
