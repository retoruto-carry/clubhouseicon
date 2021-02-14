/**
 * svgをpngに変換
 * @param svgElement <svg>のHTML要素
 * @see https://www.memory-lovers.blog/entry/2020/01/24/110000
 */
export function saveSvgAsPng(
  svgElement: HTMLCanvasElement,
  width: number,
  height: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    // 1. Canvasを用意する
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      reject(Error('Create Canvas Error...'))
      return
    }

    const image = new Image()
    image.decoding = 'async'
    image.onload = () => {
      ctx.drawImage(image, 0, 0, 1000, 1000)
      resolve(canvas.toDataURL())
    }
    image.onerror = (e) => reject(e)

    const svgXml = new XMLSerializer().serializeToString(svgElement)
    const svgData = btoa(unescape(encodeURIComponent(svgXml)))
    image.src = `data:image/svg+xml;charset=utf-8;base64,${svgData}`
  })
}
