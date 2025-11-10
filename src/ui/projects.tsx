import { Project } from "./project"

export const Projects = () => {
    return (
        <section>
            <h2 className="text-xl">Projects</h2>
            <p className="mt-2 text-gray text-sm">
                Some of the projects I have worked from packages to open source contributions .
            </p>
            <div className="mt-2 grid md:grid-cols-2 md:gap-5">
                <Project
                    description="Contribute to the Adoption of Auth.js to the JavaScript ecosystem, including reducing onboarding time for new users and adding new OAuth and OIDC providers such as Bitbucket and Figma to the core library, giving new authentication providers to the community."
                    duration="June 2024 - Present"
                    link="https://authjs.dev/"
                    repo="https://github.com/nextauthjs/next-auth"
                    technologies={["Auth.js", "TypeScript", "Next.js", "TailwindCSS", "Nextra", "Framer Motion"]}
                    title="Auth.js (next-auth)"
                />
                <Project
                    description="Open Source authentication and authorization library for modern TypeScript applications. It provides a flexible and secure way to handle user authentication."
                    duration="October 2025 - Present"
                    link="https://aura-stack-auth.vercel.app/docs"
                    repo="https://github.com/aura-stack-ts/auth"
                    technologies={["Aura Stack Auth", "TypeScript", "Next.js", "Fumadocs", "Turborepo", "Zod"]}
                    title="Aura Stack Auth"
                />
                <Project
                    description="It is a modern, TypeScript-first router and endpoint definition library for TypeScript backends that provides support for Next.js, Nuxt, Sveltekit and more."
                    duration="October 2025 - Present"
                    link="https://aura-stack-router.vercel.app/docs"
                    repo="https://github.com/aura-stack-ts/router"
                    technologies={["TypeScript", "Next.js", "Fumadocs", "Zod"]}
                    title="Aura Stack Router"
                />
                <Project
                    description="A powerful collection of utility types designed to enhance your TypeScript development experience. all built from scratch without relying on TypeScript's built-in utility types."
                    duration="November 2024 - Present"
                    link="https://ts-utility-types.vercel.app/docs"
                    repo="https://github.com/halvaradop/ts-utility-types"
                    technologies={["TypeScript"]}
                    title="Utility Types"
                />
                <Project
                    description="A collection of reusable components for React, styled with Tailwind CSS. It simplifies the development of modern and responsive interfaces."
                    duration="November 2024 - Present"
                    repo="https://github.com/halvaradop/ui"
                    technologies={["React", "TypeScript", "TailwindCSS", "cva", "Turborepo", "Storybook"]}
                    title="UI"
                />
                <Project
                    description="Open source TailwindCSS utilities offering a series of tools and plugins to enhance development with TailwindCSS.."
                    duration="November 2024 - Present"
                    link="https://tailwindcss-utilities.vercel.app/"
                    repo="https://github.com/halvaradop/tailwindcss-utilities"
                    technologies={["Next.js", "MDX", "TypeScript", "TailwindCSS", "Postcss", "Autoprefixer", "Turborepo"]}
                    title="TailwindCSS Utilities"
                />
            </div>
        </section>
    )
}
