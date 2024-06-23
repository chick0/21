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
                        sizes: "128x128",
                        src: "/icon/128.png",
                    },
                    {
                        sizes: "192x192",
                        src: "/icon/192.png",
                    },
                    {
                        sizes: "256x256",
                        src: "/icon/256.png",
                    },
                ],
                id: "?_=21@ch1ck.xyz",
                display: "standalone",
                lang: "ko",
                background_color: "#bbbbbb",
                theme_color: "#bbbbbb",
                shortcuts: [
                    {
                        name: "게임 시작",
                        url: "/game/",
                    },
                ],
            },
        }),
    ],
})
