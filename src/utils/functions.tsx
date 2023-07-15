export const TextRevise = (text: string, limit: number): string => {
    //text[0] = text[0].toUpperCase()
    if (text.length > limit) {
        return `${text.slice(0, limit)}...`
    } else {
        return text
    }
}

export function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1)
}
