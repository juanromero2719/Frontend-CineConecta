import { useState, useEffect, useCallback } from 'react';
import { AxiosResponse } from 'axios';

interface EndpointCall<T> {
  call: Promise<AxiosResponse<T>>;
}

interface UseFetchAndLoadReturn {
  loading: boolean;
  error: Error | null;
  callEndpoint: <T>(endpointCall: EndpointCall<T>) => Promise<AxiosResponse<T>>;
  cancelEndpoint: () => void;
}

export default function useFetchAndLoad(): UseFetchAndLoadReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [controller, setController] = useState<AbortController | null>(null);

  const callEndpoint = useCallback(async <T>(endpointCall: EndpointCall<T>): Promise<AxiosResponse<T>> => {
    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);
    setLoading(true);
    setError(null);

    try {
      const result = await endpointCall.call;
      return result;
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        throw err;
      }
      setError(err instanceof Error ? err : new Error('An error occurred'));
      throw err;
    } finally {
      setLoading(false);
      setController(null);
    }
  }, []); // No dependencias para evitar recreación

  const cancelEndpoint = useCallback(() => {
    if (controller) {
      controller.abort();
    }
  }, [controller]);

  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  return { loading, error, callEndpoint, cancelEndpoint };
}