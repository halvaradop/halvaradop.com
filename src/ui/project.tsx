"use client"
import Link from "next/link"
import Image from "next/image"
import { Button, buttonVariants } from "@halvaradop/ui-button"
import { merge } from "@halvaradop/ui-core"
import type { ProjectProps } from "@/lib/@types/props"
import { GithubIcon } from "lucide-react"

export const Project = ({ title, image, duration, description, technologies, repo, link }: ProjectProps) => {
    return (
        <article className="min-h-[35dvh] p-5 flex flex-col hover:cursor-pointer md:odd:border-r md:nth-[5]:border-b-0">
            <figure className="w-full mb-4 aspect-video">
                {image && <Image src={image} alt={title} width={640} height={360} className="object-cover" />}
            </figure>
            <div className="mb-2">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 mb-1.5 text-sm">{duration}</p>
                <p className="text-gray text-sm">{description}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-1">
                {technologies?.map((tech) => (
                    <li key={tech} className={merge(buttonVariants({ variant: "outline" }), "h-7 p-1 font-medium text-xs")}>
                        {tech}
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex items-center gap-x-4">
                {link !== undefined && (
                    <Button className="h-7 gap-x-2" variant="outline" asChild>
                        <Link href={link} target="_blank">
                            Live
                            <div className="size-2 flex items-center justify-center relative">
                                <span className="size-2 block rounded-full bg-red-400" />
                                <span className="size-full block absolute rounded-full animate-ping bg-red-400" />
                            </div>
                        </Link>
                    </Button>
                )}
                {repo && (
                    <Button className="h-7 gap-x-2" variant="outline" asChild>
                        <Link href={repo} target="_blank">
                            GitHub
                            <GithubIcon size={16} />
                        </Link>
                    </Button>
                )}
            </div>
        </article>
    )
}
