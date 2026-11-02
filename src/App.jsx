
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const image = {
  banner:
    "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8ca55c188e59cf91d8_Banner%20Girl.webp",
  trusted:
    "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66f638f0e915508fda239b73_Trusted%20By%20Image.avif",
  achievements:
    "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b79cb093fa869be54_Achievements.webp",
  woman:
    "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8b45a3029806674bb6_Woman%20Image%20Holding%20Copy-p-500.webp",
  man:
    "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph.webp",
  testimonial:
    "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66cd64ef67641295ddd2ffc9_Testimonial%20Author%20Image-2.avif",
  course1:
    "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9dfb3e87f8984b5a15b6_Course%20Small%20Image-p-800.webp",
  course2:
    "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e1184c0c12d2244968d_Course%20Small%20Image-9.webp",
  course3:
    "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e363f6e47ec5245cf09_Course%20Small%20Image-7.webp",
  course4:
    "https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/66eb9e61096e930736b651e4_Course%20Small%20Image-5.webp",
};

const courses = [
  {
    category: "Management",
    title: "Crisis management and problem-solving strategies",
    rating: "4.88",
    lessons: "6 Lessons",
    students: "8k Enrolled",
    price: "Free",
    picture: image.course1,
    url: "https://elearna.webflow.io/crisis-management-and-problem-solving-strategies/course-details",
  },
  {
    category: "Design",
    title: "Advanced photoshop techniques for designers",
    rating: "5.00",
    lessons: "8 Lessons",
    students: "25k Enrolled",
    price: "Free",
    picture: image.course2,
    url: "https://elearna.webflow.io/advanced-photoshop-techniques-for-designers/course-details",
  },
  {
    category: "Management",
    title: "Operations management and process improvement",
    rating: "5.00",
    lessons: "12 Lessons",
    students: "23k Enrolled",
    price: "Free",
    picture: image.course3,
    url: "https://elearna.webflow.io/operations-management-and-process-improvement/course-details",
  },
  {
    category: "Development",
    title: "Database integration with MongoDB",
    rating: "4.49",
    lessons: "10 Lessons",
    students: "7k Enrolled",
    price: "$59",
    picture: image.course4,
    url: "https://elearna.webflow.io/database-integration-with-mongodb/course-details",
  },
  {
    category: "Management",
    title: "Risk management and business continuity",
    rating: "4.88",
    lessons: "3 Lessons",
    students: "8k Enrolled",
    price: "$49",
    picture: image.course1,
    url: "https://elearna.webflow.io/risk-management-and-business-continuity/course-details",
  },
  {
    category: "Development",
    title: "Full-stack development with the MERN stack",
    rating: "5.00",
    lessons: "12 Lessons",
    students: "22k Enrolled",
    price: "$72",
    picture: image.course2,
    url: "https://elearna.webflow.io/full-stack-development-with-the-mern-stack/course-details",
  },
];

const categories = [
  ["✦", "Creative web design", "8 Courses"],
  ["◈", "Finance accounting", "10 Courses"],
  ["⌘", "IT and software", "5 Courses"],
  ["◎", "Digital marketing", "4 Courses"],
  ["⌨", "Web development", "8 Courses"],
  ["✎", "Content writing", "3 Courses"],
];

