import React from "react";

function useLocalStorage(itemName, initialValue) {
  // ESTATES
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  //TO DO LOADING AND ERROR
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageTodos);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }

    }, 1000, []);
  });

  //TO DO SAVE ITEM
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };