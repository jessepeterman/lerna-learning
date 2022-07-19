function convertToString(items : {element?: Number}): String | undefined {
    return items?.element.toString()
}

export function convertToUndefined(str: string) {
    return undefined
}

export default convertToString