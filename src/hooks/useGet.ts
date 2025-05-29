"use client";
import { useState, useEffect, useCallback } from "react";
import api from "@/services/api";

const useAxios = (url, option = {}) => {
  const [data, setData] = useState(option?.initialData || null);
  const [loading, setLoading] = useState(option?.initialData ? false : true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    try {
      const data = await api(url, {
        method: "GET",
      });
      setData(data);
      return { data: data };
    } catch (error) {
      setError(error.message);
      return { error: error.message };
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!option?.initialData) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error, fetchData };
};

export default useAxios;
