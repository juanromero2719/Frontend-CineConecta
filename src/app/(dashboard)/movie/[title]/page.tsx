'use client';

import MovieComments from "@/app/(dashboard)/movie/[title]/components/movieComments";
import MovieDetails from "@/app/(dashboard)/movie/[title]/components/movieDestails";

export default function MovieDetailPage() {
  

  return (
    <>
      <MovieDetails />
      <MovieComments />
    </>
  );
}

