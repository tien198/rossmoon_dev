export type MenuItem = {
    display: 'a' | 'cate' | 'full' | 'half',
    nameDisplay: string
    categories?: MenuItem[]
    url?: string
}