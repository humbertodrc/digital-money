import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"landing-image": "url('/img/bg-digital-money.webp')",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			primary: {
				DEFAULT: "#C1FD35",
			},
			secondary: {
				DEFAULT: "#3A393E",
			},
			tertiary: {
				DEFAULT: "#EEEAEA",
			},
			"black-primary": {
				DEFAULT: "#201F22",
			},
			error: {
				DEFAULT: "#EE3838",
			},
			gray: {
				DEFAULT: "#CECECE",
			},
		},
		fontSize: {
			base: ["1rem", "1.5rem"], // 16px
			sm: ["0.875rem", "1.25rem"], // 14px
			md: ["1.125rem", "1.75rem"], // 18px
			lg: ["1.25rem", "1.75rem"], // 20px
			xl: ["1.5rem", "2rem"], // 24px
			"2xl": ["2rem", "2.5rem"], // 32px
			"3xl": ["2.5rem", "3rem"], // 40px
			"4xl": ["3rem", "3.5rem"], // 48px
			"5xl": ["4rem", "4.5rem"], // 64px
			"6xl": ["4.5rem", "5rem"], // 72px
		},
	},
	plugins: [],
};
export default config;
