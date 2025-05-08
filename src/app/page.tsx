import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(0,146,70,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(206,43,55,0.1) 100%)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--italian-dark)' }}>
            Learn Italian with a Native Teacher
          </h1>
          <p className="lead mb-5" style={{ color: 'var(--italian-dark)' }}>
            Personalized Italian lessons tailored to your goals and learning style
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/EHsite/schedule" className="btn btn-primary btn-lg">
              Book Your First Lesson
            </a>
            <a href="/EHsite/about" className="btn btn-secondary btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why Learn With Me</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="mb-4" style={{ fontSize: '2rem' }}>🇮🇹</div>
                  <h3 className="card-title h4 mb-3">Native Speaker</h3>
                  <p className="card-text">
                    Learn authentic Italian pronunciation and expressions from a native speaker
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="mb-4" style={{ fontSize: '2rem' }}>🎯</div>
                  <h3 className="card-title h4 mb-3">Customized Learning</h3>
                  <p className="card-text">
                    Lessons tailored to your specific goals, whether for travel, business, or personal growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="mb-4" style={{ fontSize: '2rem' }}>⏰</div>
                  <h3 className="card-title h4 mb-3">Flexible Schedule</h3>
                  <p className="card-text">
                    Book lessons at times that work for you, with online sessions available worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ 
        background: 'linear-gradient(135deg, rgba(0,146,70,0.05) 0%, rgba(255,255,255,0.5) 50%, rgba(206,43,55,0.05) 100%)'
      }}>
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--italian-dark)' }}>
            Ready to Start Your Italian Journey?
          </h2>
          <p className="lead mb-5" style={{ color: 'var(--italian-dark)' }}>
            Book your first lesson today and take the first step towards fluency
          </p>
          <a href="/EHsite/schedule" className="btn btn-secondary btn-lg">
            Schedule Now
          </a>
        </div>
      </section>
    </div>
  );
}
