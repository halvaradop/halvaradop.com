const EXPERIENCE = [
    {
        title: "SONDA S.A.S",
        role: "Software Engineer Intern",
        timeline: <span>January 2026 — August 2026</span>,
        description:
            "Completed my professional internship as part of a software development team working on a healthcare application for managing patient medical records within Colombia's healthcare system. \n\n\rContributed to the development and maintenance of the existing application by building user interfaces, forms, reports, and new modules using Oracle APEX, SQL, and PL/SQL. \nAlso participated in the migration of multiple modules from the original Visual Basic 6 application to Oracle APEX, while implementing new features, requirements, adjustments, and ongoing maintenance.",
        tecnologies: ["Oracle APEX", "SQL", "PL/SQL"],
    },
    {
        title: "Ache Engineering GmbH",
        role: "Freelance Software Engineer",
        timeline: <span>December 2024 — July 2025</span>,
        description:
            "Worked as a freelance developer on a web application for evaluating material corrosion in solar energy systems, including solar panels, mounting structures, and related components. The project was designed for use across the European market and required consideration of multiple international and country-specific standards.",
        tecnologies: ["React", "Supabase", "Vercel"],
    },
]

export const Experience = () => {
    return (
        <div>
            <h2 className="text-foreground font-bold text-2xl text-center" id="experience">
                Experience
            </h2>
            <div className="mt-6 flex flex-col gap-y-8">
                {EXPERIENCE.map((project) => (
                    <article className="space-y-4" key={project.title}>
                        <div className="w-11/12 max-w-2xl mx-auto space-y-3 text-base text-muted-foreground">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg text-foreground font-semibold">{project.title}</h3>
                                <span className="text-sm font-jetbrains-mono">{project.timeline}</span>
                            </div>
                            <p className="text-foreground font-medium">{project.role}</p>
                            <p>{project.description}</p>
                            <p className="text-xs font-jetbrains-mono">{project.tecnologies.join(" — ")}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
