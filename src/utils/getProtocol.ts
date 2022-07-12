export const getProtocol = () => (process.env.NODE_ENV === 'production' ? 'https' : 'http');
