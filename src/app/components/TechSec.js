"use client";
import { useState } from "react";

export default function TechSec() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setActiveCategory(category);
  };
  return (
    <section id="tech-sec" className="pt-80">
      <div className="bg-grey">
        <div className="container ">
          {/* <h1 className="text-center">Technologies We Work With</h1> */}
          <h4 className="tp-section-title-40 font-style-2 pb-20 text-center">
            Technologies We Work With
          </h4>

          <div className="category-buttons d-flex justify-content-center gap-3">
            <button
              type="button"
              className={`btn-tech ${activeCategory === "frontend" ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(e, "frontend")}
            >
              Frontend
            </button>
            <button
              type="button"
              className={`btn-tech ${activeCategory === "backend" ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(e, "backend")}
            >
              Backend
            </button>
            <button
              type="button"
              className={`btn-tech ${activeCategory === "database" ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(e, "database")}
            >
              Database
            </button>
            <button
              type="button"
              className={`btn-tech ${activeCategory === "cloud" ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(e, "cloud")}
            >
              Cloud
            </button>
            <button
              type="button"
              className={`btn-tech ${activeCategory === "uiux" ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(e, "uiux")}
            >
              UI / UX Design
            </button>
            <button
              type="button"
              className={`btn-tech ${activeCategory === "cms" ? "active" : ""}`}
              onClick={(e) => handleCategoryClick(e, "cms")}
            >
              CMS
            </button>
          </div>
          <div
            className={`detail-tech-card ${activeCategory === "frontend" ? "active" : ""}`}
            id="tech-frontend"
          >
            <div className="tech-card">
              <img src="/assets/images/techs/html.png" alt="HTML | Sitechs" />
              <p className="m-0">HTML</p>
            </div>

            <div className="tech-card">
              <img src="/assets/images/techs/css.webp" alt="CSS | Sitechs" />
              <p className="m-0">CSS</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/react.webp"
                alt="React | Sitechs"
              />
              <p className="m-0">React</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/tailwind.webp"
                alt="Tailwind | Sitechs"
              />
              <p className="m-0">Tailwind</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/bootstrap.png"
                alt="Bootstrap | Sitechs"
              />
              <p className="m-0">Bootstrap</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/nextjs.png"
                alt="Next.js | Sitechs"
              />
              <p className="m-0">Next.js</p>
            </div>
          </div>
          <div
            className={`detail-tech-card ${activeCategory === "backend" ? "active" : ""}`}
            id="tech-backend"
          >
            <div className="tech-card">
              <img
                src="/assets/images/techs/Laravel.png"
                alt="Laravel | Sitechs"
              />
              <p className="m-0">Laravel</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/django.png"
                alt="Django | Sitechs"
              />
              <p className="m-0">Django</p>
            </div>
            <div className="tech-card">
              <img src="/assets/images/i-1.png" alt="Node.js | Sitechs" />
              <p className="m-0">Node.js</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/express-js.webp"
                alt="Express.js | Sitechs"
              />
              <p className="m-0">Express.js</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/devops.webp"
                alt="DevOps | Sitechs"
              />
              <p className="m-0">DevOps</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/strapi.webp"
                alt="Strapi | Sitechs"
              />
              <p className="m-0">Strapi</p>
            </div>
          </div>
          <div
            className={`detail-tech-card ${activeCategory === "database" ? "active" : ""}`}
            id="tech-database"
          >
            <div className="tech-card">
              <img
                src="/assets/images/techs/my-sql.webp"
                alt="MySQL | Sitechs"
              />
              <p className="m-0">MySQL</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/mongo-db.webp"
                alt="MongoDB | Sitechs"
              />
              <p className="m-0">MongoDB</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/Postgre.webp"
                alt="PostgreSQL | Sitechs"
              />
              <p className="m-0">PostgreSQL</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/firebase.webp"
                alt="Firebase | Sitechs"
              />
              <p className="m-0">Firebase</p>
            </div>

            <div className="tech-card">
              <img
                src="/assets/images/techs/superbase.png"
                alt="Supabase | Sitechs"
              />
              <p className="m-0">Supabase</p>
            </div>
            <div className="tech-card">
              <img src="/assets/images/techs/redis.png" alt="Redis | Sitechs" />
              <p className="m-0">Redis</p>
            </div>
          </div>
          <div
            className={`detail-tech-card ${activeCategory === "cloud" ? "active" : ""}`}
            id="tech-cloud"
          >
            <div className="tech-card">
              <img src="/assets/images/techs/aws.webp" alt="AWS | Sitechs" />
              <p className="m-0">AWS</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/azure.webp"
                alt="Azure | Sitechs"
              />
              <p className="m-0">Azure</p>
            </div>
            <div className="tech-card">
              <img src="/assets/images/techs/hostinger.png" alt="" />
              <p className="m-0">Hostinger</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/Digital-Ocean.webp"
                alt="Digital Ocean | Sitechs"
              />
              <p className="m-0">Digital Ocean</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/vercel.png"
                alt="Vercel | Sitechs"
              />
              <p className="m-0">Vercel</p>
            </div>
          </div>
          <div
            className={`detail-tech-card ${activeCategory === "uiux" ? "active" : ""}`}
            id="tech-uiux"
          >
            <div className="tech-card">
              <img src="/assets/images/techs/figma.png" alt="Figma | Sitechs" />
              <p className="m-0">Figma</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/Adobe-XD.webp"
                alt="Adobe XD | Sitechs"
              />
              <p className="m-0">Adobe XD</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/photoshop.webp"
                alt="Adobe Photoshop | Sitechs"
              />
              <p className="m-0">Adobe Photoshop</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/ai.webp"
                alt="Adobe Illustrator | Sitechs"
              />
              <p className="m-0">Adobe Illustrator</p>
            </div>
            <div className="tech-card">
              <img src="/assets/images/techs/canva.png" alt="Canva | Sitechs" />
              <p className="m-0">Canva</p>
            </div>
          </div>
          <div
            className={`detail-tech-card ${activeCategory === "cms" ? "active" : ""}`}
            id="tech-cms"
          >
            <div className="tech-card">
              <img
                src="/assets/images/techs/wordpress.webp"
                alt="WordPress | Sitechs"
              />
              <p className="m-0">WordPress</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/shopify.webp"
                alt="Shopify | Sitechs"
              />
              <p className="m-0">Shopify</p>
            </div>
            <div className="tech-card">
              <img src="/assets/images/techs/wix.webp" alt="Wix | Sitechs" />
              <p className="m-0">Wix</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/webflow.webp"
                alt="Webflow | Sitechs"
              />
              <p className="m-0">Webflow</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/magneto.webp"
                alt="Magento | Sitechs"
              />
              <p className="m-0">Magento</p>
            </div>
            <div className="tech-card">
              <img
                src="/assets/images/techs/custom-cms.png"
                alt="Custom CMS | Sitechs"
              />
              <p className="m-0">Custom CMS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
