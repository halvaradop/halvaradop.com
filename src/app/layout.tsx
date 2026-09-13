import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./global.css"

const inter = Inter({
    subsets: ["latin"],
})

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
    title: "Hernan Alvarado",
    description: "Hernan Alvarado's personal website and portfolio.",
}

const Layout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en" className={`${inter.className} ${jetBrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen noise relative bg-primary scrollbar:w-1.5 thumb:rounded-2xl thumb:bg-gray/30">
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default Layout
