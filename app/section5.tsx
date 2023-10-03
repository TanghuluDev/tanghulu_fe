import './globals.css'
import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'
import Background from './animation-background';


export default function Section5() {
  const Section = Styled.section`
  background: rgba(247,196,67, 0.8);
    padding: 80px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `; 
  const Rows = Styled.div`
    display: flex;
    gap: 40px;

  `; 
  const Row = Styled.div`
    

  `; 
  
  const Stick = Styled.div`
    width: 20px;
    height: 20px;
    background: #fff;
    margin: 0 auto;
    margin-top: -2px;
    margin-bottom: -2px;
  `;

  const StickEnd = Styled.div`
    width: 20px;
    height: 140px;
    background: #fff;
    background: linear-gradient(0deg, var(--PC), #fff);
    margin: 0 auto;
    margin-top: -2px;
`;

const H2 = Styled.h2`
color: white;
text-shadow: var(--SC) 0px 3px 0px, var(--PC) 0px 6px 0px;
font-size: 4.6rem;
margin-bottom: 24px;
`; 

  const Dango = Styled.div`

    font-weight: 800;
    color: var(--SC);
    line-height: 4.2rem;
    background: white;
    padding: 200px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & div {
      position: absolute;
      text-align: center;
      font-size: 2.6rem;
      margin-top: 10px;
      width: 326px;
      height: 228px;
      @media (max-width: 700px) {
      
      }
    }
    & span {
      font-size: 4.0rem;
      color: var(--PC);
      display: inline-block;
      margin-bottom: 20px;
    }
  `; 

  return (
    <>

      <Section id="roadmap" style={{
         
        }}>
        <H2 className="font" style={{
          
        }}>Roadmap</H2>
        <Rows>  
          <Row>
            <Dango>
              <div>
                <span>Phase 1</span> <br />
                
                · 1,000 holders<br />
                · Token Launch<br />
                · Website Launch<br />
                · Trending on Twitter
              </div>
            </Dango>
            <Stick />
            <Dango>
              <div>
                <span>Phase 2</span> <br />
· 5,000 Holders<br />
· Community Partnerships<br />
· Exchange Listings<br />
· Further Digital Marketing<br />
              </div>
            </Dango>
            <Stick />
            <Dango>
              <div>
              <span>Phase 3</span> <br />
              · 10,000 Holders<br />
              · International Communities<br />
              · Website Revisions<br />
              · $TANGHULU Merchandise<br />
              </div>
            </Dango>
            <StickEnd />
          </Row>
        </Rows>
        </Section>
       
    </>
  )
}

