"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import useMagnetic from "../../hooks/useMagnetic";
import { useParallax } from "../../hooks/useParallax";
import {
  industryMap,
  industryPlaceholders,
  genericPlan,
  ownIdea,
} from "../../../data/home";

function matchIndustry(raw) {
  const v = (raw || "").toLowerCase().trim();
  if (v.length < 3) return -1;
  return industryMap.findIndex((m) => m.keys.some((k) => v.includes(k) || k.includes(v)));
}

export default function Hero() {
  const inputRef = useRef(null);
  const magnetic = useMagnetic();
  const glowRef = useParallax(0.18);

  const [industry, setIndustryValue] = useState("");
  const [touched, setTouched] = useState(false);
  const [phIdx, setPhIdx] = useState(0);
  const [picked, setPicked] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", own: "" });

  useEffect(() => {
    const id = setInterval(() => {
      if (!touched && !industry) {
        setPhIdx((i) => (i + 1) % industryPlaceholders.length);
      }
    }, 2000);
    return () => clearInterval(id);
  }, [touched, industry]);

  const matchIdx = useMemo(() => matchIndustry(industry), [industry]);
  const plan = matchIdx >= 0 ? industryMap[matchIdx] : genericPlan;
  const placeholder = industryPlaceholders[phIdx];
  const inputLen = Math.max(industry.length || placeholder.length, 12);
  const ideaList = useMemo(() => [...plan.ideas, ownIdea], [plan]);
  const isOwn = picked === plan.ideas.length;

  const onIndustry = (e) => {
    const value = e.target.value;
    setIndustryValue(value);
    setTouched(true);
    setPicked(-1);
  };

  const pickIdea = (i) => {
    setPicked(i);
    setModalOpen(true);
    setSent(false);
    setErr("");
  };

  const closeModal = () => setModalOpen(false);

  const submitLead = async () => {
    if (!lead.name.trim()) return setErr("Please add your name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.email.trim())) {
      return setErr("Please add a valid email address.");
    }
    if (isOwn && !lead.own.trim()) {
      return setErr("Tell us in a line what you would automate.");
    }

    const payload = {
      industry: industry.trim() || plan.label,
      idea: isOwn ? lead.own.trim() : ideaList[picked]?.title || "",
      ideaType: isOwn ? "own" : "suggested",
      name: lead.name.trim(),
      email: lead.email.trim(),
    };

    setErr("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setErr(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setErr("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const contextLabel = industry.trim() || plan.label;
  const firstName = lead.name.trim().split(" ")[0] || "there";

  return (
    <section className="hero" id="top">
      <div className="hero__glow" ref={glowRef} />
      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          AI automation &amp; digital product studio — since 2014
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">
            <span>We automate</span>
          </span>
          <span className="hero__field-wrap">
            <span
              className="hero__field"
              onClick={() => inputRef.current?.focus()}
            >
              <input
                ref={inputRef}
                className="hero__input"
                value={industry}
                onChange={onIndustry}
                onFocus={() => setTouched(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                placeholder={placeholder}
                spellCheck={false}
                aria-label="Type your industry"
                style={{ width: `${inputLen}ch` }}
              />
              {!touched && (
                <span className="hero__hint">
                  <svg
                    className="hero__hint-arrow"
                    viewBox="0 0 120 84"
                    width="92"
                    height="64"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M114 8C104 42 78 58 22 42"
                      stroke="#A39CE0"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M46 20C33 30 23 40 22 42 24 44 34 53 46 62"
                      stroke="#A39CE0"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="hero__hint-text">type yours</span>
                </span>
              )}
            </span>
          </span>
          <span className="hero__title-line hero__title-line--2">
            <span>and design the rest.</span>
          </span>
        </h1>

        <div className="hero__panel">
          <div className="hero__panel-head">
            <span className="hero__panel-dot" />
            {matchIdx >= 0 ? `Automation ideas — ${plan.label}` : "Automation ideas"}
            <div className="hero__panel-spacer" />
            <span>{plan.eta}</span>
          </div>
          <div className="hero__panel-body">
            <p className="hero__panel-lead">{plan.lead}</p>
            <div className="hero__ideas">
              {ideaList.map((idea, i) => (
                <button
                  key={idea.title}
                  type="button"
                  className={`hero__idea${picked === i ? " hero__idea--active" : ""}`}
                  onClick={() => pickIdea(i)}
                >
                  <span className="hero__idea-n">
                    {i === plan.ideas.length ? "Own idea" : `Idea ${String(i + 1).padStart(2, "0")}`}
                  </span>
                  <span className="hero__idea-title">{idea.title}</span>
                  <span className="hero__idea-body">{idea.body}</span>
                  <span className="hero__idea-foot">{idea.foot}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__actions">
          <a
            href="#contact"
            className="btn btn--primary"
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            Book a call
          </a>
          <a href="#work" className="btn btn--outline">
            See the work
          </a>
        </div>
      </div>

      {modalOpen && (
        <div className="lead-modal__overlay" onClick={closeModal}>
          <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lead-modal__head">
              <span className="lead-modal__dot" />
              {sent ? "Request received" : "Step 2 of 2 — who are we sending it to?"}
              <div className="lead-modal__spacer" />
              <button type="button" className="lead-modal__close" onClick={closeModal} aria-label="Close">
                ✕
              </button>
            </div>

            {sent ? (
              <div className="lead-modal__success">
                <div className="lead-modal__check">✓</div>
                <h3>Got it, {firstName}.</h3>
                <p>
                  We will send a short breakdown of how we would build this — scope, timeline and cost — to{" "}
                  {lead.email} within one working day.
                </p>
                <button type="button" className="lead-modal__success-close" onClick={closeModal}>
                  Close
                </button>
              </div>
            ) : (
              <div className="lead-modal__form">
                <div className="lead-modal__context">
                  <div className="lead-modal__context-label">{contextLabel}</div>
                  <div className="lead-modal__context-title">{picked >= 0 ? ideaList[picked].title : ""}</div>
                </div>

                {isOwn && (
                  <div className="lead-modal__field">
                    <label className="lead-modal__label" htmlFor="lead-own">
                      What would you automate?
                    </label>
                    <textarea
                      id="lead-own"
                      className="lead-modal__textarea"
                      rows={3}
                      value={lead.own}
                      onChange={(e) => setLead((s) => ({ ...s, own: e.target.value }))}
                      placeholder="Describe the process that eats your week…"
                    />
                  </div>
                )}

                <div className="lead-modal__grid">
                  <div>
                    <label className="lead-modal__label" htmlFor="lead-name">
                      Name
                    </label>
                    <input
                      id="lead-name"
                      className="lead-modal__input"
                      value={lead.name}
                      onChange={(e) => setLead((s) => ({ ...s, name: e.target.value }))}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="lead-modal__label" htmlFor="lead-email">
                      Work email
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      className="lead-modal__input"
                      value={lead.email}
                      onChange={(e) => setLead((s) => ({ ...s, email: e.target.value }))}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                {err && <div className="lead-modal__error">{err}</div>}

                <button
                  type="button"
                  className="lead-modal__submit"
                  onClick={submitLead}
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send me the breakdown"}
                </button>
                <div className="lead-modal__note">No newsletter. One reply from a human.</div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
