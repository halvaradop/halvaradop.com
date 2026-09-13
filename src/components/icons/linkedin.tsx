import type { ComponentProps } from "react"

export interface LinkedinIconProps extends Omit<ComponentProps<"svg">, "width" | "height" | "color"> {
    size?: number | string
    color?: string
}

export const LinkedinIcon = ({ size = 24, color = "currentColor", className, style, ...props }: LinkedinIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={size}
            height={size}
            fill="none"
            aria-hidden="true"
            focusable="false"
            className={className}
            style={{
                display: "inline-block",
                verticalAlign: "middle",
                flexShrink: 0,
                ...style,
            }}
            {...props}
        >
            <path
                fill={color}
                d="M80.667 14H19.315C16.381 14 14 16.325 14 19.188v61.617C14 83.672 16.381 86 19.315 86h61.352C83.603 86 86 83.672 86 80.805V19.188C86 16.325 83.603 14 80.667 14M35.354 75.354H24.67V40.995h10.684zm-5.342-39.057a6.19 6.19 0 0 1-6.19-6.194a6.189 6.189 0 1 1 12.379 0a6.194 6.194 0 0 1-6.189 6.194M75.35 75.354H64.683V58.646c0-3.986-.078-9.111-5.551-9.111c-5.558 0-6.405 4.341-6.405 8.822v16.998H42.052v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549c10.806 0 12.802 7.114 12.802 16.369v18.847z"
            />
        </svg>
    )
}

LinkedinIcon.displayName = "LinkedinIcon"

export default LinkedinIcon
