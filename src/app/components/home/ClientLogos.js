import { clientLogos } from "../../../data/home";

const doubled = [...clientLogos, ...clientLogos];

export default function ClientLogos() {
  return (
    <div className="client-logos">
      <div className="eyebrow client-logos__eyebrow">Trusted by teams that ship</div>
      <div className="client-logos__mask">
        <div className="client-logos__track">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="client-logos__item"
              title={logo.name}
              style={{ backgroundImage: `url("${logo.src}")` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
