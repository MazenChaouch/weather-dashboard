export const useLocalStorage = <T>(key: string) => {
  const setItem = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
  };

  const getData = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  };

  const data = getData();

  return { data, setItem };
};
