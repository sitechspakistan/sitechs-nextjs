export default function Marquee({ items }) {
  return (
    <div className="svc-marquee">
      <div className="svc-marquee__track">
        {items.map((item, i) => (
          <div className="svc-marquee__item" key={`${item}-${i}`}>
            {item}
            <span style={{ fontSize: 11 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
