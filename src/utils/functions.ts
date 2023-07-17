import { Product } from '../Types/Product'

export const TextRevise = (text: string, limit: number): string => {
    //text[0] = text[0].toUpperCase()
    if (text.length > limit) {
        return `${text.slice(0, limit)}...`
    } else {
        return text
    }
}

export function capitalizeFirstLetter(name: string | null): string | null {
    if (!name) {
        return null
    }
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export function helloworld() {}

export const calculateTotalPrice = (cart: Product[]) => {
    const totalPrice = cart.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity
    }, 0)

    return totalPrice
}
