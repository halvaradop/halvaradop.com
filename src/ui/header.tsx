import Link from "next/link"
import { Card } from "@halvaradop/ui-card"

export const Header = () => {
    return (
        <Card asChild className="p-0 border-t-0 border-x-0 shadow-none">
            <header>
                <Card className="dimention-card relative border-b-0 base:flex base:items-center base:justify-between">
                    <h1 className="font-bold text-center">Hernan Alvarado</h1>
                    <ul className="w-full mt-4 text-gray text-sm flex items-center justify-center flex-wrap gap-x-6 gap-y-2 base:w-auto base:m-0">
                        <li>
                            <Link href="">home</Link>
                        </li>
                        <li>
                            <Link href="#projects">projects</Link>
                        </li>
                        <li>
                            <Link href="#open-source">open source</Link>
                        </li>
                        <li>
                            <Link href="#about">about</Link>
                        </li>
                        <li>
                            <Link href="#contact">contact</Link>
                        </li>
                    </ul>
                    <span className="w-2.5 h-px absolute -bottom-[0.7px] -left-1.5 bg-cross" />
                    <span className="w-px h-2.5 absolute -bottom-1.5 -left-px bg-cross" />
                    <span className="w-2.5 h-px absolute -bottom-[0.7px] -right-1.5 bg-cross" />
                    <span className="w-px h-2.5 absolute -bottom-1.5 -right-px bg-cross" />
                </Card>
            </header>
        </Card>
    )
}
