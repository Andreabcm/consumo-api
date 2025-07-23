// const animes =[
//   {
//     id:1,
//     title: 'Magic Kaito',
//     year:1987
//   },
//   {
//     id:2,
//     title: 'Yaiba',
//     year:1988
//   },
//   {
//     id:3,
//     title:'Detective Conan',
//     year:1994
//   },
// ]

// function getAnime(){
//     setTimeout(()=>{
//         console.log(animes)
//     },2000)
// }

// getAnime()

const getData=async()=>{
    let characters = ''
    const response = await fetch("https://rickandmortyapi.com/api/character")
    console.log(response)
    const data = await response.json()
    console.log(data)
    data.results.map(character => {
        console.log(character)
        characters = characters+ `
            <li>
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </li>
        `
    });
    document.getElementById('character-list').innerHTML = characters

}

getData()