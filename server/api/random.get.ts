export default defineCachedEventHandler((event) => {
  return {
    number: Math.random()
  }
}, { swr: true, maxAge: 3600 })
