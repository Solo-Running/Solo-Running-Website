import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'light-grey': 'var(--light-grey)',
  			'dark-grey': 'var(--dark-grey)',
  			'moss-green': 'var(--moss-green)',
  			'lime-green': 'var(--lime-green)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			sans: "var(--font-instrument-sans)",
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
