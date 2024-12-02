export const normalizeString = (str: string): string => {
  const decoded = decodeURIComponent(str);

  return decoded
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
};
