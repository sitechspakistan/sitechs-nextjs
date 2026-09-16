export default function HeroFacts({ facts }) {
  return (
    <div className="svc-facts">
      {facts.map((f) => (
        <div className="svc-facts__cell" key={f.label}>
          <div className="svc-facts__label">{f.label}</div>
          <div className="svc-facts__value">{f.value}</div>
        </div>
      ))}
    </div>
  );
}
