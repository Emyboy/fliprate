import React from "react";

export default function Hero() {
    return (
        <div
            className='banner p-5 jumbotron d-flex  flex-column justify-content-center'
            style={{
                minHeight: "70vh",
                backgroundImage: `url('/assets/rev/assets/banner.jpg')`,
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='p-5 container'>
                <h1 className='mb-4 text-5xl leading-normal xl:text-[55px] xl:leading-snug font-bold text-interface-100 '>
                    Fliprate Technologies
                </h1>
                <h6 className='text-muted'>Real Time solutions</h6>
            </div>
        </div>
    );
}
