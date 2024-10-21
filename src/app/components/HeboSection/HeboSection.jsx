'use client'
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import './HeboSection.css';

const HeboSection = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadContent(){
            const urls = [
                'https://connecteam.com/static/frontend-home-task/data/home.json'
            ]
            const result = await fetchData(urls);
            setData(result);
        }
        loadContent();
    },[])

  return (
    <div>
        HeboSection
        <div>
            {data ? JSON.stringify(data) : null}
        </div>
    </div>
  )
}

export default HeboSection