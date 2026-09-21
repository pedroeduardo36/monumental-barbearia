import logo from "../../assets/images/logo-transparent.png";
interface BrandProps {
  compact?: boolean;
}
export function Brand({ compact = false }: BrandProps) {
  return (
    <a
      className={`brand ${compact ? "brand--compact" : ""}`}
      href="#inicio"
      aria-label="Monumental Barbearia — início"
    >
      <img src={logo} alt="Monumental Barbearia" />
    </a>
  );
}
