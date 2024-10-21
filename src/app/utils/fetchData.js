export async function fetchDataContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return null;
  }
}

export async function fetchImages(names) {

  const urlsName = {
    "home-small":"https://connecteam.com/static/frontend-home-task/jpg/home-small.jpg",
    "home-large":"https://connecteam.com/static/frontend-home-task/jpg/home-large.jpg",
    "repudiandae-large":"https://connecteam.com/static/frontend-home-task/jpg/repudiandae-large.jpg",
    "repudiandae-small":"https://connecteam.com/static/frontend-home-task/jpg/repudiandae-small.jpg",
    "sit-et-enim-large":"https://connecteam.com/static/frontend-home-task/jpg/sit-et-enim-large.jpg",
    "sit-et-enim-small":"https://connecteam.com/static/frontend-home-task/jpg/sit-et-enim-small.jpg",
    "dolore-ipsum-large":"https://connecteam.com/static/frontend-home-task/jpg/dolore-ipsum-large.jpg",
    "dolore-ipsum-small":"https://connecteam.com/static/frontend-home-task/jpg/dolore-ipsum-small.jpg",
    "praesentium-aspernatur-large":"https://connecteam.com/static/frontend-home-task/jpg/praesentium-aspernatur-large.jpg",
    "praesentium-aspernatur-small":"https://connecteam.com/static/frontend-home-task/jpg/praesentium-aspernatur-small.jpg"
  }

  try {
    const urls = names.map(name => urlsName[name]);
    const imagePromises = urls.map(async (url, index) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.url; 
    });

    const imageSrcs = await Promise.all(imagePromises);
    const imageUrls = imageSrcs.reduce((acc, src, index) => {
      acc[`image${index + 1}`] = src;
      return acc;
    }, {});

    return imageUrls;
  } catch (error) {
    console.error("Fetching images failed:", error);
    return null;
  }
}




