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

export default function Home() {

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div></div>
  }

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
          <div style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
            <div style={{
              display: "flex",
              gap: 20,
              fontSize:"1.4rem"
            }}>
              <div style={{
                cursor: "pointer"
              }}>
                <Link href="">
                Etherscan
                </Link>
              </div>
              <div style={{
                cursor: "pointer"
              }}>
                 <Link href="">Dextools</Link>  
              </div>
              <div style={{
                cursor: "pointer"
              }}>
                 <Link href="">Uniswap</Link>
              </div>
              <div style={{
                cursor: "pointer"
              }}>
                 <Link href="">Twitter</Link>
              </div>
              <div style={{
                cursor: "pointer"
              }}>
                <Link href="">Telegram</Link>
              </div>

            </div>
            <div>Copyright © 2023 TanghuluETH</div>
          </div>
         
        </footer>
      </main>
      <div className="bg"></div>
    </>
  )
}
