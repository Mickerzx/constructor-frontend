export const structureParser = (stringifiedStructure: string) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(stringifiedStructure));
    } catch (error) {
      reject(error);
    }
  });
};
