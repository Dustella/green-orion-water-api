const consume = async (stream: ReadableStream) => {
  const reader = stream.getReader()
  while (!(await reader.read()).done) {
    /* NOOP */
  }
}

export const transform = async (source: Response) => {
  const keys = [] as string[]
  const values = [] as string[]
  let tmpBuffer = ''

  const transfomer = new HTMLRewriter()
    .on('.item-title', {
      text(text) {
        tmpBuffer += text.text
        if (text.lastInTextNode) {
          if (tmpBuffer.trim() !== '')
            keys.push(tmpBuffer.trim())

          tmpBuffer = ''
        }
      },
    })
    .on('.item-after', {
      text(text) {
        tmpBuffer += text.text
        if (text.lastInTextNode) {
          const value = tmpBuffer
          values.push(value.trim())
          tmpBuffer = ''
        }
      },
    })
  await consume(transfomer.transform(source).body!)
  return { keys, values }
}
