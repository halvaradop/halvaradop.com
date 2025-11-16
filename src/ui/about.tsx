import { Card } from "@halvaradop/ui-card"
import { TitleSection } from "./title"

export const About = () => {
    return (
        <section className="relative" id="about">
            <TitleSection title="About">
                <span className="w-[7px] h-px absolute -top-px -left-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -top-px -right-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -right-px bg-cross" />

                <span className="w-[7px] h-px absolute -bottom-[0.8px] -left-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -bottom-[0.8px] -right-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -right-px bg-cross" />
            </TitleSection>
            <Card className="dimention-card h-[50dvh] py-3 px-4 text-gray text-sm text-center content-center border-y-0">
                <span>
                    I&apos;m a Frontend Software Engineer focused on building fast, scalable, and type-safe web applications using
                    Next.js, React, and TypeScript. My passion is driving productivity: I care deeply about Developer Experience
                    (DX), API design, documentation, and engineering patterns that enable teams to build better, faster.
                </span>
                <span className="mt-6 block">
                    I am the creator and maintainer of Aura Stack, a TypeScript-first ecosystem of open-source libraries built on
                    modern Web APIs. My work spans critical areas including routing, authentication, reusable UI components,
                    utility types, and DX tooling that collectively improve application reliability and maintainability at scale.
                </span>
            </Card>
        </section>
    )
}
