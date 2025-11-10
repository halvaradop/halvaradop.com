import Link from "next/link"
import { LinkIcon } from "lucide-react"
import type { ExperienceInfoProps } from "@/lib/@types/props"

export const ExperienceInfo = ({ company, role, duration, responsibilities, website }: ExperienceInfoProps) => {
    return (
        <li className="flex flex-col">
            <div className="flex items-center justify-between">
                <h3 className="inline-flex items-center gap-x-2">
                    {website ? (
                        <Link className="inline-flex gap-x-2" href={website} target="_blank">
                            {company} <LinkIcon />
                        </Link>
                    ) : null}
                    {website === undefined ? <span>{company}</span> : null}
                    {" | "}
                    <p>{role}</p>
                </h3>
                <span>{duration}</span>
            </div>
            <ul className="mt-1 ml-5 list-disc list-outside li:text-gray li:text-sm">
                {responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                ))}
            </ul>
        </li>
    )
}
