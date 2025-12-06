export interface Project {
    id: number;
    title: string;
    imageUrl: string | null;
    tags: string[];
    description: string;
    links: {
        github: string;
        live: string | null;
    };
    isComplete: boolean;
    createdDate: Date;
};