import React from 'react';
import './Committees.css';
import CommitteesCarousel from '../components/CommitteesCarousel/CommitteesCarousel.js';
/*to change bio directly type in... to change photos, go into committees carousel, committees carousel. js and change src={require(`../../Images/CommitteeImages/Fall2023/${committeefolder}/${image}`)} to the pathway you want
add images under that photo name image1.jpg image2.jpg etc up to five... it will auto update*/
function Committees() {
    return (
        <body>
            <div className="Academic Container">
                <h1>Bioengineering Honor Society's Committees</h1>
                <CommitteesCarousel
                    committeefolder="Academic"
                    committee="Academic"
                    bios={
                        <>
                            <h4>Welcome to the Academic Committee – your gateway to academic excellence in Bioengineering at Berkeley!</h4>
                            <h4>About Us:</h4>
                            <p>Dive into a world of endless possibilities with the Academic Committee! We are passionate about fostering the academic development of BioE students, offering a vibrant array of experiences to enrich your academic journey.</p>

                            <h4>What We Do:</h4>
                            <p>Alumni Insights: Explore diverse post-graduation paths, from advanced degrees (MTM, MS, MD, PhD, MD/PhD) to exciting opportunities in the industry. Our alumni panels provide a firsthand look at the myriad of possibilities awaiting you.</p>
                            <p>Faculty Luncheons: Join us for intimate luncheons with esteemed faculty members from the BioE department. It's a unique chance to connect, ask questions, and gain insights that go beyond the classroom.</p>
                            <p>Study Sessions: We believe in the power of collaborative learning. Join our study sessions to conquer academic challenges, share knowledge, and build a supportive community.</p>
                            <p>Advising Excellence: Navigating the academic landscape can be complex. That's why we host advising sessions right before Phase 1, helping you tailor your coursework to match your interests within BioE.</p>

                            <h4>For Committee Members:</h4>
                            <p>Greetings! Get ready for an exciting semester filled with academic exploration and personal growth.</p>
                            <p>Weekly Meetups: Join us every week as we embark on a journey of discovery. From demystifying the art of emailing professors to delving into the nuances of post-graduation choices, we've got your back.</p>
                            <p>Subcommittees Galore: This semester, choose your path with two dynamic subcommittees – Academic Seminars and Academic Support. In Seminars, unleash your academic prowess by organizing grad school panels, journal readings, and professor coffee-chats. In Support, we'll collaboratively set up study sessions, compile invaluable course resources, and guide you through the maze of academic choices.</p>
                            <p>Your Ideas Matter: We thrive on innovation! Share your brilliant ideas and feedback to shape the Academic Committee into a vibrant community that suits your needs.</p>
                            <p>By semester's end, you'll not only expand your academic vocabulary but also forge lasting connections and unlock new horizons. Join us in the Academic Committee and discover the limitless academic opportunities that Bioengineering has to offer!</p>
                        </>
                    }
                />
            </div>

            <div className="Outreach Container">
                <CommitteesCarousel
                    committeefolder="Outreach"
                    committee="Outreach"
                    bios={
                        <>
                            <h4>The Outreach Committee at Bioengineering Honor Society is on a mission to bridge the gap between Berkeley bioengineers and the wider community, while enhancing their scientific communication and collaboration skills.</h4>
                            <p>We believe in the power of connecting with diverse audiences, from elementary schoolers to prospective Berkeley students. Through engaging school visits, on-campus events, and online talks, we aim to inspire the next generation of bioengineers and empower them to explore their interests.</p>
                            <p>Our committee is not just about outreach; it's an opportunity for our members to form meaningful connections, grow as communicators and teachers, and contribute to the larger community. We organize workshops for Berkeley Bioengineering students, providing a personalized and supportive environment to develop crucial presentation skills. Being a part of the Outreach Committee means proudly representing BioEHS and Berkeley engineering, making a positive impact beyond the campus borders.</p>

                            <h4>Welcome to the Outreach Committee:</h4>
                            <p>Step into the world of the Outreach Committee, where we make a positive impact on the bioengineering community through education! Our mission is to share our passion for bioengineering, giving back to the community, and introducing this exciting field to those unfamiliar with it.</p>
                            <p>Throughout the semester, you can look forward to engaging in volunteering and community outreach, connecting with high school and community college students in inspiring ways.</p>
                            <p>Our workshops are designed to be both fun and supportive, filled with activities that will boost your presentation, communication, and writing skills. Whether you're a seasoned speaker or new to public communication, we're here to support and encourage each other to improve.</p>
                            <p>By the end of the semester, you'll not only feel equipped to illuminate the path for future bioengineers but also to make a meaningful difference in the lives of others. So, get ready to make new friends, learn, and grow together. We can't wait to welcome you with open arms!</p>
                        </>
                    }
                />
            </div>
            <div className="Prodev-Container">
                <CommitteesCarousel
                    committeefolder="ProDev"
                    committee="Professional Development"
                    bios={
                        <>
                            <h4>We werent sent a bio so this is a temporary bio</h4>
                        </>
                    }
                />
            </div>  
            <div className="Projects-Container">
                <CommitteesCarousel
                    committeefolder="Projects"
                    committee="Projects"
                    bios={
                        <>
                            <h4>We werent sent a bio so this is a temporary bio</h4>
                        </>
                    }
                />
            </div>  
        </body>
    );
}

export default Committees;
