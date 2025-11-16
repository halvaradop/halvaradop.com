import { Card } from "@halvaradop/ui-card"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer id="contact">
            <Card className="p-0 border-x-0 border-t-0 shadow-none">
                <Card className="dimention-card py-3 px-4 text-center relative flex flex-col justify-center border-y-0">
                    hernanvid123@gmail.com
                    <span className="w-[7px] h-px absolute -top-px -left-px bg-cross" />
                    <span className="w-px h-[7px] absolute -top-px -left-px bg-cross" />
                    <span className="w-[7px] h-px absolute -top-px -right-px bg-cross" />
                    <span className="w-px h-[7px] absolute -top-px -right-px bg-cross" />
                    <span className="w-[7px] h-px absolute -bottom-[0.7px] -left-px bg-cross" />
                    <span className="w-px h-2.5 absolute -bottom-1.5 -left-px bg-cross" />
                    <span className="w-[7px] h-px absolute -bottom-[0.7px] -right-px bg-cross" />
                    <span className="w-px h-2.5 absolute -bottom-1.5 -right-px bg-cross" />
                </Card>
            </Card>
            <Card className="dimention-card p-0 text-center text-gray grid grid-cols-2 items-center border-y-0 sm:grid-cols-4">
                <Link
                    className="p-3 px-4 border-r border-b border-solid border-border sm:border-b-0"
                    href="https://www.linkedin.com/in/halvaradop"
                >
                    linkedin
                </Link>
                <Link
                    className="p-3 px-4 border-b border-solid border-border sm:border-b-0 sm:border-r"
                    href="https://github.com/halvaradop"
                >
                    github
                </Link>
                <Link className="p-3 px-4 border-r border-solid border-border" href="https://x.com/halvaradop_">
                    twitter
                </Link>
                <Link className="p-3 px-4" href="https://leetcode.com/u/halvaradop_/">
                    leetcode
                </Link>
            </Card>
            <Card asChild className="dimention-card h-[30dvh] text-gray text-2xl text-center content-center uppercase">
                <p>Ready to Build? Let&apos;s Connect!</p>
            </Card>
            <Card asChild className="dimention-card py-3 px-4 text-gray text-sm text-center content-center border-y-0">
                <p>&copy; 2025 Hernan Alvarado (halvaradop).</p>
            </Card>
        </footer>
    )
}
