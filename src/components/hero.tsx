import { XIcon } from "@/components/icons/x"
import { GmailIcon } from "@/components/icons/gmail"
import { GitHubIcon } from "@/components/icons/github"
import { LinkedinIcon } from "@/components/icons/linkedin"
import Link from "next/link"

const contactLinks = [
    { icon: <GitHubIcon />, href: "https://github.com/halvaradop" },
    { icon: <LinkedinIcon />, href: "https://www.linkedin.com/in/halvaradop/" },
    { icon: <XIcon />, href: "https://x.com/halvaradop_" },
    { icon: <GmailIcon />, href: "mailto:halvaradop.dev@gmail.com" },
]

export const Hero = () => {
    return (
        <div className="w-11/12 max-w-2xl mx-auto space-y-3">
            <h1 className="text-2xl md:text-4xl text-foreground font-extrabold">
                Hey, I'm Hernan Alvarado. Software Engineer and & Open-Source Maintainer
            </h1>
            <p className="text-lg font-normal leading-6 text-muted-foreground">
                Building software for developers, Open-Source maintainer and contributor with a focus on TypeScript, developer
                experience and Web standards.
            </p>
            <div className="flex items-center gap-x-2 text-foreground">
                {contactLinks.map((link, index) => (
                    <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}
