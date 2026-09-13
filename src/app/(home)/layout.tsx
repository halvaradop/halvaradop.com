import { Header } from "@/components/header"

export const Layout = ({ children }: LayoutProps<"/">) => {
    return (
        <>
            <Header />
            {children}
            <footer className="my-20">
                <nav className="w-11/12 max-w-2xl mx-auto flex items-center justify-between text-foreground">
                    <span>halvaradop.</span>
                    <span>© 2026</span>
                </nav>
            </footer>
        </>
    )
}

export default Layout
