export default function SectionTitle({ kicker, a, b, light, center }: { kicker?: string; a: string; b: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`st${light ? " light" : ""}${center ? " center" : ""}`}>
      {kicker && <p className={`kicker${light ? " light" : ""}`}>{kicker}</p>}
      <h2><span className="lt">{a}</span> <span className="hd">{b}</span></h2>
    </div>
  );
}
