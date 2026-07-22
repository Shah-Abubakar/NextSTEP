import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5F1E6]/80 backdrop-blur-xl border-b" style={{ borderColor: 'rgba(17, 17, 17, 0.08)' }}>
      <div className="section-container">
        <div className="flex h-14 items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-primary p-2 rounded-lg">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
