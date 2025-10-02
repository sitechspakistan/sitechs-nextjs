"use client";

import Script from "next/script";
import useGsapReveal from "../hooks/useGsapReveal";

export default function ChatWithUs() {
  useGsapReveal();
  return (
    <div data-page="chat-with-us">
      <div className="tm-hero-area tm-hero-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tm-hero-content">
                          <span className="tm-hero-subtitle">Get in touch</span>
                          <h4 className="tm-hero-title tp-char-animation">Chat with Us</h4>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
          <div className="container container-1740">
              <div className="row">
                <div className="col-xl-8 col-lg-8">
                    <div className="fq-faq-wrapper">
                      <div className="tp-service-2-accordion-box">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-items">
                                <h2 className="accordion-header">
                                  <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      What we do?
                                      <span className="accordion-icon"></span>
                                  </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.!
                                      </p>
                                  </div>
                                </div>
                            </div>
                            <div className="accordion-items">
                                <h2 className="accordion-header">
                                  <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      How we do it?
                                      <span className="accordion-icon"></span>
                                  </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.!
                                      </p>
                                  </div>
                                </div>
                            </div>
                            <div className="accordion-items">
                                <h2 className="accordion-header">
                                  <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      How  can i download the products?
                                      <span className="accordion-icon"></span>
                                  </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.!
                                      </p>
                                  </div>
                                </div>
                            </div>
                            <div className="accordion-items">
                                <h2 className="accordion-header">
                                  <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                      Free Shipping  & Return Order
                                      <span className="accordion-icon"></span>
                                  </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.!
                                      </p>
                                  </div>
                                </div>
                            </div>
                            <div className="accordion-items">
                                <h2 className="accordion-header">
                                  <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                      Payment options
                                      <span className="accordion-icon"></span>
                                  </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.!
                                      </p>
                                  </div>
                                </div>
                            </div>
                            <div className="accordion-items">
                                <h2 className="accordion-header">
                                  <button className="accordion-buttons collapsed" type="button" data-bs-toggle="collapse"
                                      data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                      Payment options
                                      <span className="accordion-icon"></span>
                                  </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do. eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris.!
                                      </p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div id="chatbot-container"></div>
                </div>
              </div>
          </div>
        </div>                

      {/* Config must load first */}
      <Script id="chat-widget-config" strategy="afterInteractive">
        {`
          window.ChatWidgetConfig = {
            webhook: {
              url: 'https://n8n.srv846563.hstgr.cloud/webhook/a9cd9118-903e-4d08-a006-cae76257ee7f/chat',
              route: 'general'
            },
            branding: {
              logo: 'https://beta.webefytoday.com/wp-content/uploads/2025/07/new-webefy-white.png',
              name: 'Webefy Assistant',
              welcomeText: 'Hi there! How can I help you today?',
              responseTimeText: 'Typically replies in a few seconds'
            },
            style: {
              primaryColor: '#4CAF50',
              secondaryColor: '#388E3C',
              position: 'static',
              backgroundColor: '#f9f9f9',
              fontColor: '#000'
            }
          };
        `}
      </Script>

      {/* Load your chat.js AFTER config */}
      <Script src="/assets/js/chatbot.js" strategy="afterInteractive" />
    </div>
  );
}