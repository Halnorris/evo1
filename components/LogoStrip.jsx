import Tbc from './Tbc';

export default function LogoStrip({ logos, color = false, label }) {
  const visible = logos.filter((l) => l.show !== false);
  return (
    <ul className={`logo-strip ${color ? 'logo-strip--color' : ''}`} aria-label={label}>
      {visible.map((l) => (
        <li key={l.name}>
          {l.src ? (
            <img src={l.src} alt={l.name} width={l.width} height={l.height} loading="lazy" decoding="async" />
          ) : (
            <Tbc>{`${l.name}: ${l.tbc || 'logo to follow'}`}</Tbc>
          )}
        </li>
      ))}
    </ul>
  );
}
