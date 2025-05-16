
export interface Resume {
    id: string;
    name: string;
    title: string;
    location: string;
    email: string;
    skills: Record<string, string[]>;
    languages: string[];
    experience: {
        company: string;
        role: string;
        period: string;
        description?: string;
    }[];
}
