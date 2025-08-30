import React from 'react';
import '../Style/ContactTop.css';


const PageHeader = () => {
  return (
    <div className="page-header-container">
      <div className="gradient-background"></div>
      <div className="page-header-content">
        <h1 className="page-title">Contact</h1>
        <div className="breadcrumbs">
          <a href="#" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-divider">/</span>
          <span className="current-page">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;