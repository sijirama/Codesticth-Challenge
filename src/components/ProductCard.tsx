import { Product } from '../Types/Product'
import { TextRevise } from '../utils/functions'
import useProduct from '../context/ProductContext'

interface Props {
    product: Product
    form: 'row' | 'col'
}

export default function ProductCard({ product, form }: Props) {
    const { getProduct } = useProduct()

    const handleClick = async () => {
        await getProduct(product.id)
    }

    return (
        <div
            className={`grid ${
                form == 'row' ? 'grid-cols-2 w-[25rem] h-52' : 'grid-rows-2 w-64 h-[23rem]'
            } bg-mysecondary gap-0 rounded-xl shadow-lg`}
        >
            <div
                className={` ${
                    form == 'row' ? 'h-full rounded-l-xl' : 'w-full rounded-t-xl'
                } bg-cover bg-center hover:`}
                style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></div>

            <div
                className={`  ${
                    form == 'row' ? 'h-full' : 'w-full'
                } bg-white shadow-lg text-[#1f1f29] p-3 flex justify-between flex-col`}
            >
                <p className="font-rubik font-bold -tracking-wider">{product.name}</p>
                <p className="font-rubik font-light">${product.price}</p>
                <div className="font-rubik font-normal text-base -tracking-wide">
                    {TextRevise(product.description, 30)}
                </div>
                <p className=" font-rubik text-sm -tracking-wide font-light">{product.quantity} left</p>
                <div className=" flex justify-end">
                    <button
                        onClick={handleClick}
                        className="bg-myprimary text-white px-4 py-1 font-semibold font-rubik rounded-md"
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}
