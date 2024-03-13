import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  source: string;
  author: string;
  date: string;
  image?: string;
}

interface StockContextType {
  articles: Article[];
  loading: boolean;
  error: string | null;
  filters: {
    source: string | null;
    author: string | null;
  };
  sortBy: string;
  setFilters: (filters: {
    source: string | null;
    author: string | null;
  }) => void;
  setSortBy: (sortBy: string) => void;
}

const StockContext = createContext<StockContextType>({
  articles: [],
  loading: false,
  error: null,
  filters: {
    source: null,
    author: null,
  },
  sortBy: "date",
  setFilters: () => {},
  setSortBy: () => {},
});

export const useStock = () => useContext(StockContext);

interface StockProviderProps {
  children: React.ReactNode;
}

export const StockProvider: React.FC<StockProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    source: string | null;
    author: string | null;
  }>({
    source: null,
    author: null,
  });
  const [sortBy, setSortBy] = useState<string>("date");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://dev-storm-rest-api.pantheonsite.io/api/v1/news"
        );
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleSetFilters = (newFilters: {
    source: string | null;
    author: string | null;
  }) => {
    setFilters(newFilters);
  };

  const handleSetSortBy = (newSortBy: string) => {
    setSortBy(newSortBy);
  };

  return (
    <StockContext.Provider
      value={{
        articles,
        loading,
        error,
        filters,
        sortBy,
        setFilters: handleSetFilters,
        setSortBy: handleSetSortBy,
      }}
    >
      {children}
    </StockContext.Provider>
  );
};
