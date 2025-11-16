import { Card } from "@halvaradop/ui-card"
import { ExperienceInfo } from "./experience-info"
import { TitleSection } from "./title"

export const Experience = () => {
    return (
        <section id="open-source">
            <TitleSection title="Open Source & Experience">
                <span className="w-[7px] h-px absolute -top-px -left-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -top-px -right-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -right-px bg-cross" />

                <span className="w-[7px] h-px absolute -bottom-[0.7px] -left-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -bottom-[0.7px] -right-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -right-px bg-cross" />
            </TitleSection>
            <Card asChild className="dimention-card p-0 border-y-0">
                <ul>
                    <ExperienceInfo
                        company="Auth.js"
                        duration="June 2024 - Present"
                        role="Open Source Contributor"
                        website="https://authjs.dev/"
                        responsibilities={[
                            "Contributed 30+ merged PRs focused on documentation, examples, configurations, and fixes that improved onboarding for thousands of developers.",
                            "Added new OAuth providers (Figma and Bitbucket) to @auth/core, expanding provider coverage in one of the most widely used authentication libraries.",
                            "Authored 2% of new documentation and examples, clarifying common flows and reducing integration friction.",
                            "Reviewed community contributions ~5 PRs and answered 10-15+ issues, helping developers debug and understand AuthJs behavior.",
                        ]}
                    />
                    <ExperienceInfo
                        company="Aura Stack"
                        duration="August 2025 - Present"
                        role="Creator & Maintainer"
                        website="https://github.com/aura-stack-ts"
                        responsibilities={[
                            "Founded Aura Stack, a TypeScript-first ecosystem of libraries focused on routing, authentication, and developer experience.",
                            "Developed Aura Router, a type-safe routing library for React and Next.js, enhancing navigation with compile-time safety and improved DX.",
                            "Built Aura Auth, a flexible authentication solution integrating seamlessly with Auth.js, prioritizing type safety and ease of use.",
                            "Authored comprehensive documentation and guides, facilitating adoption and community contributions.",
                        ]}
                    />
                    <ExperienceInfo
                        company="Ache Engineering GmbH"
                        duration="December 2024 - July 2025"
                        role="Frontend Software Engineer (Freelance)"
                        responsibilities={[
                            "Designed, built, and maintained soild measurement platforms (using React and Supabase) for a German company.",
                            "Implemented industry standards for soil measurements, including ISO 9223, Merkblatt 400, and Werksnorm: Magnelis.",
                            "Collaborated with cross-functional teams to deliver high-quality software solutions that met client requirements and deadlines.",
                        ]}
                    />
                </ul>
            </Card>
        </section>
    )
}
