import { Card } from "@halvaradop/ui-card"
import { TitleSection } from "./title"

export const Leetcode = () => {
    return (
        <Card className="p-0 border-x-0 border-t-0 shadow-none" id="leetcode">
            <TitleSection link="https://leetcode.com/u/halvaradop_/" title="Leetcode">
                <span className="w-[7px] h-px absolute -top-px -left-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -top-px -right-px bg-cross" />
                <span className="w-px h-[7px] absolute -top-px -right-px bg-cross" />

                <span className="w-[7px] h-px absolute -bottom-[0.7px] -left-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -left-px bg-cross" />
                <span className="w-[7px] h-px absolute -bottom-[0.7px] -right-px bg-cross" />
                <span className="w-px h-2.5 absolute -bottom-1.5 -right-px bg-cross" />
            </TitleSection>
            <Card className="dimention-card py-3 px-4 border-y-0 ">
                <ul className="mt-1 ml-5 list-disc list-outside li:text-gray li:text-sm">
                    <li>
                        Solved over 876 problems to enhance core problem-solving skills and algorithmic thinking, with a focus on
                        data structures and advanced algorithms.
                    </li>
                    <li>Achieved a 71% acceptance rate with a best Weekly Contest rank of 5723.</li>
                    <li>
                        Core proficiency in techniques like Two Pointers, Depth-First Search (DFS), and Union Find Algorithms.
                    </li>
                </ul>
            </Card>
        </Card>
    )
}
