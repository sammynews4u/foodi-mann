import Image from 'next/image'
import car1 from './car1.jpg'
import car2 from './car2.webp'
import car3 from './car3.webp'
import car4 from './car4.webp'
import car5 from './car5.webp'
import car6 from './car6.jpg'
import car7 from './car7.jpg'
import car8 from './car8.jpg'
import WhyCareers from './whyCareers'
import AboutTestimony from 'containers/aboutUs/AboutTestimony'
import Link from 'next/link'
import CareerSlider from './careerSlider'
import CareerFaq from './careerFaq'

const careerData = [
  { id: 1, image: car1, alt: "Career Image 1", topic:'Grow from Good to Great',role:"From the very beginning, FoodiMann has been determined to create a better business and Solutions as a Service, in a better way. We believe in intentional and exceptional growth—for ourselves, our solutions, and our company—and we’re never satisfied with the status" },
  { id: 2, image: car2, alt: "Career Image 2", topic:"Enjoy Quality of Life", role:"We care about doing quality work and showing up for our team and customers, and we make time for our families, friends, and communities. Home life, work life—it’s all life! And we strive to live it well." },
  { id: 3, image: car3, alt: "Career Image 3", topic:'Make It Count', role:"We believe making our time here count is how we grow from good to great and enjoy a high quality of life. Hard work and sustained focus got us here, and it’s the only way forward. We go all in, master our craft, and make an impact because we know great work requires great effort."},
  { id: 4, image: car4, alt: "Career Image 4",topic:"Be Open Minded", role:"Openness and candor lead to efficiency and growth. Being upfront and authentic solves problems faster and enriches relationships, so we strive to give and receive feedback openly. Never wait until tomorrow to say what will make us stronger today" },
  { id: 5, image: car5, alt: "Career Image 5", topic:"Assume the Best", role:"We communicate openly, starting from a place of mutual respect and assuming others have good intentions. We seek to hear other perspectives, understand them, and act out of a desire to do what’s best for the company, our customers, and one another" },
{id: 7,image:car6, topic:"Lead from Where You Are", role:"As we strive to master how we communicate and how we work, we’re qualified to lead. When we see opportunities to make FoodiMann better, we're proactive and use our influence in positive ways—regardless of our position. People follow leaders, not titles."},
{id: 6,image:car8, topic:"Do the Right Thing", role:"FoodiMann is exceptional, and we must be exceptional to work here. Every day, each of us makes decisions that affect the company, our teammates, and our customers. Our potential to impact each group is enormous. That’s why we must be thoughtful, deliberate, and principled in our decisions—no matter how inconvenient or difficult they are."}
];

const CareerHeader = () => {
  return (
    <section className="careers-headers">
      <div className="freedom">
        <div className="first-container">
          <h2> Build A Career With FoodiMann</h2>
          <Link href="jobs-vacancies">
            <button className="job">Job Vacancies</button>
          </Link>
        </div>
        <div>
          <Image src={car7} alt="Main Career Image" width={400} height={400} />
        </div>
      </div>

      <CareerSlider />

      {careerData.map((career, index) => (
        <div key={career.id} className="career-containers">
          {index % 2 === 0 ? (
            <>
              <Image src={career.image} alt="" width={600} height={400} />
              <div>
                <h3>{career.topic}</h3>
                <p className="tests">{career.role} </p>
                <Link href="jobs-vacancies">
                  <button className="joinUs">Join us</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div>
              <h3>{career.topic}</h3>
                <p className="tests">{career.role}
                </p>
                <Link href="job-vacancies">
                  <button className="joinUs">Join us</button>
                </Link>
              </div>
              <Image src={career.image} alt="" width={600} height={400} />
            </>
          )}
        </div>
      ))}

      <WhyCareers />
      <AboutTestimony />
      <CareerFaq/>
    </section>
  );
};

export default CareerHeader;
