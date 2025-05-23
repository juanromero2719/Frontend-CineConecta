import { useState } from 'react';
import { createCommentAdapter, CreateCommentResponse } from '@/app/(dashboard)/movie/[title]/adapters/createComment.adapter';
import { CreateCommentRequest } from '@/app/(dashboard)/movie/[title]/models/createComment.models';

interface UseCreateCommentResult {
  createComment: (payload: CreateCommentRequest) => Promise<void>;
  loading: boolean;
  error: string | null;
  response: CreateCommentResponse | null;
}

export function useCreateComment(): UseCreateCommentResult {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<CreateCommentResponse | null>(null);

  const createComment = async (payload: CreateCommentRequest) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await createCommentAdapter.createComment(payload);
      setResponse(res.data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return {
    createComment,
    loading,
    error,
    response,
  };
}
