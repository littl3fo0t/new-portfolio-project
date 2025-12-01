// Tags Component

import type React from "react";
import type { Skill } from "../types/skill";
import Tag from "./Tag";

interface TagsProps {
    skills: Skill[]
};

const Tags: React.FC<TagsProps> = ({ skills }) => {
    const sortedSkills = skills.sort((a, b) => b.rank - a.rank);
    return (
        <div className="field is-grouped is-grouped-multiline">
            { sortedSkills.map((skill, index) => <Tag key={index} skill={skill} />) }
        </div>
    );
};

export default Tags;