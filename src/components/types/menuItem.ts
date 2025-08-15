export type MenuItem = {
    display: 'link' | 'cate',
    nameDisplay: string
    categories?: MenuItem[]
    url?: string
}