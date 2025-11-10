import { EducationInfo } from "./education-info"

export const Education = () => {
    return (
        <section>
            <h2 className="text-xl">Education</h2>
            <ul className="mt-2">
                <EducationInfo degree="System Engineer" duration="2021 - Present" institution="Universidad El Bosque" />
            </ul>
        </section>
    )
}
