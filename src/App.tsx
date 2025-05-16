// src/App.tsx

import React, { useEffect, useState } from 'react';
import ResumeCard from './components/ResumeCard';
import { Resume } from './types/types';
import styles from './styles/App.module.css';

const API_URL = 'https://portfolio-api-vercel-kappa.vercel.app/api/resume';

function App() {
    const [resume, setResume] = useState<Resume | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => {
                setResume(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching resume.');
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Portfolio_12 API</h1>
            {loading && <p>Loading resume...</p>}
            {error && <p>{error}</p>}
            {resume && <ResumeCard resume={resume} />}
        </div>
    );
}

export default App;
