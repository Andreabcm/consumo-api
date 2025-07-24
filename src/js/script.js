const getData = async () => {
    let characters = "";
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    data.results.map(character => {
        characters = characters + `
            <li>
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </li>
        `
    })
    
    document.getElementById("character-list").innerHTML = characters;
}

getData()


/* Este código sirve para obtener los datos de una API (como la de Rick and Morty) y 
mostrarlos por consola. */

/*
const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}


getData('https://rickandmortyapi.com/api/character')
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

const getStatus = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error('Error fetching status:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}
getStatus('https://rickandmortyapi.com/api/character')
  .then(status => {
    console.log('Status fetched successfully:', status);
  })
  .catch(error => {
    console.error('Error fetching status:', error);
  });
*/
