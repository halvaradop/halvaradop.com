import type { ComponentProps } from "react"

export interface GmailIconProps extends Omit<ComponentProps<"svg">, "width" | "height" | "color"> {
    size?: number | string
    color?: string
}

export const GmailIcon = ({ size = 24, color = "currentColor", className, style, ...props }: GmailIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
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
                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"
            />
        </svg>
    )
}

GmailIcon.displayName = "GmailIcon"

export default GmailIcon
