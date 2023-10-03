"use client";

import Image from 'next/image'
import Header from './header'
import { useEffect, useState } from 'react'
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Link from 'next/link';
import Styled from 'styled-components';

export default function Home() {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div></div>
  }

  const Row = Styled.div`
    @media (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  `;

  return (
    <>
      <main>
        <Header />
        <Section1 />
        <Section2 />
       <Section3 />
       <Section4 />
       <Section5 />
        <footer style={{
          background: "var(--PC)",
          color: "#fff",
          textAlign: "center",
          fontSize: "1.0rem",
          padding: "30px 30px"
        }}>
          <Row style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
            <div style={{
              display: "flex",
              gap: 20,
              fontSize:"1.4rem"
            }}>
               <Link href="https://etherscan.io/address/0x0f4C8b8ad2f832b3E430Dd6d3b03b80B026604A9" rel="noopener noreferrer" target="_blank">
              <div style={{
                cursor: "pointer",
                color: "#fff"
              }}>
                Etherscan
              </div>
              </Link>
              <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x6f486af539ca6ee68a5594940d4f6e78ee898456" rel="noopener noreferrer" target="_blank">
              <div style={{
                cursor: "pointer",
                color: "#fff"
              }}>
                Dextools
              </div>
              </Link>
              <Link href="https://app.uniswap.org/tokens/ethereum/0x0f4c8b8ad2f832b3e430dd6d3b03b80b026604a9" rel="noopener noreferrer" target="_blank">
              <div style={{
                cursor: "pointer",
                color: "#fff"
              }}>
                Uniswap
              </div>
              </Link>
              <Link href="https://twitter.com/tanghulu_token" rel="noopener noreferrer" target="_blank">
              <div style={{
                cursor: "pointer",
                color: "#fff"
              }}>
                 Twitter
              </div>
              </Link>
              <Link href="https://t.me/tanghuluPortal" rel="noopener noreferrer" target="_blank">
              <div style={{
                cursor: "pointer",
                color: "#fff"
              }}>
                Telegram
              </div>
              </Link>
            </div>
            <div>Copyright © 2023 TanghuluETH</div>
          </Row>
         
        </footer>
      </main>
      <div className="bg"></div>
    </>
  )
}
