import './globals.css'
import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'
import Background from './animation-background';


export default function Section3() {
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
    border-radius: 1000px;
    padding: 132px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & div {
      position: absolute;
      text-align: center;
      font-size: 3.0rem;
    }
    & span {
      font-size: 4.6rem;
      color: var(--PC);
    }
  `; 

  return (
    <>

      <Section id="tokenomics" style={{
         
        }}>
        <H2 className="font" style={{
          
        }}>Tokenomics</H2>
        <Rows>
          
        <Row>
          <Dango>
            <div>
            <span>5 Trillion</span> <br />
            Total Supply
            </div>
          </Dango>
          <Stick></Stick>
          <Dango>
            <div>
            <span>1%</span> <br />
            Buy Tax
            </div>
          </Dango>
          <Stick></Stick>
          <Dango>
            <div>
            <span>1%</span> <br />
            Sell Tax
            </div>
          </Dango>
          <StickEnd></StickEnd>
        </Row>
        <Row>
          <Dango>
            <div>
              
            Team <br />
            <span>0%</span>

            </div>
          </Dango>
          <Stick></Stick>
          <Dango>
            <div>
            Pre-Sale <br />
            <span>0%</span>
            </div>
          </Dango>
          <Stick></Stick>
          <Dango>
            <div>
            Public <br />
            <span>100%</span>
            </div>
          </Dango>
          <StickEnd></StickEnd>
        </Row>

        </Rows>
        </Section>
       
    </>
  )
}

