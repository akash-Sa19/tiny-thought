import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // with plugins, we can extent the classes provided by the base tailwindcss package
  plugins: [
    // this plugin is installed as a package in the app
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
export default config;
