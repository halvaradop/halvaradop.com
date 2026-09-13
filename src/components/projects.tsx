import Link from "next/link"
import Image from "next/image"
import { Infinity, MoveUpRightIcon } from "lucide-react"

const PROJECTS = [
    {
        title: "Aura UI",
        description:
            "A collection of production-ready authentication components and application blocks designed for Aura Auth applications.",
        img: "/imgs/aura-ui.png",
        timeline: (
            <span className="flex">
                2026 — <Infinity className="w-5 ml-1" />
            </span>
        ),
        link: "https://aura-ui-docs.vercel.app/",
        repository: "https://github.com/aura-stack-ts/ui",
        keywords: "Shadcn/ui — Tailwind — TypeScript — Aura Auth",
    },
    {
        title: "Aura Auth",
        description:
            "A framework-agnostic authentication library designed around Web Request and Response APIs, with a focus on security, type safety, and developer experience.",
        img: "/imgs/aura-auth.png",
        timeline: (
            <span className="flex">
                2025 — <Infinity className="w-5 ml-1" />
            </span>
        ),
        link: "https://aura-stack-auth.vercel.app/",
        repository: "https://github.com/aura-stack-ts/auth",
        keywords: "OAuth — OpenID Connect — JWT — TypeScript — Web Standards",
    },
    {
        title: "Aura Router",
        description:
            "A TypeScript-first router focused on request handling, validation, and typed APIs, and a consistent developer experience across runtimes.",
        img: "/imgs/aura-router.png",
        timeline: (
            <span className="flex">
                2025 — <Infinity className="w-5 ml-1" />
            </span>
        ),
        link: "https://aura-stack-router.vercel.app/",
        repository: "https://github.com/aura-stack-ts/router",
        keywords: "TypeScript — Web Standards — Framework-agnostic — Validation — Client API",
    },
]

export const Projects = () => {
    return (
        <div>
            <h2 className="text-foreground font-semibold text-2xl text-center" id="projects">
                Projects
            </h2>
            <div className="mt-6 flex flex-col gap-y-14">
                {PROJECTS.map((project) => (
                    <article className="space-y-4" key={project.title}>
                        <div className="w-11/12 max-w-2xl mx-auto space-y-3 text-base text-muted-foreground">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg text-foreground font-semibold">{project.title}</h3>
                                <span className="text-sm font-jetbrains-mono">{project.timeline}</span>
                            </div>
                            <p>{project.description}</p>
                            <p className="text-xs font-jetbrains-mono">{project.keywords}</p>
                            <div className="flex gap-x-2">
                                <Link
                                    className="flex items-center gap-x-1 text-sm font-medium text-foreground underline decoration-foreground underline-offset-2"
                                    href={project.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    View Project
                                    <MoveUpRightIcon className="size-3" />
                                </Link>
                                <Link
                                    className="flex items-center gap-x-1 text-sm font-medium text-foreground underline decoration-foreground underline-offset-2"
                                    href={project.repository}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    View Repository
                                    <MoveUpRightIcon className="size-3" />
                                </Link>
                            </div>
                        </div>
                        <Image
                            className="mx-auto aspect-video rounded-lg"
                            width={672}
                            height={400}
                            src={project.img}
                            alt={project.title}
                        />
                    </article>
                ))}
            </div>
        </div>
    )
}
