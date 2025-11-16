import Link from "next/link"
import { LinkIcon } from "lucide-react"
import { Card } from "@halvaradop/ui-card"
import type { TitleSectionProps } from "@/lib/@types/props"

export const TitleSection = ({ title, subtitle, link, children }: TitleSectionProps) => {
    return (
        <Card className="p-0 border-x-0 shadow-none">
            <Card className="dimention-card py-3 px-4  flex flex-col justify-center relative border-y-0 ">
                {link !== undefined ? (
                    <Link className="inline-flex items-center gap-x-2" href={link} target="_blank">
                        {title}
                        <LinkIcon size={18} />
                    </Link>
                ) : (
                    <h2 className="text-xl">{title}</h2>
                )}
                {subtitle !== undefined && <p className="mt-2 text-gray text-sm">{subtitle}</p>}
                {children}
            </Card>
        </Card>
    )
}
