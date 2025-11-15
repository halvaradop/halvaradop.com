import type { DividerProps } from "@/lib/@types/props"

export const Divider = ({ length }: DividerProps) => {
    return (
        <div className="w-full flex items-center justify-center">
            {Array.from({ length }).map((_, index) => (
                <span key={index} className="w-5 h-18 block border-l border-solid border-black-v2" />
            ))}
        </div>
    )
}
