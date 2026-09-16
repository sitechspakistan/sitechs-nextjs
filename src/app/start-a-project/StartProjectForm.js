"use client";

import { useState } from "react";
import useMagnetic from "../hooks/useMagnetic";
import { serviceList, budgetList } from "../../data/startProject";

const emptyForm = {
  services: [],
  budget: "",
  name: "",
  email: "",
  company: "",
  website: "",
  brief: "",
};

export default function StartProjectForm() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const magnetic = useMagnetic();

  const toggleService = (label) => {
    setError("");
    setForm((f) => ({
      ...f,
      services: f.services.includes(label) ? f.services.filter((s) => s !== label) : [...f.services, label],
    }));
  };

  const pickBudget = (label) => {
    setForm((f) => ({ ...f, budget: f.budget === label ? "" : label }));
  };

  const setField = (key) => (e) => {
    setError("");
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const submit = async () => {
    if (!form.services.length) return setError("Pick at least one service first.");
    if (!form.name.trim()) return setError("We need a name to reply to.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.trim())) return setError("That email does not look right.");
    if (form.brief.trim().length < 12) return setError("Tell us a little more about the problem.");

    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/start-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setSent(false);
    setError("");
  };

  if (sent) {
    return (
      <div className="sap-success">
        <div className="sap-success__check">✓</div>
        <h2 className="sap-success__title">Brief received.</h2>
        <p className="sap-success__body">
          We read every one properly. You will hear back within one working day, from a person, with an actual
          opinion on your project.
        </p>
        <button type="button" className="sap-success__reset" onClick={reset}>
          Send another brief
        </button>
      </div>
    );
  }

  const statusText = error || (form.services.length ? `${form.services.length} service${form.services.length > 1 ? "s" : ""} selected` : "Pick at least one service");

  return (
    <div className="sap-form">
      <div className="eyebrow">The brief</div>
      <h2 className="sap-form__title">Three questions.</h2>
      <p className="sap-form__intro">The more specific the last one, the better the first reply.</p>

      <div className="sap-question">
        <span className="sap-question__n">01</span>
        <div className="sap-question__body">
          <div className="sap-question__label">What do you need?</div>
          <div className="sap-question__hint">Pick everything that applies.</div>
          <div className="sap-chips">
            {serviceList.map((label) => {
              const active = form.services.includes(label);
              return (
                <button
                  type="button"
                  key={label}
                  onClick={() => toggleService(label)}
                  className={`sap-chip${active ? " sap-chip--active" : ""}`}
                >
                  <span className={`sap-chip__dot${active ? " sap-chip__dot--active" : ""}`} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="sap-rule" />

      <div className="sap-question">
        <span className="sap-question__n">02</span>
        <div className="sap-question__body">
          <div className="sap-question__label">Budget range</div>
          <div className="sap-question__hint">A rough band is enough — it shapes what we propose.</div>
          <div className="sap-chips">
            {budgetList.map((label) => (
              <button
                type="button"
                key={label}
                onClick={() => pickBudget(label)}
                className={`sap-chip sap-chip--budget${form.budget === label ? " sap-chip--active" : ""}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sap-rule" />

      <div className="sap-question">
        <span className="sap-question__n">03</span>
        <div className="sap-question__body">
          <div className="sap-question__label">About you</div>
          <div className="sap-fields">
            <label className="sap-field">
              <span>Your name</span>
              <input type="text" value={form.name} onChange={setField("name")} placeholder="Ayesha Khan" />
            </label>
            <label className="sap-field">
              <span>Work email</span>
              <input type="email" value={form.email} onChange={setField("email")} placeholder="you@company.com" />
            </label>
            <label className="sap-field">
              <span>Company</span>
              <input type="text" value={form.company} onChange={setField("company")} placeholder="Optional" />
            </label>
            <label className="sap-field">
              <span>Website</span>
              <input type="text" value={form.website} onChange={setField("website")} placeholder="Optional" />
            </label>
          </div>
          <label className="sap-field sap-field--textarea">
            <span>What is the problem, in your words?</span>
            <textarea
              rows={4}
              value={form.brief}
              onChange={setField("brief")}
              placeholder="The site is slow and the form barely converts. We also re-key every lead into the CRM by hand."
            />
          </label>
        </div>
      </div>

      <div className="sap-submit-row">
        <button
          type="button"
          className="sap-submit"
          onClick={submit}
          onMouseMove={magnetic.onMouseMove}
          onMouseLeave={magnetic.onMouseLeave}
          disabled={submitting}
        >
          {submitting ? "Sending…" : "Send the brief"}
          <span className="sap-submit__icon">↗</span>
        </button>
        <span className={`sap-status${error ? " sap-status--error" : ""}`}>{statusText}</span>
      </div>
    </div>
  );
}
