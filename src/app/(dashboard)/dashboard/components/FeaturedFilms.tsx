import React from 'react';
import Image from 'next/image';

const FeaturedFilms: React.FC = () => {
    return(
        <>
            <h2 className="text-3xl font-semibold mb-4 text-center">Películas Destacadas</h2>
        
            <div className="flex items-center gap-4">
                <Image
                    src="/images/the-dark-knight.jpg"
                    alt="The Dark Knight"
                    width={32}
                    height={48}
                    className="w-32 h-48 object-cover rounded shadow-md"
                />
                <div>
                    <h3 className="text-lg font-bold">The Dark Knight</h3>
                    <div className="flex items-center mt-1 text-yellow-600">★ ★ ★ ★ ☆</div>
                    <p className="text-sm font-semibold mt-1 text-[#ba7c3a]">4.0</p>
                </div>
            </div>
        </>
        
    )
};

export default FeaturedFilms;