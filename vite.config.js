import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { SvelteKitPWA } from "@vite-pwa/sveltekit"

export default defineConfig({
    plugins: [
        sveltekit(),
        SvelteKitPWA({
            filename: "sw.js",
            manifestFilename: "manifest.json",
            registerType: "autoUpdate",
            manifest: {
                name: "21!",
                short_name: "21",
                // description: "",
                icons: [
                    {
                        sizes: "192x192",
                        src: "/icon/192.png",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        sizes: "256x256",
                        src: "/icon/256.png",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
                id: "?_=21@ch1ck.xyz",
                display: "standalone",
                lang: "ko",
                background_color: "#4485bf",
                theme_color: "#4485bf",
            },
        }),
    ],
})
