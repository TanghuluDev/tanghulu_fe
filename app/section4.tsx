import './globals.css'
import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'
import Background from './animation-background';


export default function Section4() {
  const Section = Styled.section`
    background: var(--PC);
    padding: 80px 0px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      background: rgb(240, 125, 31);
      background: linear-gradient(-45deg, var(--SC), var(--PC));
      background-size: 300% 300%;
      animation: gradient 4s ease infinite;
    }
    &:hover h2 {
      
    }
  `; 

  return (
    <>
    <Link onClick={() => {
            alert("Not yet! Stay tuned!");
          }} href="/">
      <Section>
        
          <h2 className="" style={{
            color: "#fff",
            cursor: "pointer",
            fontSize: "4.0rem",
            display: "inline-block",
            paddingBottom: 3,
            borderBottom: "5px white solid"
        }}>Want a bite?</h2>
        </Section>
        </Link>
    </>
  )
}

