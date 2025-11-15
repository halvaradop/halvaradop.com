import Link from "next/link"
import { LinkIcon } from "lucide-react"
import type { TitleSectionProps } from "@/lib/@types/props"

export const TitleSection = ({ title, subtitle, link }: TitleSectionProps) => {
    return (
        <div className="w-full border-y border-solid border-black-v2">
            <div className="w-11/12 mx-auto p-3 px-4 flex flex-col justify-center border-x border-solid border-black-v2 lg:w-7/12">
                {link !== undefined ? (
                    <Link className="inline-flex items-center gap-x-2" href={link} target="_blank">
                        {title}
                        <LinkIcon size={18} />
                    </Link>
                ) : (
                    <h2 className="text-xl">{title}</h2>
                )}
                {subtitle !== undefined && <p className="mt-2 text-gray text-sm">{subtitle}</p>}
            </div>
        </div>
    )
}
