export interface PostsData{
    id: number,
    title: string,
    text: string,
    like: number,
    comments: Array<Comment>,
    dateEdit?: Date,
    dateOfCreation: Date
}

export interface Comment{
    text: string, 
    date: Date
}

export interface FormValue{
    title: string,
    text: string
}