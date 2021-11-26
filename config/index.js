const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:1337/company' : process.env.CLUB_API
