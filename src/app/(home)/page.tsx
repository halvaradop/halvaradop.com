import { Header } from "@/ui/header"
import { About } from "@/ui/about"
import { Experience } from "@/ui/experience"
import { Projects } from "@/ui/projects"
import { Leetcode } from "@/ui/leetcode"
import { Footer } from "@/ui/footer"
import { Hero } from "@/ui/hero"

const IndexPage = () => {
    return (
        <section>
            <Header />
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Leetcode />
            <Footer />
        </section>
    )
}

export default IndexPage
