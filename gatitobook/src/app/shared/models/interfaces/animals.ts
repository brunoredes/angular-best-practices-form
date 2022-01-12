import { User } from '@models/interfaces/user';
export interface Animal {
    id: number;
    postDate: Date | number;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: string;
    userId: User['id'];
}
