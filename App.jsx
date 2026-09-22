import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    time: "",
    location: "Trichy",
  });

  const updateBooking = (field, value) => {
    setBooking({
      ...booking,
      [field]: value,
    });
  };

  // HOME PAGE
  if (page === "home") {
    return (
      <div className="page home-page">
        <nav className="navbar">
          <div className="logo">ESHA</div>

          <div className="nav-links">
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("events")}>Events</button>
            <button onClick={() => setPage("about")}>About</button>
            <button onClick={() => setPage("contact")}>Contact</button>
          </div>
        </nav>

        <div className="hero-content">
          <p className="small-title">ESHA DIGITAL PHOTO STUDIO</p>

          <h1>
            Capture Your
            <br />
            Beautiful Moments
          </h1>

          <p className="hero-text">
            Professional Photography & Videography
            <br />
            for your special moments.
          </p>

          <button
            className="gold-btn"
            onClick={() => setPage("events")}
          >
            Explore Events →
          </button>
        </div>
      </div>
    );
  }

  // EVENTS PAGE
  if (page === "events") {
    const events = [
      ["💍", "Wedding Photography"],
      ["🎂", "Birthday Photography"],
      ["👶", "Baby Photography"],
      ["🎥", "Video Shoot"],
      ["👗", "Model Photography"],
      ["🎉", "Event Photography"],
    ];

    return (
      <div className="page events-page">
        <div className="page-header">
          <button className="back-btn" onClick={() => setPage("home")}>
            ← Back to Home
          </button>

          <p className="small-title">ESHA DIGITAL PHOTO STUDIO</p>
          <h1>Choose Your Event</h1>
          <p>Select an event and book your photography session.</p>
        </div>

        <div className="event-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-icon">{event[0]}</div>

              <h2>{event[1]}</h2>

              <p>
                Professional photography and beautiful memories
                for your special occasion.
              </p>

              <button
                className="gold-btn"
                onClick={() => {
                  updateBooking("event", event[1]);
                  setPage("booking");
                }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // BOOKING PAGE
  if (page === "booking") {
    return (
      <div className="page booking-page">
        <div className="booking-container">

          <button
            className="back-btn"
            onClick={() => setPage("events")}
          >
            ← Back to Events
          </button>

          <div className="page-title">
            <p className="small-title">BOOK YOUR EVENT</p>
            <h1>Event Booking</h1>
            <p>Enter your event details below.</p>
          </div>

          <div className="form-box">

            <label>Customer Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={booking.name}
              onChange={(e) =>
                updateBooking("name", e.target.value)
              }
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={booking.phone}
              onChange={(e) =>
                updateBooking("phone", e.target.value)
              }
            />

            <label>Selected Event</label>
            <input
              type="text"
              value={booking.event}
              readOnly
            />

            <label>Event Date</label>
            <input
              type="date"
              value={booking.date}
              onChange={(e) =>
                updateBooking("date", e.target.value)
              }
            />

            <label>Event Time</label>
            <input
              type="time"
              value={booking.time}
              onChange={(e) =>
                updateBooking("time", e.target.value)
              }
            />

            <label>Location</label>
            <input
              type="text"
              value={booking.location}
              onChange={(e) =>
                updateBooking("location", e.target.value)
              }
            />

            <button
              className="gold-btn next-btn"
              onClick={() => {
                if (
                  booking.name &&
                  booking.phone &&
                  booking.date &&
                  booking.time &&
                  booking.location
                ) {
                  setPage("confirmation");
                } else {
                  alert("Please fill all the details.");
                }
              }}
            >
              Confirm Booking →
            </button>

          </div>
        </div>
      </div>
    );
  }

  // FINAL SUCCESS PAGE
  if (page === "confirmation") {
    return (
      <div className="page success-page">

        <div className="success-container">

          <div className="success-circle">
            ✓
          </div>

          <p className="success-small">
            ESHA DIGITAL PHOTO STUDIO
          </p>

          <h1>BOOKED SUCCESSFULLY!</h1>

          <p className="success-message">
            Your event has been successfully booked.
          </p>

          <div className="details-card">

            <h2>Booking Details</h2>

            <div className="detail-row">
              <span>Customer Name</span>
              <strong>{booking.name}</strong>
            </div>

            <div className="detail-row">
              <span>Phone Number</span>
              <strong>{booking.phone}</strong>
            </div>

            <div className="detail-row">
              <span>Event</span>
              <strong>{booking.event}</strong>
            </div>

            <div className="detail-row">
              <span>Date</span>
              <strong>{booking.date}</strong>
            </div>

            <div className="detail-row">
              <span>Time</span>
              <strong>{booking.time}</strong>
            </div>

            <div className="detail-row">
              <span>Location</span>
              <strong>{booking.location}</strong>
            </div>

          </div>

          <p className="final-text">
            Thank you for choosing Esha Digital Photo Studio.
            <br />
            We will contact you soon.
          </p>

          <button
            className="gold-btn home-btn"
            onClick={() => {
              setBooking({
                name: "",
                phone: "",
                event: "",
                date: "",
                time: "",
                location: "Trichy",
              });

              setPage("home");
            }}
          >
            ← Back to Home
          </button>

        </div>
      </div>
    );
  }

  // ABOUT PAGE
  if (page === "about") {
    return (
      <div className="page simple-page">

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

        <div className="simple-content">

          <p className="small-title">ABOUT US</p>

          <h1>Esha Digital Photo Studio</h1>

          <p>
            We capture your precious moments with creativity,
            quality and professional photography.
          </p>

          <p>
            From weddings and birthdays to baby shoots,
            model photography and special events, we make
            every memory beautiful.
          </p>

          <button
            className="gold-btn"
            onClick={() => setPage("events")}
          >
            Book Your Event →
          </button>

        </div>
      </div>
    );
  }

  // CONTACT PAGE
  if (page === "contact") {
    return (
      <div className="page simple-page">

        <button
          className="back-btn"
          onClick={() => setPage("home")}
        >
          ← Back to Home
        </button>

        <div className="simple-content">

          <p className="small-title">CONTACT US</p>

          <h1>Let's Capture Your Moments</h1>

          <div className="contact-card">
            <p>📞 <strong>8610338734</strong></p>
            <p>📍 <strong>Trichy</strong></p>
            <p>📸 <strong>Esha Digital Photo Studio</strong></p>
          </div>

          <button
            className="gold-btn"
            onClick={() => setPage("events")}
          >
            Book Your Event →
          </button>

        </div>
      </div>
    );
  }
}

export default App;