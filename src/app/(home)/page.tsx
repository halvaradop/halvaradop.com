import { Header } from "@/ui/header"
import { About } from "@/ui/about"
import { Experience } from "@/ui/experience"
import { Education } from "@/ui/education"
import { Projects } from "@/ui/projects"
import { Leetcode } from "@/ui/leetcode"

const IndexPage = () => {
    return (
        <section className="w-11/12 py-26 mx-auto max-w-3xl space-y-10">
            <Header />
            <About />
            <Experience />
            <Projects />
            <Education />
            <Leetcode />
        </section>
    )
}

export default IndexPage
