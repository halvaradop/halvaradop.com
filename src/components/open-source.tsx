import Link from "next/link"
import Image from "next/image"
import { MoveUpRight } from "lucide-react"

const OPEN_SOURCE_PROJECTS = [
    {
        title: "Auth.js",
        description:
            "Open-source contributor to Auth.js, working across authentication providers, documentation, examples, issues, and the broader developer experience.",
        img: "/imgs/authjs.png",
        timeline: <span>2024 — 2025</span>,
        link: "https://authjs.dev/",
        repository: "https://github.com/nextauthjs/next-auth",
        keywords: "OAuth, OpenID Connect, Authentication, Documentation, Open Source, Developer Experience",
    },
]

export const OpenSource = () => {
    return (
        <div>
            <h2 className="text-foreground font-bold text-2xl text-center" id="open-source">
                Open Source
            </h2>
            <div className="mt-6 flex flex-col gap-y-8">
                {OPEN_SOURCE_PROJECTS.map((project) => (
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
                                    <MoveUpRight className="size-3" />
                                </Link>
                                <Link
                                    className="flex items-center gap-x-1 text-sm font-medium text-foreground underline decoration-foreground underline-offset-2"
                                    href={project.repository}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    View Repository
                                    <MoveUpRight className="size-3" />
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
