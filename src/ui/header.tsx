import Link from "next/link"

export const Header = () => {
    return (
        <header className="w-full">
            <div className="w-11/12 mx-auto py-6 px-4 border-x border-solid border-black-v2 base:flex base:items-center base:justify-between lg:w-7/12">
                <h1 className="font-bold text-center">Hernan Alvarado</h1>
                <ul className="w-full mt-4 text-gray flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
                    <li>
                        <Link href="">Home</Link>
                    </li>
                    <li>
                        <Link href="#experience">Experience</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#leetcode">Leetcode</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
