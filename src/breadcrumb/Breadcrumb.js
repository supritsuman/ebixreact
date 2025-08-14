import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Get current path name (e.g. "/about-us" → "About Us")
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || 'Home';

  // Capitalize and replace hyphens with spaces
  const formatName = (name) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="container-fluid px-4 breadcrumbtop">
      <div
        className=""
        style={{ '--bs-breadcrumb-divider': "'/'" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          {pathSegments.length > 0 && (
            <li className="breadcrumb-item active" aria-current="page">
              {formatName(currentPage)}
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
