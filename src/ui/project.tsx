import type { ProjectProps } from "@/lib/@types/props"
import { ButtonLink } from "./button-link"

export const Project = ({ title, duration, description, technologies, repo, link }: ProjectProps) => {
    return (
        <article className="p-2 py-3 flex flex-col ">
            <div className="mb-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 mb-1.5 text-sm">{duration}</p>
                <p className="text-gray text-sm">{description}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-1">
                {technologies?.map((tech) => (
                    <li key={tech} className="p-1 font-semibold text-xs rounded-md bg-dark">
                        {tech}
                    </li>
                ))}
            </ul>
            <div className="mt-2 space-x-1">
                {link && <ButtonLink href={link}>Website</ButtonLink>}
                {repo && <ButtonLink href={repo}>GitHub</ButtonLink>}
            </div>
        </article>
    )
}
