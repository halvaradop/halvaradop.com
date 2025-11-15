import { ExperienceInfo } from "./experience-info"
import { TitleSection } from "./title"

export const Experience = () => {
    return (
        <section id="experience">
            <TitleSection title="Experience" />
            <ul className="w-11/12 mx-auto p-3 px-4 space-y-6 border-x border-solid border-black-v2 lg:w-7/12">
                <ExperienceInfo
                    company="Auth.js"
                    duration="June 2024 - Present"
                    role="Open Source Contributor"
                    website="https://authjs.dev/"
                    responsibilities={[
                        "Added Bitbucket and Figma OAuth integrations to the platform, increasing supported providers.",
                        "Created clear setup documentation and examples that helped reduce onboarding time for new contributors by ~15%.",
                        " Reviewed and merged 30+ PRs, improving code quality, documentation, and consistency across the codebase.",
                    ]}
                />
                <ExperienceInfo
                    company="Ache Engineering GmbH"
                    duration="December 2024 - July 2025"
                    role="Frontend Software Engineer (Freelance)"
                    responsibilities={[
                        "Designed, built, and maintained measurement platforms (using React and Supabase) for a German company.",
                    ]}
                />
            </ul>
        </section>
    )
}
