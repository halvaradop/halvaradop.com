import Link from "next/link"
import { LinkIcon } from "lucide-react"

export const Leetcode = () => {
    return (
        <section>
            <h2 className="text-xl">
                <Link className="inline-flex items-center gap-x-2" href="https://leetcode.com/u/halvaradop_/" target="_blank">
                    Leetcode
                    <LinkIcon />
                </Link>
            </h2>
            <p className="mt-2 text-gray text-sm">
                Solved over 876 problems on Leetcode to enhance problem-solving skills and algorithmic thinking with a focus on
                data structures and algorithms.
            </p>
            <ul className="mt-1 ml-5 list-disc list-outside li:text-gray li:text-sm">
                <li>Solved 876 problems</li>
                <li>Acceptance rate: 71%</li>
                <li>My Best rank was 5723 in Weekly Contest 409</li>
                <li>Lover of Two Pointers, Depth First Search and Union Find algorithms.</li>
            </ul>
        </section>
    )
}
