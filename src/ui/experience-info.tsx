import Link from "next/link"
import { LinkIcon } from "lucide-react"
import { Card } from "@halvaradop/ui-card"
import type { ExperienceInfoProps } from "@/lib/@types/props"

export const ExperienceInfo = ({ company, role, duration, responsibilities, website }: ExperienceInfoProps) => {
    return (
        <Card className="flex flex-col space-y-6 border-t-0 border-x-0 border-b shadow-none last:border-b-0">
            <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                <h3 className="flex flex-col items-start">
                    {website ? (
                        <Link className="inline-flex gap-x-2" href={website} target="_blank">
                            {company} <LinkIcon />
                        </Link>
                    ) : null}
                    {website === undefined ? <span>{company}</span> : null}
                    <p className="mt-1 text-sm">{role}</p>
                </h3>
                <span className="mt-2 text-gray text-sm">{duration}</span>
            </div>
            <ul className="mt-1 ml-5 list-disc list-outside li:text-gray li:text-sm">
                {responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                ))}
            </ul>
        </Card>
    )
}
