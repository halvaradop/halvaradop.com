import type { PropsWithChildren } from "react"

export interface ProjectProps {
    title: string
    image?: string
    duration: string
    description: string
    technologies?: string[]
    repo?: string
    link?: string
}

export interface ExperienceInfoProps {
    company: string
    role: string
    duration: string
    responsibilities: string[]
    website?: string
}

export interface EducationInfoProps {
    institution: string
    degree: string
    duration: string
}

export interface TitleSectionProps extends PropsWithChildren {
    title: string
    subtitle?: string
    link?: string
}
