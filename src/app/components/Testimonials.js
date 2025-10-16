'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import useGsapReveal from '../hooks/useGsapReveal';

export default function Testimonials() {
//   useGsapReveal();

  return (
    <div className="tp-testimonial-area pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              
              {/* Arrows */}
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3335 8.63672H1.3335" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8.42188 0.69043C8.42188 5.08274 4.65513 8.63691 0.000114646 8.63691"
                        stroke="currentColor" strokeWidth="1.5" />
                      <path d="M0.000114646 8.63672C4.65513 8.63672 8.42188 12.1909 8.42188 16.5832"
                        stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>

                <button className="tp-testimonial-next">
                  <span>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.666504 8H18.6665" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M11.5781 0C11.5781 4.42189 15.3449 8 19.9999 8" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M19.9999 8C15.3449 8 11.5781 11.5781 11.5781 16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Swiper */}
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                speed={1000}
                navigation={{
                  nextEl: '.tp-testimonial-next',
                  prevEl: '.tp-testimonial-prev',
                }}
                className="tp-testimonial-slider-active"
              >
                <SwiperSlide>
                  <div className="tp-testimonial-item text-center">
                    <p>
                      “Sitechs transformed our workflow with AI automation and a stunning new website. Their team is fast, creative, and truly understands business needs. Highly recommended!”
                    </p>
                    <span><em>CEO</em> - Inizio Solutions</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="tp-testimonial-item text-center">
                    <p>
                      “We loved working with Sitechs! They built our brand identity from scratch and automated our lead system—professional, reliable, and results-driven from day one.”
                    </p>
                    <span><em>CEO</em> - Creative Triplet</span>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}