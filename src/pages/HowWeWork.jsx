import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
// import siteConfig from '../config/siteConfig';
import AboutHeroImage from '../assets/aboutAssets/AboutHero.png';
import design from "../assets/howweworkAssets/design.svg";
import planning from "../assets/howweworkAssets/planning.svg";
import development from "../assets/howweworkAssets/development.svg";
import qa from "../assets/howweworkAssets/qa.svg";
import discuss from "../assets/howweworkAssets/discuss.svg";
import maintanence from "../assets/howweworkAssets/maintanence.svg";

const HowWeWork = () => {
  return (
    <div className="bg-white pt-3">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none select-none"
          style={{ backgroundImage: `url(${AboutHeroImage})` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-2 lg:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How We <span className="text-gray-600">Work</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed px-2">
              Our proven process ensures successful project delivery through structured planning, expert execution, and continuous collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Six Steps to Success</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A comprehensive approach that covers every aspect of software development</p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Step 1: Discussion and Analysis */}
            <div className="flex flex-col md:flex-row gap-6 items-start ">
              <Card className="flex-1 shadow-md p-8 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion and Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Understanding Requirements</h4>
                    <ul className="space-y-1 text-gray-600 [&>li]:text-base ">
                      <li>• Stakeholder interviews</li>
                      <li>• Business goals alignment</li>
                      <li>• Technical requirements gathering</li>
                      <li>• Documentation & requirement validation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Market Research</h4>
                    {/* give color to li group in ul text-gray-600  */}
                    <ul className="space-y-1 text-gray-600 [&>li]:text-gray-500 [&>li]:text-base [&>li]:text-normal">
                      <li>• Competitor analysis</li>
                      <li>• Industry best practices</li>
                      <li>• Target audience insights</li>
                      <li>• Market trends and demand analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Risk Analysis</h4>
                    <ul className="space-y-1 text-gray-600 [&>li]:text-gray-500 [&>li]:text-base [&>li]:text-normal">
                      <li>• Technical feasibility study</li>
                      <li>• Timeline and budget planning</li>
                      <li>• Risk mitigation strategies</li>
                      <li>• Regulatory and compliance assessment</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#5B6B7E] rounded-lg flex items-center justify-center">
                  <img src={discuss} alt="Discussion" className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Step 2: Planning and Design */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#5B6B7E] rounded-lg flex items-center justify-center">
                  <img src={planning} alt="Planning" className="w-8 h-8" />
                </div>
              </div>
              <Card className="flex-1 shadow-md p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Planning and Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Project Planning</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-black [&>li]:text-base [&>li]:text-normal">
                      <li>• Roadmap creation</li>
                      <li>• Sprint planning</li>
                      <li>• Resource allocation</li>
                      <li>• Milestone definition and tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">UI/UX Design</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-black [&>li]:text-base [&>li]:text-normal">
                      <li>• Wireframing</li>
                      <li>• Visual design</li>
                      <li>• Interactive prototypes</li>
                      <li>• Usability & accessibility considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Architecture</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-black [&>li]:text-base [&>li]:text-normal">
                      <li>• System architecture</li>
                      <li>• Database design</li>
                      <li>• API specifications</li>
                      <li>• Scalability and performance planning</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 3: Software Design */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Card className="flex-1 shadow-md p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Software Design</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Technical Design</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Component architecture</li>
                      <li>• Design patterns</li>
                      <li>• Technology stack selection</li>
                      <li>• Security & maintainability considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Integration</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Third-party integrations</li>
                      <li>• API design</li>
                      <li>• Data flow mapping</li>
                      <li>• Error handling & integration testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Documentation</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Technical specifications</li>
                      <li>• API documentation</li>
                      <li>• Design system creation</li>
                      <li>• Versioning & change management guidelines</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#5B6B7E] rounded-lg flex items-center justify-center">
                  <img src={design} alt="Design" className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Step 4: Software Development */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#5B6B7E] rounded-lg flex items-center justify-center">
                  <img src={development} alt="Development" className="w-8 h-8" />
                </div>
              </div>
              <Card className="flex-1 shadow-md p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Software Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Development</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Agile sprints</li>
                      <li>• Code standards</li>
                      <li>• Version control</li>
                      <li>• Unit testing implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Integration</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Continuous integration</li>
                      <li>• API development</li>
                      <li>• Database implementation</li>
                      <li>• Automated build & deployment pipelines</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Code Review</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Peer reviews</li>
                      <li>• Quality checks</li>
                      <li>• Performance optimization</li>
                      <li>• Security & compliance checks</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 5: Quality Assurance */}
            <div className="flex flex-col md:flex-row gap-6 items-start sm:w-full! sm:items-center ">
              <Card className="flex-1 shadow-md p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Testing</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Unit testing</li>
                      <li>• Integration testing</li>
                      <li>• End-to-end testing</li>
                      <li>• Regression testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Quality Control</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Manual QA testing</li>
                      <li>• Cross-browser Compatibility testing</li>
                      <li>• Device compatibility checks</li>
                      <li>• Usability and Experience Testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Performance</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Load testing</li>
                      <li>• Security audit</li>
                      <li>• Optimization</li>
                      <li>• Stress testing</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <div className= "flex-shrink-0">
                <div className="w-16 h-16 bg-[#5B6B7E] rounded-lg flex items-center justify-center">
                  <img src={qa} alt="QA" className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Step 6: Maintenance */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#5B6B7E] rounded-lg flex items-center justify-center">
                  <img src={maintanence} alt="Maintenance" className="w-8 h-8" />
                </div>
              </div>
              <Card className="flex-1 shadow-md p-6 border-2 border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Support</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Technical support</li>
                      <li>• Bug fixes</li>
                      <li>• Updates/releases</li>
                      <li>• User training & documentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Monitoring</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Performance monitoring</li>
                      <li>• Security updates</li>
                      <li>• Analytics tracking</li>
                      <li>• Proactive issue management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2 text-lg">Evolution</h4>
                    <ul className="space-y-1 text-gray-600 [&>a]:text-gray-600 [&>li]:text-base [&>li]:text-normal">
                      <li>• Feature enhancements</li>
                      <li>• Scaling support</li>
                      <li>• Continuous optimization</li>
                      <li>• Optimization based on user feedback</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline - From Start to Finish */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">From Start to Finish</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A clear roadmap from initial consultation to final delivery and beyond</p>
          </div>

          <div className="relative">
            {/* Vertical Dotted Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-solid border-gray-300  "></div>

            <div className="space-y-16">
              {/* Step 1 - Left Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="flex justify-end mb-2">
                    <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">1</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Scope</h3>
                  <p className="text-gray-600">We analyze your requirements and define the technical scope of the project with detailed specifications.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 2 - Right Side */}
              <div className="relative flex items-center ">
                <div className="w-1/2 pr-12"></div>
                <div className="w-1/2 pl-12">
                  <div className="flex justify-start mb-2">
                    <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">2</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Planning and Design</h3>
                  <p className="text-gray-600">Our team creates comprehensive plans and designs that align with your business objectives.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              {/* Step 3 - Left Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="flex justify-end mb-2">
                    <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">3</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Software Design</h3>
                  <p className="text-gray-600">We design the software architecture and create detailed technical documentation.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 4 - Right Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="w-1/2 pl-12">
                  <div className="flex justify-start mb-2">
                    <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">4</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Software Development</h3>
                  <p className="text-gray-600">Agile development process with regular updates and continuous integration.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              {/* Step 5 - Left Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="flex justify-end mb-2">
                    <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">5</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-600">Rigorous testing to ensure the highest quality and performance standards.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Step 6 - Right Side */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12"></div>
                <div className="w-1/2 pl-12">
                  <div className="flex justify-start mb-2">
                    <div className="w-8 h-8 bg-[#6B7280] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-xs">6</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance</h3>
                  <p className="text-gray-600">Ongoing support and maintenance to keep your software running smoothly.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full border-2 border-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Our Process Works</h2>
            <p className="text-gray-600">The key principles that make our approach successful and reliable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - Best in Industry */}
            <div className="bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer flex flex-col gap-2">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-[#6B7280]">
                <svg className="w-6 h-6 text-gray-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">Best in Industry</h3>
              <p className="text-base text-gray-600">We follow industry best practices and standards to deliver exceptional quality in every project.</p>
            </div>

            {/* Card 2 - Dedicated Team */}
            <div className="bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer flex flex-col gap-2">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-[#6B7280]">
                <svg className="w-6 h-6 text-gray-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">Dedicated Team</h3>
              <p className="text-base text-gray-600">Our expert team is fully committed to your project success with personalized attention.</p>
            </div>

            {/* Card 3 - Risk Management */}
            <div className="bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer flex flex-col gap-2">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-[#6B7280]">
                <svg className="w-6 h-6 text-gray-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">Risk Management</h3>
              <p className="text-base text-gray-600">Proactive risk identification and mitigation strategies throughout the project lifecycle.</p>
            </div>

            {/* Card 4 - Agile Methodology */}
            <div className="bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer flex flex-col gap-2">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-[#6B7280]">
                <svg className="w-6 h-6 text-gray-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">Agile Methodology</h3>
              <p className="text-base text-gray-600">Flexible and iterative approach ensuring quick delivery and continuous improvement.</p>
            </div>

            {/* Card 5 - Transparent Communication */}
              <div className="bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer flex flex-col gap-2">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-[#6B7280]">
                <svg className="w-6 h-6 text-gray-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">Transparent Communication</h3>
              <p className="text-base text-gray-600">Regular updates and open communication channels keep you informed at every stage.</p>
            </div>

            {/* Card 6 - Quality First */}
            <div className="bg-white border-2 border-gray-300 hover:border-gray-400 rounded-2xl p-8 hover:shadow-md transition-shadow group cursor-pointer flex  flex-col gap-2">
              <div className="w-14 h-14 bg-[#F9FAFB] rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-[#6B7280]">
                <svg className="w-6 h-6 text-gray-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">Quality First</h3>
              <p className="text-base text-gray-600">Rigorous quality assurance processes guarantee enterprise-grade deliverables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#6B7280] to-[#4B5563]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8">
            Let's discuss your project and see how our proven process can help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-gray-700 hover:bg-gray-200 transition-all duration-200"
            >
              Start Your Project
            </a>
            <a 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white text-white hover:text-gray-500 hover:bg-gray-200 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;

