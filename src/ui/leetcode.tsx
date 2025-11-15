import { TitleSection } from "./title"

export const Leetcode = () => {
    return (
        <section className="border-b border-solid border-black-v2" id="leetcode">
            <TitleSection
                link="https://leetcode.com/u/halvaradop_/"
                subtitle="Solved over 876 problems on Leetcode to enhance problem-solving skills and algorithmic thinking with a focus on data structures and algorithms."
                title="Leetcode"
            />
            <div className="w-11/12 mx-auto p-3 px-4 border-x border-solid border-black-v2 lg:w-7/12">
                <ul className="mt-1 ml-5 list-disc list-outside li:text-gray li:text-sm">
                    <li>Solved 876 problems</li>
                    <li>Acceptance rate: 71%</li>
                    <li>My Best rank was 5723 in Weekly Contest 409</li>
                    <li>Lover of Two Pointers, Depth First Search and Union Find algorithms.</li>
                </ul>
            </div>
        </section>
    )
}
