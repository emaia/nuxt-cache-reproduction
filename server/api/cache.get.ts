export default defineEventHandler(async (event) => {

    const keys = await useStorage().getKeys('cache:nitro:handlers:_:')

    console.log(`Cache keys: ${keys}`)

    // await useStorage().removeItem('cache:nitro:handlers:_:apihello.ijKphEGpXA.json')

    // keys.forEach((key: string) => {
    //     if (key.startsWith('cache:nitro:handlers:_:apihello')) {
    //         useStorage().removeItem(key).then(() => console.log(`removing ${key}`))
    //     }
    // })

    // Flush all "cache"
    // await useStorage().clear('cache')

    // Flush ALL FILES???S
    // await useStorage().clear()

    const keysAfterRemove = await useStorage().getKeys('cache:nitro:handlers:_:')

    console.log(keysAfterRemove)

    return {
        message: 'Cache cleared!'
    }
})