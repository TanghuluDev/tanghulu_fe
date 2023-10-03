import './globals.css'
import Image from 'next/image'
import Styled from "styled-components";
import Link from 'next/link'


export default function Header() {
  const Heading = Styled.header`
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100vw;
      display: flex;
      justify-content: space-between;
      background: #fff;
      padding: 10px 20px;
      align-items: center;
`;

const Button = Styled.div`
      border-radius: 30px;
      background: rgb(240, 125, 31);
      background: linear-gradient(-45deg, var(--PC), var(--SC));
      background-size: 300% 300%;
      animation: gradient 4s ease infinite;
      padding: 12px 18px;
      outline: 0;
      border: 2px black solid;
      color: white;
      font-size: 1.8rem;
      font-weight: 800;
      cursor: pointer;
      &:hover {
        color: black;
        background: rgb(247, 196, 67);
      }
`;

const Menu = Styled.div`
      padding: 12px 0px;
      color: black;
      font-size: 1.8rem;
      font-weight: 800;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        color: rgb(240, 125, 31);
      }
      @media (max-width: 700px) {
        display: none;
      }
`;

  return (
    <>
      <Heading>
        <div className="left">
        <Link href="#top"><img src="/logo.png" width={60} height={60} /></Link>
        </div>
        <div className="right" style={{
          display: "flex",
          gap: 20,
          fontSize: "1.8rem",
         
        }}>
          <Link href="#about"><Menu>About</Menu></Link>
          <Link href="#tokenomics"><Menu>Tokenomics</Menu></Link>
          <Link href="#roadmap"><Menu>Roadmap</Menu></Link>
          <Link onClick={() => {
            alert("Not yet! Stay tuned!");
          }} href="/"><Button>Buy $TANG</Button></Link>
        </div>
      </Heading>

    </>
  )
}