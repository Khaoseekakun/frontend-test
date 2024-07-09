export function Carousel() {
    return (
        <div className="mt-4">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://img.freepik.com/free-photo/traveler-asian-couple-using-camera-take-picture-while-spending-holiday-trip-bangkok-thailand_7861-1316.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://img.freepik.com/free-photo/traveler-asian-couple-using-camera-take-picture-while-spending-holiday-trip-bangkok-thailand_7861-1315.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://img.freepik.com/free-photo/asian-blogger-couple-travel-bangkok-thailand_7861-1324.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}