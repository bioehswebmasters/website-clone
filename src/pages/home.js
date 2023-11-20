import React, { useRef } from 'react'
import homeClubImage from '../Images/UniversalClubPictures/MainPagePhoto.jpg'
import './Home.css'
import EventsCarousel from '../components/EventsCarousel/EventsCarousel.js'

/*////////////////////////////////////////////////////////////////////////////////////////////
updating images on the home page (monthly)
//to add carasoul fill in the name of the folder at the eventscarousel section
//go into eventscarousel and change the pathway 
//aka change fall2023/october2023 to whatever file name
//<img src={require(`../../Images/Events/Fall2023/October2023/${eventFolder}/${image}`)} height='300'
//make sure the name of the images are the same
///////////////////////////////////////////////////////////////////////////////////////////*/
function Home() {
  const eligibilityRef = useRef()
  function scrollToEligibility() {
    const topOffset = -80 // Adjust this value to change the scroll distance
    eligibilityRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
    window.scrollBy(0, topOffset)
  }

  return (
    <div className="body">
      <div className="img-container">
        <div className="textOverLayed">
          <h1>Bioengineering Honor Society</h1>
          <p>
            Recognize outstanding UC Berkeley Bioengineering undergraduates for
            their academic excellence. Alongside strong scholastic achievements,
            the society promotes exceptional character and encourages members to
            engage in volunteer work, professional development, and community
            events.
          </p>
          <button className="join-button" onClick={scrollToEligibility}>
            Join Us
          </button>
        </div>
        <img src={homeClubImage} alt="Home" className="coverimage" />
      </div>

      <div className="elibility-container" ref={eligibilityRef}>
        <h1> Eligibility </h1>
        <div className="nonMemberParticipation">
          <h1>Bioengineer Opportunities</h1>
          <p>
            While applicants to Bioengineering Honor Society must meet minimum
            grade standards and apply for membership, many of our activities are
            open to all undergraduates. We feel this will give new
            undergraduates a chance to get to know the Bioengineering major,
            career, and peers before deciding to join our society. Please feel
            free to join us at advertised events and socials.
          </p>
          <button className="upcomingEvents-button">
            {/*add google calendar link to events for bioengineers*/}
            <a
              href="https://calendar.google.com/calendar/embed?src=bioehs%40gmail.com&ctz=America%2FLos_Angeles"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Our Calendar Here
            </a>
          </button>
        </div>
        <div className="prospectiveMembers">
          <h1>Prospective Members</h1>
          <p>
            In order to be eligible, students need to have completed one
            semester at UC Berkeley and/or be a transfer student. The minimum
            GPA is 3.3 for juniors/seniors (including junior transfers), 3.5 for
            sophomores, and 3.7 for freshmen (spring). In addition to the unit
            and GPA requirements, prospective members must submit our sorting
            form.{' '}
            <b>
              The sorting form will be emailed by the department early in the
              semester.
            </b>{' '}
            As of 1/30, these emails have been sent out for the Spring 2023
            cycle.
          </p>
        </div>
      </div>

      <div className="aboutUs-container">
        <h1> We Help You Develop </h1>
        <div className="qualitiesingrid">
          <div className="feature">
            <h2> A Community </h2>
            <p>
              Get to know your fellow candidates and the officer team and
              participate in volunteer and social events that benefit yourself
              and the community.
            </p>
          </div>
          <div className="feature">
            <h2>A Network</h2>
            <p>
              Meet and network with BioEHS alumni through info-sessions, alumni
              panels, and general meetings.
            </p>
          </div>
          <div className="feature">
            <h2> A Niche </h2>
            <p>
              Discover or narrow your interests/concentration within BioE by
              meeting more BioE peers in the classes you’re taking, seeking
              course advice from BioEHS members, and talking to BioE professors
              in the field.
            </p>
          </div>
          <div className="feature">
            <h2> Professional Development Skills </h2>
            <p>
              Attend professional workshops covering LinkedIn, resumes,
              technical interviewing, public speaking, or work on hands-on
              hardware/software projects.
            </p>
          </div>
        </div>
        <button className="constitution-button">
          <a
            href="https://docs.google.com/document/d/128hynYuoDcyebJkTh7-hyMTzCPVr_NIyCMC2QJEfHFU/edit#heading=h.21coc93ntare"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Constitution
          </a>
        </button>
      </div>
      <div className="google-calendar-container">
        <h1>Upcoming Events</h1>
        <div className="center-iframe">
          <iframe
            title="BioEHS Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=bioehs%40gmail.com&ctz=America%2FLos_Angeles"
            width="800"
            height="600"
          ></iframe>
        </div>
      </div>
      <div className="recentEvent-container">
        <h1>October Events</h1>
      </div>

      <div className="carousel-container">
        <p>Candidate Retreat</p>
        <EventsCarousel eventFolder="Candidate Retreat" />
        <p>General Meeting 1</p>
        <EventsCarousel eventFolder="GM1" />
      </div>
    </div>
  )
}

export default Home
