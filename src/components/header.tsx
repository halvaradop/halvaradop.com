import Link from "next/link"

export const Header = () => {
    return (
        <header className="w-11/12 max-w-2xl mx-auto sticky top-4 z-20">
            <nav className="flex items-center justify-between overflow-hidden relative text-sm font-medium text-foreground border border-gray/20 rounded-full noise bg-primary">
                <Link className="py-2 px-3 relative z-20 link" href="#about">
                    About
                </Link>
                <Link className="py-2 px-3 relative z-20" href="#experience">
                    Experience
                </Link>
                <Link className="py-2 px-3 relative z-20" href="#open-source">
                    Open Source
                </Link>
                <Link className="py-2 px-3 relative z-20" href="#projects">
                    Projects
                </Link>
            </nav>
        </header>
    )
}
