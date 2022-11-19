export default defineCachedEventHandler((event) => {
  return {
    message: 'Hello World!',
    number: Math.random()
  }
},  { swr: true, maxAge: 3600 })
