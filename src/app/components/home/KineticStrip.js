import { stripItems } from "../../../data/home";

export default function KineticStrip() {
  return (
    <div className="kinetic-strip">
      <div className="kinetic-strip__track">
        {stripItems.map((item, i) => (
          <div className="kinetic-strip__item" key={`${item}-${i}`}>
            {item}
            <span style={{ fontSize: 11 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
