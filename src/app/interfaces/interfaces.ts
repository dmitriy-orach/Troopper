export interface IPostsData{
    id: number,
    title: string,
    text: string,
    like: number,
    coments: Array<{text: string, date: string}>
}