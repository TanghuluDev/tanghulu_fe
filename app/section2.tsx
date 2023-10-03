import './globals.css'
import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'
import Background from './animation-background';


export default function Section2() {
  const Section = Styled.section`
  background: white;
  padding: 120px 0px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: -36px;
  `; 

  const H2 = Styled.h2`
  color: var(--PC);
  text-shadow: white 0px 3px 0px, var(--SC) 0px 6px 0px;
  font-size: 4.6rem;
  margin-bottom: 24px;
  `; 
  const Para = Styled.p`
    width: 100%;
    max-width: 600px;
    color: var(--PC);
    font-size: 1.8rem;
    line-height: 2.6rem;
    margin-bottom: 60px;
    @media (max-width: 700px) {
      max-width: 380px;
    }
  `;

  const BgAnimation = Styled.div`
  background-position: center left;
  animation: mymove 20s infinite;
  background: url(/section3-pattern.png) top center repeat-x;
  background-size: 375px 160px;
  width: 100vw;
  height: 160px;
  @keyframes mymove {
    0% {background-position: center left;}
    50% {background-position: center right;}
    100% {background-position: center left;}
  }
  `;

  return (
    <>

      <Section id="about">
        <H2 className="font" style={{
        }}>About</H2>
        <Para style={{
          
        }}>
          <span style={{
            color: "var(--PC)",
            fontSize: "2.6rem",
            fontWeight: 800,
          }}>What is Tanghulu? </span>It’s a traditional Northern Chinese snack made of skewered fresh fruit dipped into a simple sugar syrup that hardens quickly, creating a solid shell. Back to the Song Dynasty (960–1279), Legend says that when the emperor’s favorite concubine fell sick, a doctor suggested she eat hawthorn fruits fried in brown sugar every day for a fortnight. On her recovery, the doctor became famous and the snack found a permanent place on China’s streets. <br/><br/>
          <span style={{
            color: "var(--PC)",
            fontSize: "2.6rem",
            fontWeight: 800,
          }}>Let's stop playing with those tasteless memecoin. </span> Here, we bring you the world's sweetest cryptocurrency. We've had such a dreary winter, and we suffered a lot. <span style={{
            display: "inline-block",
            borderBottom: "3px var(--PC) solid"
          }}>You deserve this little bit of sweetness.</span>
        </Para>
        <BgAnimation />
        </Section>
    </>
  )
}

