import Image from "next/image";
import Link from "next/link";

export default function ServiceTechnology({ data }) {
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        {data.map((item, index) => (
          <div
            key={index}
            className="tp-service-3-wrap tp_fade_bottom"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            <div className="row align-items-center">
              {/* Title */}
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>

              {/* Content */}
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p>{item.description}</p>

                  {/* Categories (same span structure) */}
                  {item.categories && item.categories.length > 0 && (
                    <div className="tp-service-3-category">
                      {item.categories.map((cat, i) => (
                        <span key={i}>{cat}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href={item.link}
                  >
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.title}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
