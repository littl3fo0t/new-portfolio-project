// Tag Component

import type React from "react"
import type { Skill } from "../types/skill"

interface TagProps {
    skill: Skill
};

const Tag: React.FC<TagProps> = ({ skill }) => {
    const { name, displayName, hasAddons, iconName } = skill;
    if (hasAddons) {
        return (
            <div className="control">
                <div className="tags are-medium has-addons">
                    <span className="tag icon is-dark">
                        <i className={iconName?.join(" ")} aria-hidden="true"></i>
                    </span>
                    <span className="tag is-hoverable" data-name={name}>{displayName}</span>
                </div>
            </div>
        );
    } else {
        return (
            <span className="tag is-hoverable is-medium" data-name={name}>{displayName}</span>
        );
    }

};

export default Tag;