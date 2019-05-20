import ajax from './ajax'

// const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';

export const reqHome = () => ajax('/home')
