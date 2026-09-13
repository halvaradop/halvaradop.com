import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { OpenSource } from "@/components/open-source"
import { Projects } from "@/components/projects"
import { Hero } from "@/components/hero"

const IndexPage = () => {
    return (
        <main className="mt-10 relative z-10 space-y-20">
            <Hero />
            <About />
            <Experience />
            <OpenSource />
            <Projects />
        </main>
    )
}

export default IndexPage
