import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#111318",
          900: "#171a21",
          800: "#232731"
        },
        sand: {
          50: "#f7f4ee",
          100: "#ece4d7"
        },
        bronze: {
          500: "#b9823c",
          600: "#93652f"
        },
        sage: {
          600: "#4f675f"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
