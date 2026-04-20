import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Button from "../components/Button";
import siteConfig from "../config/siteConfig";
import AboutHeroImage from "../assets/aboutAssets/AboutHero.png";
import members from "../assets/aboutAssets/members.svg";
import five from "../assets/aboutAssets/5.svg";
import globalClients from "../assets/aboutAssets/50.svg";
import Projects from "../assets/aboutAssets/150.svg";
import whoweare from "../assets/aboutAssets/whoweare.png";
import mission from "../assets/aboutAssets/mission.svg";
import vision from  "../assets/aboutAssets/vision.svg";
import innovation from "../assets/aboutAssets/innovation.svg";
import integrity from "../assets/aboutAssets/integrity.svg";
import excellence from "../assets/aboutAssets/excellence.svg";
import growth from "../assets/aboutAssets/growth.svg";
import customerFocus from "../assets/aboutAssets/customerFocus.svg";
import accountability from "../assets/aboutAssets/accountability.svg";
import agility from "../assets/aboutAssets/agility.svg";
import expertTeam from "../assets/aboutAssets/expertTeam.svg";
import clientApproach from "../assets/aboutAssets/clientApproach.svg";
import cuttingTech from "../assets/aboutAssets/cuttingTech.svg";
import qualityAssurance from "../assets/aboutAssets/qualityAssurance.svg";
import timelyDelivery from "../assets/aboutAssets/timelyDelivery.svg";
import support from "../assets/aboutAssets/support.svg";

