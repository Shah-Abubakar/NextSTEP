import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
}

const CategoryCard = ({ title, description, icon: Icon, link, color }: CategoryCardProps) => {
  return (
    <Link to={link} className="group block h-full">
      <div className="relative h-full border border-border/50 bg-card p-6 card-hover overflow-hidden">
        {/* Icon */}
        <div className="mb-5">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="display-heading text-lg leading-[1.1] mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
