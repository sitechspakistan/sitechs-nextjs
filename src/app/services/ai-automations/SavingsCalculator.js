"use client";

import { useState } from "react";
import { sliders } from "../../../data/services/aiAutomations";

const money = (n) => `$${Math.round(n).toLocaleString("en-US")}`;

export default function SavingsCalculator() {
  const [people, setPeople] = useState(sliders.people.defaultValue);
  const [hours, setHours] = useState(sliders.hours.defaultValue);
  const [rate, setRate] = useState(sliders.rate.defaultValue);

  const monthlyHours = Math.round(people * hours * 4.3);
  const monthly = monthlyHours * rate;
  const yearly = monthly * 12;

  return (
    <section id="savings" className="savings-section">
      <div className="savings-header">
        <div className="eyebrow">05 — Do the math</div>
        <h2 className="savings-title">What the manual version costs you.</h2>
        <p className="savings-intro">Move the sliders. These are your numbers, not an industry average.</p>
      </div>

      <div className="savings-grid">
        <div className="savings-panel">
          <div className="savings-slider">
            <div className="savings-slider__row">
              <label htmlFor="s-people">{sliders.people.label}</label>
              <span>{people}</span>
            </div>
            <input
              id="s-people"
              type="range"
              min={sliders.people.min}
              max={sliders.people.max}
              step={sliders.people.step}
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
            />
          </div>
          <div className="savings-slider">
            <div className="savings-slider__row">
              <label htmlFor="s-hours">{sliders.hours.label}</label>
              <span>{hours} hrs</span>
            </div>
            <input
              id="s-hours"
              type="range"
              min={sliders.hours.min}
              max={sliders.hours.max}
              step={sliders.hours.step}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
          </div>
          <div className="savings-slider">
            <div className="savings-slider__row">
              <label htmlFor="s-rate">{sliders.rate.label}</label>
              <span>${rate}</span>
            </div>
            <input
              id="s-rate"
              type="range"
              min={sliders.rate.min}
              max={sliders.rate.max}
              step={sliders.rate.step}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <p className="savings-disclaimer">
            Assumes automation absorbs the repetitive share of that work. Results are a directional estimate, not a
            quote.
          </p>
        </div>

        <div className="savings-results">
          <div className="savings-result">
            <div className="savings-result__label">Hours / month</div>
            <div className="savings-result__value">{monthlyHours.toLocaleString("en-US")}</div>
          </div>
          <div className="savings-result">
            <div className="savings-result__label">Potential saving / month</div>
            <div className="savings-result__value">{money(monthly)}</div>
          </div>
          <div className="savings-result">
            <div className="savings-result__label">Potential saving / year</div>
            <div className="savings-result__value savings-result__value--accent">{money(yearly)}</div>
          </div>
          <a href="#contact" className="savings-cta">
            Check these numbers with us
          </a>
        </div>
      </div>
    </section>
  );
}
