'use client';

import MovieComments from "@/app/(dashboard)/movie/[title]/components/movieComments";
import MovieDetails from "@/app/(dashboard)/movie/[title]/components/movieDestails";
import { MovieDescription } from "./components/movieDescription";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MovieDetailPage() {
  const descRef = useRef(null);
  const detailsRef = useRef(null);
  const commentsRef = useRef(null);
  const descInView = useInView(descRef, { once: true, margin: "-100px" });
  const detailsInView = useInView(detailsRef, { once: true, margin: "-100px" });
  const commentsInView = useInView(commentsRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen w-full bg-[rgb(var(--dark-blue-80))] bg-noise">
      <motion.div
        ref={descRef}
        initial={{ opacity: 0, y: 40 }}
        animate={descInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MovieDescription />
      </motion.div>
      
        {/* Columna principal: detalles y comentarios */}
        
        <div className="xl:col-span-2 flex flex-col gap-8 px-10 items-center justify-center w-full">
          
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full"
          >
            <MovieDetails />
          </motion.div>
          <motion.div
            ref={commentsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={commentsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full"
          >
            <MovieComments />
          </motion.div>
        </div>
        {/* Columna lateral: aquí puedes agregar detalles extra, películas similares, etc. */}
        {/* <AsideComponent /> */}
      
    </div>
  );
}

