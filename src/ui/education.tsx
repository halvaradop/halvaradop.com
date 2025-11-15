import { EducationInfo } from "./education-info"
import { TitleSection } from "./title"

export const Education = () => {
    return (
        <section id="education">
            <TitleSection title="Education" />
            <ul className="w-11/12 mx-auto p-3 px-4 space-y-6 border-x border-solid border-black-v2 lg:w-7/12">
                <EducationInfo degree="System Engineer" duration="2021 - Present" institution="Universidad El Bosque" />
            </ul>
        </section>
    )
}
