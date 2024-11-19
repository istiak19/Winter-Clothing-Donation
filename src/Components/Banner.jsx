const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/PCZNrYh/pic-8.jpg"
                        className="w-full h-[450px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 w-full">
                        <h2 className="text-white text-xl font-bold">Blankets for Urban Poor</h2>
                        <p className="text-white">Supporting slum dwellers in Dhaka with warm blankets.</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/k0Trf5T/pic1.webp"
                        className="w-full h-[450px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 w-full">
                        <h2 className="text-white text-xl font-bold">Warm Clothes for Rural Children</h2>
                        <p className="text-white">Providing warm clothes to underprivileged children in rural areas of Sylhet.</p>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/x6Pq3Lf/pic-4.webp"
                        className="w-full h-[450px]" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 w-full">
                        <h2 className="text-white text-xl font-bold">Cold Relief for Coastal Areas</h2>
                        <p className="text-white">Providing warm clothes and blankets to coastal regions of Barisal.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;