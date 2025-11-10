import Link from "next/link"
import type { ButtonLinkProps } from "@/lib/@types/props"

export const ButtonLink = ({ href, children }: ButtonLinkProps) => {
    return (
        <Link
            className="h-6 px-2 inline-flex items-center text-black text-sm font-medium border border-solid border-white rounded-md bg-white"
            href={href}
            target="_blank"
        >
            {children}
        </Link>
    )
}
