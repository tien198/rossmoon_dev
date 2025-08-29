import type { Product } from "../models/product.zod"

type Props = {
    prod?: Product
}

export default function ProductCard({ prod }: Props) {
    return (
        <div className="w-full text-center">
            {prod?.name}
        </div>
    )
}