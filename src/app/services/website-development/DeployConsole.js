"use client";

import { useEffect, useState } from "react";
import { logData, typeTarget, vitals } from "../../../data/services/websiteDevelopment";

export default function DeployConsole() {
  const [typedN, setTypedN] = useState(0);
  const [logStep, setLogStep] = useState(0);
  const [vitalsOn, setVitalsOn] = useState(false);
  const [caretOn, setCaretOn] = useState(true);

  useEffect(() => {
    const caretId = setInterval(() => setCaretOn((c) => !c), 520);
    return () => clearInterval(caretId);
  }, []);

  useEffect(() => {
    if (typedN >= typeTarget.length) return;
    const id = setTimeout(() => setTypedN((n) => n + 1), 58);
    return () => clearTimeout(id);
  }, [typedN]);

  useEffect(() => {
    if (typedN < typeTarget.length) return;
    if (logStep >= logData.length) {
      setVitalsOn(true);
      return;
    }
    const id = setTimeout(() => setLogStep((s) => s + 1), 420);
    return () => clearTimeout(id);
  }, [typedN, logStep]);

  return (
    <div className="deploy-console">
      <div className="deploy-console__head">
        <span className="deploy-console__dot" />
        sitechs — production deploy
        <span className="deploy-console__live">live</span>
      </div>
      <div className="deploy-console__body">
        {logData.slice(0, logStep).map((line) => (
          <div className="deploy-console__line" key={line.text}>
            <span className="deploy-console__check">✓</span>
            {line.text}
            <span className="deploy-console__ms">{line.ms}</span>
          </div>
        ))}
        <div className="deploy-console__cmd">
          <span>▸</span> {typeTarget.slice(0, typedN)}
          <span className={`deploy-console__caret${caretOn ? " is-on" : ""}`}>▌</span>
        </div>
      </div>
      <div className="deploy-console__vitals">
        {vitals.map((v) => (
          <div className="deploy-console__vital" key={v.label}>
            <div className="deploy-console__vital-value">{vitalsOn ? v.value : "—"}</div>
            <div className="deploy-console__vital-label">{v.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
