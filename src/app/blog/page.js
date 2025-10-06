import Link from "next/link";

export default function Blog() {
  return (
    <>
    <div className="tp-blog-standard-area pt-120">
        <div className="container container-1500">
            <div className="row">
                <div className="col-xl-12">
                <div className="tp-blog-standard-thumb-box p-relative">
                    <img data-speed=".8" src="assets/img/inner-blog/blog-standard/blog-1.jpg" alt="" />
                    <div className="tp-blog-standard-title-box d-none d-sm-block">
                        <h4 className="tp-blog-standard-title tp-char-animation">Our New Projects With <br /> Local Community</h4>
                    </div>
                    <div className="tp-blog-standard-meta d-none d-sm-block">
                        <span>
                            OCT <br /> 21
                        </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div className="blog-details-realated-area pt-120 pb-70">
        <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item">
                    <div className="tp-blog-thumb fix p-relative">
                    <img src="assets/img/inner-blog/blog-standard/blog-2.jpg" alt="" />
                    <div className="tp-blog-meta">
                        <span>01. FEB. 2022</span>
                    </div>
                    </div>
                    <div className="tp-blog-content">
                    <span>Marketing / Strategy</span>
                    <h4 className="tp-blog-title-sm"><Link href="/blog/future-business-ideas">Future Business Ideas.</Link></h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item">
                    <div className="tp-blog-thumb fix p-relative">
                    <img src="assets/img/inner-blog/blog-standard/blog-3.jpg" alt="" />
                    <div className="tp-blog-meta">
                        <span>09. MAY. 2022</span>
                    </div>
                    </div>
                    <div className="tp-blog-content">
                    <span>Branding / Creative</span>
                    <h4 className="tp-blog-title-sm"><Link href="/blog/start-unique-experience">Start Unique Experience.</Link></h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item">
                    <div className="tp-blog-thumb fix p-relative">
                    <img src="assets/img/inner-blog/blog-standard/blog-4.jpg" alt="" />
                    <div className="tp-blog-meta">
                        <span>30. MAY. 2022</span>
                    </div>
                    </div>
                    <div className="tp-blog-content">
                    <span>Marketing / Strategy</span>
                    <h4 className="tp-blog-title-sm"><Link href="/blog/is-it-time-to-rebrand">Is It Time To Rebrand?</Link></h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item">
                    <div className="tp-blog-thumb fix p-relative">
                    <img src="assets/img/inner-blog/blog-standard/blog-5.jpg" alt="" />
                    <div className="tp-blog-meta">
                        <span>01. APR. 2022</span>
                    </div>
                    </div>
                    <div className="tp-blog-content">
                    <span>Branding / Creative</span>
                    <h4 className="tp-blog-title-sm"><Link href="/blog/setting-up-the-creativity">Setting up the creativity.</Link></h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item">
                    <div className="tp-blog-thumb fix p-relative">
                    <img src="assets/img/inner-blog/blog-standard/blog-6.jpg" alt="" />
                    <div className="tp-blog-meta">
                        <span>09. MAY. 2022</span>
                    </div>
                    </div>
                    <div className="tp-blog-content">
                    <span>Marketing / Strategy</span>
                    <h4 className="tp-blog-title-sm"><Link href="/blog/design-to-remember">Design to remember</Link></h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item">
                    <div className="tp-blog-thumb fix p-relative">
                    <img src="assets/img/inner-blog/blog-standard/blog-7.jpg" alt="" />
                    <div className="tp-blog-meta">
                        <span>30. JUN. 2022</span>
                    </div>
                    </div>
                    <div className="tp-blog-content">
                    <span>Branding / Creative</span>
                    <h4 className="tp-blog-title-sm"><Link href="/blog/endless-road-stories">Endless Road Stories</Link></h4>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="basic-pagination mt-40 text-center">
                    <nav>
                    <ul>
                        <li>
                            <Link href="/blog">
                                <span className="current">1</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <span>2</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <i className="fa-regular fa-arrow-right icon"></i>
                            </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
}