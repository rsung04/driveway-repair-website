import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex items-center justify-center px-4 py-8">
      <SEO
        title="Page Not Found | Sydney Driveway Repair"
        description="The page you're looking for doesn't exist."
        noIndex={true}
      />
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-surface-300 mb-4">404</h1>
        <h2 className="text-2xl text-surface-900 mb-4">Page Not Found</h2>
        <p className="text-surface-700 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-primary-600 hover:bg-primary-700 text-white">
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
