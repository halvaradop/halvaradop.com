import { RootProvider } from "fumadocs-ui/provider/next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({
    subsets: ["latin"],
})

const Layout = ({ children }: LayoutProps<"/">) => {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen bg- scrollbar:w-1.5 track:rounded-2xl thumb:bg-gray/30">
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default Layout
