import GoldDivider from "./GoldDivider";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeader = ({ subtitle, title, description, light }: SectionHeaderProps) => (
  <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
    {subtitle && (
      <span className="text-primary text-sm tracking-[0.3em] uppercase font-body font-medium">
        {subtitle}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 ${light ? "text-foreground" : "text-gradient-gold"}`}>
      {title}
    </h2>
    <GoldDivider className="my-4" />
    {description && (
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeader;
