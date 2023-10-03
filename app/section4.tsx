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
        
          {/* <div className="">
            <div className="step">
              <div>Step 1 - Create MetaMask wallet</div>
              <p>Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive $Hobbes</p>
            </div>
            <div className="step">
              <div>Step 2 - Send ETH to your wallet</div>
              <p>You can transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Make sure to use the ERC-20 network when transferring ETH.</p>
            </div>
            <div className="step">
              <div>Step 3 - Connect your wallet to Uniswap</div>
              <p>Access your wallet to Uniswap by clicking ‘Connect Wallet’ and selecting MetaMask.</p>
            </div>
            <div className="step">
              <div>Step 4 - Swap ETH for $Hobbes</div>
              <p>You can start swapping as soon as you have ETH available! Press ‘Select a currency’ and enter the $Hobbes token address.</p>
            </div>
          </div> */}
        </Section>
        </Link>
    </>
  )
}

