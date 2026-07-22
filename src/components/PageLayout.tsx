import React from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, subtitle, children }: PageLayoutProps) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  // Generate breadcrumbs from path
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
    return { label, path };
  });

  const showBreadcrumbs = breadcrumbs.length > 0;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Page Header */}
        <div className="pt-8 pb-6 border-b border-border/40">
          <div className="section-container">
            {/* Breadcrumbs */}
            {showBreadcrumbs && (
              <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4 overflow-x-auto whitespace-nowrap pb-1">
                <Link to="/" className="hover:text-primary transition-colors shrink-0">
                  Home
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <React.Fragment key={crumb.path}>
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-foreground font-medium truncate">{crumb.label}</span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="hover:text-primary transition-colors shrink-0"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
                {subtitle && (
                  <p className="mt-2 text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="section-container py-8">{children}</main>
      </div>
    </div>
  );
};

export default PageLayout;
