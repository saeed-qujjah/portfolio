import React, { useCallback, useEffect, useState } from "react";
import { Element } from "react-scroll";
import "./Skills.css";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAward } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "1",
      date: "4/2024 - present ",
      company: " Pancode Company",
      title: "Front End Developer",
      content:
        "Working on projects using React and Next.js, And assisted with troubleshooting and bug fixing as needed.",
    },
    {
      id: "2",
      date: "9/2023 – 4/2024",
      company: " SKY Services Group",
      title: "Front End Developer",
      content:
        "Implementing SEO best practices to improve websit visibility and ranking, And working on projects using Next.js and TypeScript",
    },
    {
      id: "3",
      date: "9/2023 – 4/2024",
      company: " SKY Services Group",
      title: "Front End Developer",
      content: "Developed several dashboards using SSG technology in Next.js.",
    },
    {
      id: "4",
      date: "4/2022 - 9/2023",
      company: " Al-Yousser for Engineering Upgrading",
      title: "Front End Developer",
      content:
        "Worked on ERP (Enterprise resource planning) to help the company run it entire business.",
    },
    {
      id: "5",
      date: "4/2022 - 9/2023",
      company: " Al-Yousser for Engineering Upgrading",
      title: "Front End Developer",
      content:
        "Worked on several projects using React, including QrReader for Worktime , Applying for job opportunities and real-time chat app with Socket.io.",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(()=>{
    console.log(emblaRef.currentSlide)
  },[emblaRef,emblaApi])

  return (
    <Element name="skills">
      <section className="skills">
        <h2>Experience</h2>
        <div className="container skills_container">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div key={slide.id} className="skills_cards embla__slide">
                  <div className={`skills_card`}>
                    <div className="hreader-skills_card">
                      <FaAward className="about_icon" />
                      <label>
                        <span className="workDate">{slide.date}</span>
                        {slide.title}
                      </label>
                    </div>
                    <p>{slide.company}</p>
                    <small>{slide.content}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="btn-next">
          <button onClick={scrollPrev}>
            <BiCaretLeft />
          </button>
          <label>Move</label>
          <button onClick={scrollNext}>
            <BiCaretRight />
          </button>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
