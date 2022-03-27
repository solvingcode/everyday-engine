export default function (target, volume) {
    const audio = target.getData()
    audio.pause()
    audio.volume = Math.max(0, Math.min(volume, 1))
    audio.currentTime = 0
    audio.play()
}