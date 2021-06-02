export interface PostsData{
    id: number,
    title: string,
    text: string,
    like: number,
    comments: Array<{text: string, date: string}>,
    dateEdit?: Date,
    dateOfCreation: Date
}