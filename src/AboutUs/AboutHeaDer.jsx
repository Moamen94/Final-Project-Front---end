import React from "react";
import "../Style/AboutHeaDer.css"; 

export default function AboutHeaDer({
  title = "About Us",
  homeHref = "#",
  homeLabel = "Home",
}) {
  return (
    <section className="page-hero" dir="ltr">
      <div className="page-hero__inner">
        <h1 className="page-hero__title">{title}</h1>

        <nav aria-label="Breadcrumb" className="breadcrumb">
          <a href={homeHref} className="crumb-home">{homeLabel}</a>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{title}</span>
        </nav>
      </div>
    </section>
  );
}
