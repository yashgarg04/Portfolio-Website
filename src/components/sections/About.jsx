import { useState, useTransition } from 'react';
import aboutSvg from '../../assets/about.svg';
import SectionTitle from '../SectionTitle';
import TabButton from '../TabButton';
import { TAB_DATA } from '../../data';
const About = () => {

  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Eager to channel my expertise in crafting seamless user experiences towards web development, 
            I am actively seeking new opportunities in the front-end domain. My proven ability to translate 
            complex technical concepts into user-friendly interfaces, coupled with my passion for creating 
            visually appealing and responsive applications, sets the stage for success in my pursuit as a Front-End Developer. 
            Ready to embark on this exciting journey and contribute to cutting-edge projects that align with modern web development trends!!
          </p>

          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}


        </article>
      </div>
    </section>
  );
};
export default About;
