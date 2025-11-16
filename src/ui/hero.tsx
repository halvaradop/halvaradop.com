import { Card } from "@halvaradop/ui-card"

export const Hero = () => {
    return (
        <Card asChild className="dimention-card h-[65dvh] py-6 px-4 text-center content-center border-y-0">
            <section>
                <p>Hi, I&apos;m Hernan Alvarado (halvaradop).</p>
                <p>Frontend Engineer & TypeScript Developer based in Colombia.</p>
                <p className="mt-6 text-gray">
                    I build type-safe, performant, and developer-focused web experiences using Next.js, TypeScript, and modern Web
                    APIs. Driving adoption of modern Web standards and type safety through open-source contributions to Auth.js
                    and creation of the Aura Stack ecosystem.
                </p>
            </section>
        </Card>
    )
}
