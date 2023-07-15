import { updateDoc, doc, setDoc, getDoc, writeBatch, addDoc, collection, query, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import { Product } from '../Types/Product'

// Create a new cart document for a user
export async function createCartForUser(userId: string) {
    const cartRef = doc(db, 'carts', userId)
    await setDoc(cartRef, { items: [] })
}

// Add a product to the user's cart
export async function addProductToCart(userId: string, product: Product) {
    const cartRef = doc(db, 'carts', userId)
    const cartDoc = await getDoc(cartRef)
    if (cartDoc.exists()) {
        const cartItems = cartDoc.data()?.items || []
        const upDatedItems = [...cartItems, product]
        await updateDoc(cartRef, { ...upDatedItems })
    }
}

// Update the quantity of a product in the user's cart
export async function updateCartQuantity(userId: string, ProductId: string, quantity: number) {
    const cartRef = doc(db, 'carts', userId)
    const cartDoc = await getDoc(cartRef)
    if (cartDoc.exists()) {
        const cartItems = cartDoc.data()?.items || []
        const updatedItems = cartItems.map((item: Product) => {
            if (item.id == ProductId) {
                return { ...item, quantity }
            }
            return item
        })
        await updateDoc(cartRef, { ...updatedItems })
    }
}

// Retrieve the user's cart
export async function getUserCart(userId: string): Promise<any> {
    try {
        const cartRef = doc(db, 'carts', userId)
        if (!cartRef) {
            return null
        }
        const cartDoc = await getDoc(cartRef)
        if (cartDoc.exists()) {
            return cartDoc.data()
        }
        return null
    } catch (error) {}
}

export async function getAllProducts(): Promise<Product[] | any> {
    let Products: Product[] = []
    const productsRef = query(collection(db, 'products'))
    const products = await getDocs(productsRef)
    products.forEach((prod) => {
        const product = prod.data() as Product
        Products.push(product)
    })

    return Products
}

export async function getAProduct(productId: string): Promise<Product | any> {
    const docRef = doc(db, 'products', productId)
    const d = await getDoc(docRef)
    if (d.exists()) {
        return d.data()
    } else {
        return null
    }
}

// Remove a product from the user's cart
export async function removeFromCart(userId: string, productId: string) {
    const cartRef = doc(db, 'carts', userId)
    const cartDoc = await getDoc(cartRef)
    if (cartDoc.exists()) {
        const cartItems = cartDoc.data()?.items || []
        const updatedItems = cartItems.filter((item: Product) => item.id !== productId)
        await updateDoc(cartRef, { ...updatedItems })
    }
}

//add sample firebase products
export async function addSampleData(products: Product[]) {
    try {
        const batch = writeBatch(db)
        products.forEach((product) => {
            const productsRef = doc(db, 'products', product.id)
            batch.set(productsRef, product)
        })
        await batch.commit()
        console.log('Products have been saved')
    } catch (error) {
        console.error('Error adding products:', error)
    }
}
