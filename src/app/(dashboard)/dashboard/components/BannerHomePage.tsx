import React, { useRef } from "react";
import Header from "@/components/HeaderComponent";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useFeaturedMovies } from "@/app/(dashboard)/dashboard/hooks/useFeaturedMovies";
import { useUserData } from "@/hooks/useUserData";
import Link from "next/link";

export const BannerHomePage = () => {
    const router = useRouter();
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    // Obtener el usuario actual
    const { data: userData } = useUserData();
    const userId = userData?.id || null;

    // Pedir 3 películas destacadas para el usuario
    const { data: featuredMovies, loading } = useFeaturedMovies(userId, 3);
    const top3 = featuredMovies?.movies?.slice(0, 3) || [];

    return (
        <div
            className="w-full h-[100vh] flex flex-col bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('/images/fondoCine.jpg')",
            }}
        >
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-[#0a0d14]/90 z-0"></div>
            {/* Capa de ruido */}
            <div className="absolute inset-0 bg-noise opacity-90 z-10 pointer-events-none"></div>
            {/* Contenido */}
            <div className="relative z-20 mt-2">
                <Header />
            </div>

            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-20 flex-1 flex flex-col xl:flex-row items-center max-w-9xl mx-auto px-4 xl:px-8 justify-center xl:justify-between w-full"
            >
                {/* Texto principal */}
                <div className="w-full px-4 xl:px-0 flex flex-col items-center xl:items-start text-center xl:text-left xl:w-2/3">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 leading-tight">
                        Descubre y Comparte <br />
                        <span className="bg-gradient-to-r from-[#1da1f2] via-[#7b61ff] to-[#e040fb] bg-clip-text text-transparent">
                            Tus Películas Favoritas
                        </span>
                    </h1>
                    <p className="text-white text-base md:text-lg xl:text-lg 2xl:text-2xl mb-7 shadow-black/80">
                        Únete a la comunidad de apasionados por el cine. Califica, <br className="hidden md:block" /> reseña y descubre joyas cinematográficas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center xl:justify-start">
                        <button className="bg-white/10 hover:bg-white/20 cursor-pointer text-white px-6 py-2 rounded border border-white font-semibold transition shadow-md w-full sm:w-auto" 
                        onClick={() => router.push('/movie')}>
                            Explorar Películas
                        </button>
                    </div>
                </div>
                {/* Podio de películas */}
                <div className="w-full xl:w-1/3 flex flex-col items-center justify-end mt-[20vw] lg:mt-[10vw] xl:mt-0 xl:pr-12">
                   <p className=" text-2xl font-bold  xl:mb-4 text-center w-full pb-[8vw] xl:pb-[3vw] bg-gradient-to-r from-[#1da1f2] via-[#7b61ff] to-[#e040fb] bg-clip-text text-transparent">Especialmente para ti!</p>
                   <div className="flex flex-row items-end justify-center gap-4 w-full max-w-xl">

                            {loading ? (
                              <div className="text-white/80 text-lg">Cargando recomendaciones...</div>
                            ) : (
                              <>

                             {/* 2do lugar - Plata */}

                             
                             <div className="flex flex-col items-center justify-end w-20 sm:w-24 lg:w-28 xl:w-24">
                                  {top3[1] && (
                                    <div className="relative flex flex-col items-center">
                                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-[#C0C0C0] text-white font-bold px-2 py-1 rounded-full shadow text-base border-4 border-[#C0C0C0]">2</span>
                                      </div>
                                      <div className="rounded-xl overflow-hidden border-4 border-[#C0C0C0] shadow-lg w-16 h-24 sm:w-20 sm:h-28 lg:w-24 lg:h-32 xl:w-24 xl:h-36 bg-[#181c2a]">
                                        <Image
                                          src={top3[1]?.poster_url || "/images/default-movie.png"}
                                          alt={top3[1]?.title || "Película 2"}
                                          width={96}
                                          height={144}
                                          className="object-cover w-full h-full"
                                        />
                                      </div>
                                      <Link href={`/movie/${encodeURIComponent(top3[1]?.title ?? "")}`}>
                                        <span className="text-white text-xs font-semibold mt-2 text-center truncate w-16 sm:w-20 lg:w-24 xl:w-24 cursor-pointer hover:underline hover:text-sky-400 transition">{top3[1]?.title}</span>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                             {/* 1er lugar - Oro */}
                                <div className="flex flex-col items-center justify-end w-24 sm:w-28 lg:w-32 xl:w-32">
                                  {top3[0] && (
                                    <div className="relative flex flex-col items-center">
                                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-[#FFD700] text-white font-bold px-3 py-2 rounded-full shadow text-xl border-4 border-[#FFD700]">1</span>
                                      </div>
                                      <div className="rounded-xl overflow-hidden border-4 mb-3 border-[#FFD700] shadow-2xl w-20 h-28 sm:w-24 sm:h-36 lg:w-28 lg:h-40 xl:w-32 xl:h-48 bg-[#181c2a] scale-110">
                                        <Image
                                          src={top3[0]?.poster_url || "/images/default-movie.png"}
                                          alt={top3[0]?.title || "Película 1"}
                                          width={128}
                                          height={192}
                                          className="object-cover w-full h-full"
                                        />
                                      </div>
                                      <Link href={`/movie/${encodeURIComponent(top3[0]?.title ?? "")}`}>
                                        <span className="text-white text-sm font-bold mt-2 text-center truncate w-20 sm:w-24 lg:w-28 xl:w-32 cursor-pointer hover:underline hover:text-yellow-400 transition">{top3[0]?.title}</span>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                             {/* 3er lugar - Bronce */}
                                <div className="flex flex-col items-center justify-end w-20 sm:w-24 lg:w-28 xl:w-24 ">
                                  {top3[2] && (
                                    <div className="relative flex flex-col items-center">
                                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                        <span className="bg-[#CD7F32] text-white font-bold px-2 py-1 rounded-full shadow text-base border-4 border-[#CD7F32]">3</span>
                                      </div>
                                      <div className="rounded-xl overflow-hidden border-4 border-[#CD7F32] shadow-lg w-16 h-24 sm:w-20 sm:h-28 lg:w-24 lg:h-32 xl:w-24 xl:h-36 bg-[#181c2a]">
                                        <Image
                                          src={top3[2]?.poster_url || "/images/default-movie.png"}
                                          alt={top3[2]?.title || "Película 3"}
                                          width={96}
                                          height={144}
                                          className="object-cover w-full h-full"
                                        />
                                      </div>
                                      <Link href={`/movie/${encodeURIComponent(top3[2]?.title ?? "")}`}>
                                        <span className="text-white text-xs font-semibold mt-2 text-center truncate w-16 sm:w-20 lg:w-24 xl:w-24 cursor-pointer hover:underline hover:text-orange-400 transition">{top3[2]?.title}</span>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </>
                            )}
                  </div>
                </div>
            </motion.div>
        </div>
    );
};