function Button({ children, href = "#courses", outline = false }) {
  return (
    <a className={outline ? "button button-outline" : "button"} href={href}>
      {children} <span>→</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Courses", "#courses"],
    ["Categories", "#categories"],
    ["About", "#about"],
    ["Testimonials", "#testimonials"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo">
          <span className="logo-symbol">E</span>
          elearn<span>a.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          {links.map(([label, url]) => (
            <a key={label} href={url} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a href="#courses" className="search-link" aria-label="Search">⌕</a>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="eyebrow light-eyebrow">
            <span className="yellow-dot" /> ONLINE LEARNING PLATFORM
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            More than <span>25000+</span> education courses online
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover new opportunities, develop your skills, and achieve
            your professional goals with our online learning platform.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button>Get Started</Button>
            <a className="watch-link" href="#courses">
              <span className="play-button">▶</span>
              Explore Courses
            </a>
          </motion.div>

          <motion.div
            className="trusted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={image.trusted} alt="Trusted by organizations" />
            <span>Trusted by learners around the world</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <motion.img
            src={image.banner}
            alt="Student learning online"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="floating-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="floating-icon">▣</span>
            <div>
              <strong>Online Courses</strong>
              <small>Learn at your own pace</small>
            </div>
          </motion.div>
        </motion.div>

      </div>
      <div className="hero-circle" />
    </section>
  );
}


function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <SectionTitle
          eyebrow="TOP CATEGORIES"
          title="Discover leading categories to elevate your journey"
        />

        <div className="category-grid">
          {categories.map(([icon, name, count]) => (
            <a href="#courses" className="category-card" key={name}>
              <span className="category-icon">{icon}</span>
              <div>
                <h3>{name}</h3>
                <p>{count}</p>
              </div>
              <span className="category-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <article className="course-card">
      <a href={course.url} className="course-picture">
        <img src={course.picture} alt={course.title} />
        <span className="course-tag">{course.category}</span>
      </a>

      <div className="course-info">
        <div className="rating">
          <span>★</span> {course.rating}
        </div>
        <h3><a href={course.url}>{course.title}</a></h3>

        <div className="course-details">
          <span>▤ {course.lessons}</span>
          <span>♙ {course.students}</span>
        </div>

        <div className="course-bottom">
          <strong>{course.price}</strong>
          <a href={course.url}>Course Details →</a>
        </div>
      </div>
    </article>
  );
}

function Courses() {
  const [filter, setFilter] = useState("All courses");
  const filters = [
    "All courses",
    "Design",
    "Development",
    "Management",
  ];

  const visible =
    filter === "All courses"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="courses-heading">
          <SectionTitle
            eyebrow="ONLINE LEARNING"
            title="Top online courses"
          />
          <Button outline>View Courses</Button>
        </div>

        <div className="filters">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "filter active-filter" : "filter"}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="course-grid">
          {visible.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-image">
          <img src={image.woman} alt="Student learning" />
          <div className="about-image-label">
            <strong>Learn anywhere</strong>
            <span>Build your future with knowledge</span>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">ABOUT ELEARNА</span>
          <h2>Develop your skills online!</h2>
          <p>
            We assist you in finding the ideal learning opportunities.
            Browse available courses, improve your knowledge, and take
            the next step in your professional journey.
          </p>

          <ul className="check-list">
            <li><span>✓</span> Skill-based instruction</li>
            <li><span>✓</span> Analytics and insights</li>
            <li><span>✓</span> Global learning opportunities</li>
            <li><span>✓</span> Flexible online courses</li>
          </ul>

          <Button>Apply Now</Button>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="achievements">
      <div className="container achievements-inner">
        <div>
          <span className="eyebrow light-eyebrow">OUR ACHIEVEMENTS</span>
          <h2>Learn from leading universities and companies with us</h2>
        </div>
        <img src={image.achievements} alt="Elearna achievements" />
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae.",
      name: "Linda Grady",
      role: "Co-assistant manager",
    },
    {
      quote:
        "Learning online gives students the opportunity to develop their skills and discover new professional possibilities.",
      name: "Jim Adams",
      role: "Online learner",
    },
  ];

  const review = reviews[current];

  return (
    <section className="section testimonial-section" id="testimonials">
      <div className="container testimonial-grid">
        <div className="testimonial-heading">
          <span className="eyebrow">OUR TESTIMONIALS</span>
          <h2>Trusted by our successful students</h2>
          <p>Hear from learners about their learning experiences.</p>

          <div className="slider-controls">
            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setCurrent((current - 1 + reviews.length) % reviews.length)
              }
            >
              ←
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setCurrent((current + 1) % reviews.length)}
            >
              →
            </button>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <blockquote>“{review.quote}”</blockquote>
          <div className="review-author">
            <img src={image.testimonial} alt={review.name} />
            <div>
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trending() {
  return (
    <section className="section trending-section">
      <div className="container">
        <SectionTitle
          eyebrow="TRENDING COURSES"
          title="Explore our top programs"
        />
        <div className="trending-grid">
          {[courses[0], courses[3], courses[4], courses[5]].map((course) => (
            <a href={course.url} className="trending-card" key={course.title}>
              <img src={course.picture} alt={course.title} />
              <div>
                <span>{course.category}</span>
                <h3>{course.title}</h3>
                <p>★ {course.rating}</p>
                <strong>{course.price}</strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const benefits = [
    ["▤", "Learn anything", "Explore a wide range of courses and develop valuable skills."],
    ["♧", "Save money", "Find learning opportunities that fit your budget."],
    ["◷", "Flexible courses", "Learn at your own pace and according to your schedule."],
    ["✓", "Learn with confidence", "Build your professional profile through learning."],
  ];

  return (
    <section className="section why-section">
      <div className="container">
        <SectionTitle
          eyebrow="WHY CHOOSE US"
          title="Elevate your professional journey"
          description="Discover the tools and opportunities to take your learning and career to the next level."
        />

        <div className="benefit-grid">
          {benefits.map(([icon, title, description]) => (
            <div className="benefit-card" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow light-eyebrow">START LEARNING TODAY</span>
          <h2>Are you ready to start your journey?</h2>
        </div>
        <Button>Browse Courses</Button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a href="#home" className="logo footer-logo">
            <span className="logo-symbol">E</span>
            elearn<span>a.</span>
          </a>
          <p>
            Discover new opportunities, develop your skills, and achieve
            your professional goals with online learning.
          </p>
          <div className="socials">
            <a href="#footer">f</a>
            <a href="#footer">in</a>
            <a href="#footer">◎</a>
            <a href="#footer">𝕏</a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#courses">Courses</a>
          <a href="#categories">Categories</a>
        </div>

        <div>
          <h3>Popular Courses</h3>
          <a href={courses[0].url}>Management</a>
          <a href={courses[1].url}>Design</a>
          <a href={courses[3].url}>Development</a>
          <a href={courses[2].url}>Finance</a>
        </div>

        <div>
          <h3>Get in touch</h3>
          <p>Start your learning journey with Elearna.</p>
          <a href="#courses">Browse courses →</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Elearna. All rights reserved.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Courses />
        <About />
        <Achievements />
        <Testimonials />
        <Trending />
        <WhyChooseUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
