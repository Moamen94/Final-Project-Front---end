import React from "react";
import '../Style/Pg4HomeFooter.css'; 
import programming from '../assets/programming.png';
import tecknolog from '../assets/tecknolog.png'
  const postsLeft = [
    {
      id: 1,
      date: "Jun 01, 2024",
      category: "Technology",
      title: "Professional Mobile Painting and Sculpting",
      image:tecknolog,
    },
    {
      id: 2,
      date: "May 29, 2024",
      category: "Programming",
      title: "Professional Ceramic Moulding for Beginner",
      image:programming,
    },
  ];
  
  const postsRight = [
    {
      id: 3,
      date: "Jun 01, 2024",
      category: "Technology",
      title: "Professional Mobile Painting and Sculpting",
    },
    {
      id: 4,
      date: "May 29, 2024",
      category: "Programming",
      title: "Professional Ceramic Moulding for Beginner",
    },
  ];


 function Pg4HomeFooter() {
  return (
    <section className="blog-section" dir="ltr">
      <div className="blog-grid">
        
        <div className="grid-left">
          {postsLeft.map((p) => (
            <article key={p.id} className="post post--with-image">
              <div className="post__media">
                
                <img src={p.image} alt={p.title} />
              </div>

              <div className="post__body">
                <div className="post__meta">
                  <time className="post__date">{p.date}</time>
                  <span className="post__sep">|</span>
                  <a href="#" className="post__cat">
                    {p.category}
                  </a>
                </div>

                <h3 className="post__title">{p.title}</h3>

                <a href="#" className="post__cta">
                  READ MORE <span className="post__arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        
        <div className="grid-right">
          {postsRight.map((p) => (
            <article key={p.id} className="post post--text">
              <div className="post__body">
                <div className="post__meta">
                  <time className="post__date">{p.date}</time>
                  <span className="post__sep">|</span>
                  <a href="#" className="post__cat">
                    {p.category}
                  </a>
                </div>

                <h3 className="post__title">{p.title}</h3>

                <a href="#" className="post__cta">
                  READ MORE <span className="post__arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pg4HomeFooter;
