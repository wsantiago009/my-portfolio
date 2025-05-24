const SkillList = ({ content }: { content: String[] }) => {
    return (
        <ul className="skills-wrapper text-sm md:pl-3">
            {content?.map((item, i) => (
                <li key={i} className="md:list-disc mb-1 md:list-item inline-block mr-1">
                    {item}
                </li>
            ))}
        </ul>
    )
}
export default SkillList
