export interface IPostsData{
    id: number,
    title: string,
    text: string,
    like: number,
    comments: Array<{text: string, date: string}>,
    isEdit: boolean,
    dateEdit?: Date,
    dateOfCreation: Date
}