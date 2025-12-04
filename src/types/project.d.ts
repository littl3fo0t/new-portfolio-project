export interface Project {
    id: string;
    title: string;
    imageUrl: string | null;
    tags: string[];
    description: string;
    projectUrl: string | null;
    isComplete: boolean;
    createdDate: Date;
};