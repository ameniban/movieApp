import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // Load all VITE_ env variables

  return {
    plugins: [react()],
    define: {
      "import.meta.env": env, // Expose all VITE_ prefixed env variables
    },
  };
});
