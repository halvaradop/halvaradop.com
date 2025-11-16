import { Project } from "./project"
import { TitleSection } from "./title"
import { Card } from "@halvaradop/ui-card"

export const Projects = () => {
    return (
        <section id="projects">
            <TitleSection title="Projects">
                <span className="w-[7px] h-px absolute -top-px -left-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -top-px -right-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -right-px bg-cross" />

                <span className="w-[7px] h-px absolute -bottom-[0.7px] -left-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -bottom-[0.7px] -right-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -right-px bg-cross" />
            </TitleSection>
            <Card className="dimention-card p-0 grid divide-y border-y-0  md:grid-cols-2">
                <Project
                    description="A modular, framework-agnostic authentication library inspired by Auth.js, designed to implement secure and fully type-safe OAuth 2.0 flows using a robust cookie-based strategy."
                    duration="October 2025 - Present"
                    image="/aura-auth.png"
                    link="https://aura-stack-auth.vercel.app/docs"
                    repo="https://github.com/aura-stack-ts/auth"
                    technologies={["Aura Stack Auth", "TypeScript", "Next.js", "Fumadocs", "Zod", "Turborepo"]}
                    title="Aura Stack Auth"
                />
                <Project
                    description="A modern, TypeScript-first router and endpoint definition library that provides automatic type inference and first-class middleware composition. Ensures seamless compatibility with Next.js, Nuxt, and SvelteKit by returning native Response objects."
                    duration="October 2025 - Present"
                    image="/aura-router.png"
                    link="https://aura-stack-router.vercel.app/docs"
                    repo="https://github.com/aura-stack-ts/router"
                    technologies={["Aura Stack Router", "TypeScript", "Next.js", "Zod", "Fumadocs"]}
                    title="Aura Stack Router"
                />
                <Project
                    description="A preset of utility classes (animations/utilities) designed to efficiently extend default Tailwind behavior. Demonstrates specialized knowledge in CSS frameworks and front-end styling optimization."
                    duration="November 2024 - Present"
                    image="/tailwindcss-utilities.png"
                    link="https://tailwindcss-utilities.vercel.app/"
                    repo="https://github.com/halvaradop/tailwindcss-utilities"
                    technologies={["TypeScript", "Next.js", "TailwindCSS", "Postcss", "Autoprefixer", "Turborepo"]}
                    title="TailwindCSS Utilities"
                />
                <Project
                    description="A lightweight package publishing 70+ advanced TypeScript utilities for deep object transforms and numeric/string logic. Drastically improves autocomplete, inference accuracy, and developer confidence  in large TypeScript codebases."
                    duration="November 2024 - Present"
                    image="/utility-types.png"
                    link="https://ts-utility-types.vercel.app/docs"
                    repo="https://github.com/halvaradop/ts-utility-types"
                    technologies={["TypeScript", "Next.js", "Fumadocs", "Tsup", "Vitest", "Prettier", "ESLint"]}
                    title="Utility Types"
                />
                <Project
                    description="Created a reusable, themeable component library of 10+ accessible, composable components using advanced patterns (Slot, Compound, Dot). Integrated Turborepo to optimize workflows and reduce build times by 30%."
                    duration="November 2024 - Present"
                    image="/ui-library.png"
                    repo="https://github.com/halvaradop/ui"
                    technologies={["TypeScript", "React", "TailwindCSS", "cva", "Turborepo", "Storybook"]}
                    title="React Component Library"
                />
                <Project
                    description="Collection of 10+ common React hooks for efficient component logic abstraction."
                    duration="January 2025 - Present"
                    image="/hooks.png"
                    repo="https://github.com/halvaradop/hooks"
                    technologies={["TypeScript", "React", "Hooks", "Tsup", "ESLint", "State", "Context API"]}
                    title="Hooks"
                />
            </Card>
        </section>
    )
}
