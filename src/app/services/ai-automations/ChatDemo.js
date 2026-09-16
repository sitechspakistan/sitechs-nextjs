"use client";

import { useEffect, useState } from "react";
import { chatData } from "../../../data/services/aiAutomations";

export default function ChatDemo() {
  const [msg, setMsg] = useState(0);
  const typing = msg < chatData.length;

  useEffect(() => {
    if (msg >= chatData.length) return;
    const id = setTimeout(() => setMsg((m) => m + 1), 900);
    return () => clearTimeout(id);
  }, [msg]);

  return (
    <div className="chat-demo">
      <div className="chat-demo__head">
        <span className="chat-demo__avatar">S</span>
        <div>
          <div className="chat-demo__title">Sitechs AI Agent</div>
          <div className="chat-demo__status">
            <span className="chat-demo__status-dot" />
            02:14 local
          </div>
        </div>
      </div>
      <div className="chat-demo__body">
        {chatData.slice(0, msg).map((m, i) => (
          <div key={i} className={`chat-demo__bubble${m.who === "us" ? " chat-demo__bubble--us" : ""}`}>
            {m.text}
          </div>
        ))}
        {typing && (
          <div className="chat-demo__typing">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
    </div>
  );
}
