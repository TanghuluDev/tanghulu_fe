import './globals.css'
import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'
import Background from './animation-background';


export default function Section1() {
  const Section = Styled.section`
  
    text-align: center;
    width: 100vw;

  `; 

  const Img = Styled.img`
    width: 300px;
    height: 300px;
    margin: 0px;
    padding: 0px;
  `; 

  const H1 = Styled.h1`
    margin-top: -30px;
    font-size: 9.0rem;
    color: #fff;
    text-shadow: var(--PC) 0px 6px 4px;
  `; 


  const H2 = Styled.h2`
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: 30px;
    color: #fff;
  `; 

  const CA = Styled.div`
    background: linear-gradient(-45deg, var(--PC), #fabb10);
    background-size: 300% 300%;
    animation: gradient 4s ease infinite;
    padding: 16px 30px;
    width: fit-content;
    font-size: 2.0rem;
    border-radius: 100px;
    margin: 0 auto;
    color: white;    
  `;

  return (
    <>
      <Section id="top" style={{
        background: "rgba(255, 89, 0, 1)",
        overflow: "hidden",
        position: "relative"
      }}>
       <Background>
        <div style={{
          paddingTop: 180,
        }}>
          <Img src="/main-image.png" />
          <H1 className="font"><span style={{
            // color: "var(--PC)"
          }}>Tang</span>hulu</H1>
          <H2>The world's sweetest token, $TANGHULU</H2>
          <div className="link" style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginBottom: 120
          }}>
            <div className="etherscan" style={{
              background: "url(/etherscan-button.png) center center no-repeat",
              backgroundSize: "60px 60px",
              width: 60,
              height: 60
            }}></div>
            <div className="telegram" style={{
              background: "url(/telegram-button.png) center center no-repeat",
              backgroundSize: "60px 60px",
              width: 60,
              height: 60
            }}></div>
            <div className="twitter" style={{
              background: "url(/twitter-button.png) center center no-repeat",
              backgroundSize: "60px 60px",
              width: 60,
              height: 60
            }}></div>
          </div>
          <CA className="ca" style={{
        
          }}><span style={{
            fontSize: '1.6rem',
            fontWeight: 800
          }}>Contract Address (ETH)</span><br />0x1234123412341234123412341234123412341234</CA>
          
        </div>
        </Background>
      </Section>
    </>
  )
}