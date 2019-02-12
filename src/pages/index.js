import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave'
import Card from '../components/card';
import Section from '../components/Section';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        {/* animated svg */}
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="white">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
          </path>
        </svg>
        <div className="Logos">
          <img src='/images/logo-sketch.png' width="50" />
          <img src='/images/logo-figma.png' width="50" />
          <img src='/images/logo-studio.png' width="50" />
          <img src='/images/logo-framer.png' width="50" />
          <img src='/images/logo-react.png' width="50" />
          <img src='/images/logo-swift.png' width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
          title="Design System"
          text="10 sections"
          image='/images/wallpaper.jpg' />
        <Card 
          title="React for Designers"
          text="12 sections"
          image='/images/wallpaper2.jpg' />
        <Card 
          title="Sound Design"
          text="5 sections"
          image='/images/wallpaper3.jpg' />
        <Card 
          title="ARKit 2"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
      </div>
    </div>
    <Section
      image='/images/wallpaper2.jpg'
      logo='/images/logo-react.png'
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
     />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell 
          title={cell.title}
          image={cell.image} 
          key={cell.title}  
          />
      ))}
     </SectionCellGroup>
  </div>
)

export default IndexPage
