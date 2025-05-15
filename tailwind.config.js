/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  safelist: [
    'animate-blob1',
    'animate-blob2',
    'animate-blob3',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        "blue-hosta": "#64C4B2",
        "medium-turquoise": "#45C6EE",
        "waikawa-grey": "#526BB1",
        "vivid-cerise": "#DA1D81",
        "bright-sun": "#FED33C",
        "btn-color":"#335b6d",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(10px, -15px) scale(1.05)' },
          '50%': { transform: 'translate(-10px, 10px) scale(0.98)' },
          '75%': { transform: 'translate(5px, -10px) scale(1.02)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-10px, 20px) scale(1.03)' },
          '50%': { transform: 'translate(10px, -10px) scale(0.97)' },
          '75%': { transform: 'translate(-5px, 15px) scale(1.01)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '50%': { transform: 'translate(-50%, -52%) rotate(2deg)' },
        },
      },
      animation: {
        blob1: 'blob1 18s ease-in-out infinite',
        blob2: 'blob2 22s ease-in-out infinite',
        blob3: 'blob3 30s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
