import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Split the pathname into segments and format them
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div className="lg:p-4 pl-5 lg:pl-16 mt-5">
      <nav className="text-gray-700 text-sm">
        <ul className="flex items-center space-x-2">
          <li>
            <a href="/" className="text-blue-500 hover:underline">
              Home
            </a>
          </li>

          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLastSegment = index === pathSegments.length - 1;

            return (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                {isLastSegment ? (
                  <span className="text-gray-500 capitalize">{segment}</span>
                ) : (
                  <a href={path} className="text-blue-500 hover:underline capitalize">
                    {segment}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
