function normalize(list) {
  if (!list) return [];
  const items = Array.isArray(list) ? list : [list];
  return items.map((b) =>
    typeof b === "string" ? { isText: true, text: b } : { isText: false, items: b.items || [] }
  );
}

function Block({ block }) {
  if (block.isText) {
    return <p className="cs-body__text">{block.text}</p>;
  }
  return (
    <div className="cs-body__list">
      {block.items.map((it) => (
        <div className="cs-body__list-item" key={it}>
          <span>◆</span>
          <span>{it}</span>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyBody({ heading, list }) {
  const blocks = normalize(list);
  if (blocks.length === 0) return null;

  return (
    <div className="cs-body">
      <h2 className="cs-body__heading">{heading}</h2>
      <div className="cs-body__rule" />
      <div className="cs-body__blocks">
        {blocks.map((block, i) => (
          <Block block={block} key={i} />
        ))}
      </div>
    </div>
  );
}
