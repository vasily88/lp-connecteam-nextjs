'use client'
import { useEffect, useState } from 'react';
import { fetchDataContent } from './utils/fetchData';
import ContentSecImage from "./components/ContentSecImage/ContentSecImage";
import HeboSection from "./components/HeboSection/HeboSection";

export default function Home() {

  const [dataContent, setDataContent] = useState(null);

  useEffect(() => {
      // Load Content
      async function loadContent() {
          const url = 'https://connecteam.com/static/frontend-home-task/data/home.json';
          const result = await fetchDataContent(url);
          setDataContent(result);
      }
      loadContent();
  }, [])

  return (
    <div>
      <main>

        {dataContent ?
        <>

          <HeboSection 
            title = {dataContent.content.hero.title}
            subtitle = {dataContent.content.hero.subtitle}
            links = {dataContent.content.hero.links}
          />

          <div className="contentSectionContainer">

              {/* Repudiandae */}
              <ContentSecImage
                name = 'Repudiandae'
                contentUrl='https://connecteam.com/static/frontend-home-task/data/repudiandae.json'
                directionLeft = {true}
                imageMobile = 'repudiandae-small'
                link = {dataContent.content.items[0].linkLabel}
                iconArrow = 'arrow-3'
                color='#7A00DA' 
                backgroundIconTitle="#F8EFFF"
                backgroundIconImage="#EDD6FF"
                positionLogoImage = 'bottom right'
              />

              {/* Sit et enim */}
              <ContentSecImage
                name = 'Sit-et-enim'
                contentUrl='https://connecteam.com/static/frontend-home-task/data/sit-at-enim.json'
                directionLeft = {false}
                imageMobile = 'sit-et-enim-small'
                link = {dataContent.content.items[1].linkLabel}
                iconArrow = 'arrow-4'
                color='#00CDDA'
                backgroundIconTitle="#EFFEFF"
                backgroundIconImage="#D6FCFF"
                positionLogoImage = 'bottom left'
              />

              {/* Praesentium aspernatur */}
              <ContentSecImage
                name = 'Praesentium-aspernatur'
                contentUrl='https://connecteam.com/static/frontend-home-task/data/praesentium-aspernatur.json'
                directionLeft = {true}
                imageMobile = 'praesentium-aspernatur-small'
                link = {dataContent.content.items[3].linkLabel}
                iconArrow = 'arrow-5'
                color='#DA0069'
                backgroundIconTitle="#FFEFF7"
                backgroundIconImage="#FFD6EA"
                positionLogoImage = 'bottom left'
              />

          </div>

        </>
        : ''}

      </main>
      <footer></footer>
    </div>
  );
}
