import { TitleSection } from "./title"

export const About = () => {
    return (
        <section className="" id="about">
            <TitleSection title="About" />
            <p className="w-11/12 mx-auto p-3 px-4 text-gray text-sm border-x border-solid border-black-v2 lg:w-7/12">
                Frontend Software Engineer with hands-on experience building scalable and accessible web applications using React,
                Next.js, and TypeScript.. In my free time, I’m also an Open Source Contributor at Auth.js.
            </p>
        </section>
    )
}
