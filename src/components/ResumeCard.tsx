
import React from 'react';

import { Resume } from '../types/types';
import styles from '../styles/App.module.css';

interface Props {
    resume: Resume;
}

const ResumeCard: React.FC<Props> = ({ resume }) => {
    return (
        <div className={styles.card}>
            <h2>{resume.name}</h2>
            <p><strong>{resume.title}</strong></p>
            <p>{resume.location}</p>
            <p><a href={`mailto:${resume.email}`}>{resume.email}</a></p>

            <h4>Skills:</h4>
            {Object.entries(resume.skills).map(([category, list]) => (
                <p key={category}>
                    <strong>{category}:</strong> {list.join(', ')}
                </p>
            ))}

            <h4>Languages:</h4>
            <p>{resume.languages.join(', ')}</p>

            <h4>Experience:</h4>
            <ul>
                {resume.experience.map((exp, i) => (
                    <li key={i}>
                        {exp.role} at <strong>{exp.company}</strong> ({exp.period})
                        {exp.description && <div> – {exp.description}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResumeCard;
