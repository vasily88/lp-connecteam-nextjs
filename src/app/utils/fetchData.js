// export async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Fetching data failed:", error);
//     return null;
//   }
// }

export async function fetchData(urls) {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));

    // Check if all responses are ok
    const allOk = responses.every(response => response.ok);
    if (!allOk) {
      const errorResponse = responses.find(response => !response.ok);
      throw new Error(`Error: ${errorResponse.status} - ${errorResponse.statusText}`);
    }

    const data = await Promise.all(responses.map(response => response.json()));
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    return null;
  }
}

