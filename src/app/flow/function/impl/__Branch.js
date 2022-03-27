export default function (target) {
    return {
        true: !!target,
        false: !target
    }
}