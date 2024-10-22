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
              <ContentSecImage
                contentUrl='https://connecteam.com/static/frontend-home-task/data/repudiandae.json'
                directionLeft = {true}
                imageMobile = 'repudiandae-small'
                link = {dataContent.content.items[0].linkLabel}
                iconArrow = 'arrow-3'
                color='#7A00DA'
              />
          </div>

        </>
        : ''}

      </main>
      <footer></footer>
    </div>
  );
}
