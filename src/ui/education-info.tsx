import type { EducationInfoProps } from "@/lib/@types/props"

export const EducationInfo = ({ institution, degree, duration }: EducationInfoProps) => {
    return (
        <li className="flex items-center justify-between">
            <div>
                <h3>{institution}</h3>
                <p className="text-gray text-sm">{degree}</p>
            </div>
            <span>{duration}</span>
        </li>
    )
}
