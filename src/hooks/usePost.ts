"use client";
import { useState } from "react";
import api from "@/lib/services/api";
import { UsePostOutputType } from "@/types/hooks/usePost";

const usePost = (defaultUrl: string, { method = "POST" } = {}) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const post = async <T>(
    body,
    { url = defaultUrl } = {}
  ): Promise<UsePostOutputType<T>> => {
    setLoading(true);
    setError(null);
    try {
      const data = await api(url, {
        method,
        body: JSON.stringify(body),
      });
      setResponse(data);
      return { response: data, error: "" };
    } catch (err) {
      console.log(`ERROR::usePost`, err);

      setError(err?.message); // Handle axios or network errors
      return { response: null, error: err?.message }; // Return error
    } finally {
      setLoading(false); // Ensure loading stops
    }
  };

  return { post, response, loading, error };
};

export default usePost;
