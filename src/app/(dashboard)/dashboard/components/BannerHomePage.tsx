import React, { useRef } from "react";
import Header from "@/components/HeaderComponent";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";

export const BannerHomePage = () => {
    const router = useRouter();
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

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
                className="relative z-20 flex-1 flex items-center xl:max-w-2xl xl:ml-12 justify-center xl:justify-start"
            >
                <div className="w-full px-4 xl:px-0 flex flex-col items-center xl:items-start text-center xl:text-left">
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
            </motion.div>
        </div>
    );
};

