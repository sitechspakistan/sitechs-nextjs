"use client";

import { useEffect, useState } from "react";
import { stepData } from "../../../data/services/chromeExtensions";

export default function ExtensionDemo() {
  const [step, setStep] = useState(0);
  const done = step >= stepData.length;

  useEffect(() => {
    const startT = setTimeout(() => {
      const id = setInterval(() => {
        setStep((s) => {
          if (s + 1 >= stepData.length) clearInterval(id);
          return s + 1;
        });
      }, 520);
    }, 1200);
    return () => clearTimeout(startT);
  }, []);

  return (
    <div className="ext-demo">
      <div className="ext-demo__chrome">
        <span className="ext-demo__dot" />
        <span className="ext-demo__dot" />
        <span className="ext-demo__dot" />
        <span className="ext-demo__url">linkedin.com/in/prospect</span>
        <span className="ext-demo__avatar" style={{ boxShadow: `0 0 0 ${done ? "4px" : "0px"} rgba(163,156,224,.35)` }}>
          S
        </span>
      </div>
      <div className="ext-demo__popup">
        <div className="ext-demo__popup-head">Capture to CRM v2.1</div>
        <div className="ext-demo__popup-body">
          {stepData.map((s, i) => {
            const hit = i < step;
            return (
              <div className="ext-demo__step" key={s.text} style={{ opacity: hit ? 1 : 0.35 }}>
                <span className="ext-demo__step-ring" style={{ background: hit ? "#A39CE0" : "transparent" }}>
                  {hit ? "✓" : ""}
                </span>
                {s.text}
                {hit && <span className="ext-demo__step-ms">{s.ms}</span>}
              </div>
            );
          })}
        </div>
        <div className={`ext-demo__done${done ? " is-done" : ""}`}>
          {done ? "Contact created in HubSpot — 0.7s, no tab switch." : "Working…"}
        </div>
      </div>
    </div>
  );
}
