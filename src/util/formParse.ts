export const formParseFloat = (value: string, name: string): string => {
    if (value) {
        return parseFloat(value).toString()
    } else {
        return ""
    }
}
export const formParseInt = (value: string, name: string): string => {
    if (value) {
        return parseInt(value).toString()
    } else {
        return "";
    }
}
