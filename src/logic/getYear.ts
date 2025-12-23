export const getYear = (): number => {
  const currentYear = new Date().getFullYear();
  const yearMatch = window.location.search.match(/^\?\d+$/)?.[0];

  return yearMatch ? Number(yearMatch.slice(1)) : currentYear;
}