const About = () => {
  return (
    <div className="bg-white pt-4">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 md:py-20 lg:py-20 xl:py-28 bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              About <span className="text-gray-600">Encova Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed px-2">
              We are a team of passionate professionals dedicated to
              transforming businesses through innovative technology solutions
              and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="text-center border-2 border-gray-300 p-4 sm:p-6 group">
              <div className="flex justify-center items-center">
                <div className="bg-[#F9FAFB] p-2 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img
                  src={Projects}
                  alt="members"
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-500 mb-2 mt-3">150+</div>
              <div className="text-sm sm:text-base text-gray-700">Projects Completed</div>
            </Card>
            <Card className="text-center border-2 border-gray-300 p-4 sm:p-6 group">
              <div className="flex justify-center items-center ">
              
              <div className="bg-[#F9FAFB] p-2 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">

                <img
                  src={globalClients}
                  alt="members"
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                />
                </div>  
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-500 mb-2 mt-3">50+</div>
              <div className="text-sm sm:text-base text-gray-700">Global Clients</div>
            </Card>
            <Card className="text-center border-2 border-gray-300 p-4 sm:p-6 group">
              <div className="flex justify-center items-center ">
               <div className="bg-[#F9FAFB] p-2 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                 <img
                  src={five}
                  alt="members"
                  className="w-12 h-12 sm:w-12 sm:h-12 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                />
               </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-500 mb-2 mt-3">5+</div>
              <div className="text-sm sm:text-base text-gray-700">Years Experience</div>
            </Card>
            <Card className="text-center border-2 border-gray-300 p-4 sm:p-6 group">
              <div className="flex justify-center items-center ">
               <div className="bg-[#F9FAFB] p-2 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                 <img
                  src={members}
                  alt="members"
                  className="w-12 h-12 sm:w-14 sm:h-14 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                />
               </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-500 mb-2 mt-3">50+</div>
              <div className="text-sm sm:text-base text-gray-700">Team Members</div>
            </Card>
          </div>
          <div className="flex flex-col gap-8 sm:gap-12 pt-12 sm:pt-16 md:pt-20">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-16 w-[90%] mx-auto">
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base lg:flex-1">
            {/* <SectionTitle title="Your Trusted Technology Partner" centered /> */}
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black">Your Trusted Technology Partner</h2>
                <p>
                  Encova Solutions is a leading IT solutions and consulting
                  company that specializes in delivering cutting-edge
                  technology solutions to businesses worldwide. Founded with a
                  vision to bridge the gap between innovation and
                  implementation, we have grown into a trusted partner for
                  companies seeking digital transformation.
                </p>
                <p>
                  Our team comprises highly skilled professionals with
                  expertise across various domains including web development,
                  mobile applications, UI/UX design, artificial intelligence,
                  and graphic design. We take pride in our ability to
                  understand unique business challenges and deliver tailored
                  solutions that drive growth.
                </p>
                <p>
                  With a client-centric approach and commitment to excellence,
                  we have successfully delivered over 150 projects, helping
                  businesses enhance their digital presence and achieve their
                  strategic goals.
                </p>
              </div>
              <div className="w-full lg:w-auto lg:flex-1 flex justify-center  ">
                <img src={whoweare} alt="whoweare" className="w-full  max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-[80%] mx-auto">
            <Card className="border-2 border-gray-300 p-8">
              <div className="text-4xl mb-4 "><img src={mission} alt="mission" className="bg-[#6B7280] p-2 rounded-xl" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative technology solutions that
                drive growth, enhance efficiency, and create lasting value. We
                strive to be the catalyst for digital transformation, helping
                our clients stay ahead in an ever-evolving technological
                landscape.
              </p>
            </Card>
            <Card className="border-2 border-gray-300 p-8">
              <div className="text-4xl mb-4"><img src={vision} alt="vision" className="bg-[#6B7280] p-2 rounded-lg" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized leader in IT solutions and
                consulting, known for our innovation, quality, and customer
                satisfaction. We envision a future where technology seamlessly
                integrates with business, creating opportunities for growth and
                success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Values"
            centered
          />

          <div className="flex justify-center items-center">
            <p className="w-130 text-center text-base text-gray-700">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            {[
              {
                icon: innovation,
                title: "Innovation",
                description:
                  "We embrace creativity and constantly seek new ways to solve problems and deliver value.",
              },
              {
                icon: integrity,
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical practices in every interaction.",
              },
              {
                icon: excellence,
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality in everything we do, exceeding expectations.",
              },
              {
                icon: members,
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and foster a culture of cooperation and mutual respect.",
              },
              {
                icon: growth,
                title: "Growth",
                description:
                  "We invest in continuous learning and development for both our team and our clients.",
              },
              {
                icon: customerFocus,
                title: "Customer Focus",
                description:
                  "We put our clients at the center of everything we do, ensuring their success is our priority.",
              },
              {
                icon: accountability,
                title: "Accountability",
                description:
                  "We take ownership of our actions and results, delivering on our commitments with responsibility and reliability."
              },
              {
                icon: agility,
                title: "Agility",
                description: 
                  "We adapt quickly to change, embrace challenges, and respond with speed and flexibility in a dynamic world."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center p-4 sm:p-6 border-2 border-gray-300 group cursor-pointer">
                <div className="mb-4 inline-block bg-[#F9FAFB] p-3 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={value.icon} alt={value.icon} className="transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Sets Us Apart"
            centered
          />
          <div className="flex justify-center items-center">
            <p className="w-125 text-center">
              Our commitment to innovation, integrity, and customer success drives exceptional value and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of highly skilled professionals with years of industry experience and proven track records.",
                icon: expertTeam,
              },
              {
                title: "Client-Centric Approach",
                description:
                  "We prioritize understanding your unique needs and delivering solutions that align with your business goals.",
                icon: clientApproach,
              },
              {
                title: "Cutting-Edge Technology",
                description:
                  "We stay updated with the latest technologies and industry best practices to deliver modern solutions.",
                icon: cuttingTech,
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure that every deliverable meets the highest standards.",
                icon: qualityAssurance,
              },
              {
                title: "Timely Delivery",
                description:
                  "We understand the importance of deadlines and commit to delivering projects on time, every time.",
                icon: timelyDelivery,
              },
              {
                title: "Ongoing Support",
                description:
                  "Our relationship doesn't end at delivery. We provide continuous support and maintenance to ensure success.",
                icon: support,
              },
            ].map((item, index) => (
              <Card key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 group cursor-pointer border-2 border-gray-200 hover:border-gray-400 bg-white">
                <div className="text-3xl sm:text-4xl flex-shrink-0 mb-0 inline-block bg-[#F9FAFB] p-3 rounded-xl transition-all duration-200 group-hover:bg-[#6B7280]">
                  <img src={item.icon} alt={item.icon} className="transition-all duration-200 group-hover:brightness-0 group-hover:invert" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Our Team" title="Meet The Experts" centered />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            {siteConfig.team.map((member) => (
              <Card key={member.id} className="text-center group p-4 sm:p-6 border-2 border-gray-200 hover:border-gray-400 bg-white">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br bg-[#555e64] overflow-hidden flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{member.position}</p>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* <a 
                    href={member.social.twitter} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a> */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Join Our Growing Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
            We're always looking for talented individuals who are passionate
            about technology
          </p>
          {/* <Button 
              to="/contact" 
              variant="secondary" 
              size="large"
              // className="bg-white text-[#a3cef1] hover:bg-gray-100"
            >
              Get Started Today
            </Button> */}
          <Button
            to="/careers"
            variant="secondary"
            size="large"
            className="bg-white text-black"
          >
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
