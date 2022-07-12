export const sortBlocks = (a: { order: number }, b: { order: number }) => (a.order > b.order ? 1 : -1);
