import ContactButton from '../components/ContactButton';

export default function Schedule() {
  return (
    <div className="container py-5">
      <h1 className="section-title text-center mb-5">Schedule a Lesson</h1>

      <div className="card shadow">
        <div className="card-body p-4">
          <div className="text-center mb-5">
            <h2 className="h3 mb-4 text-italian-green">Book Your Italian Lesson</h2>
            <p className="lead text-muted">
              Choose a time that works best for you. All lessons are conducted online via video call.
            </p>
          </div>
          
          {/* Placeholder for Calendly integration */}
          <div className="card border-0 mb-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body p-5 text-center">
              <div className="mb-4">
                <i className="bi bi-calendar-check display-4 text-italian-green mb-3"></i>
                <h3 className="h4 mb-3">Calendly Integration Coming Soon!</h3>
                <p className="text-muted mb-4">
                  For now, please contact me directly to schedule a lesson.
                </p>
              </div>
              <ContactButton />
            </div>
          </div>

          <div className="mt-5">
            <h3 className="h4 mb-4 text-center">Lesson Information</h3>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="card-body">
                    <h4 className="h5 mb-3">Lesson Duration</h4>
                    <p className="text-muted mb-0">60 minutes per session</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="card-body">
                    <h4 className="h5 mb-3">Platform</h4>
                    <p className="text-muted mb-0">Zoom or Google Meet</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="card-body">
                    <h4 className="h5 mb-3">Payment</h4>
                    <p className="text-muted mb-0">Secure online payment</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="card-body">
                    <h4 className="h5 mb-3">Cancellation Policy</h4>
                    <p className="text-muted mb-0">24-hour notice required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 