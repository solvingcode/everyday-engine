export default function (index, array) {
    return {
        body: '',
        index: index + 1,
        element: array[index],
        ended: index >= array.length - 1
    }
}