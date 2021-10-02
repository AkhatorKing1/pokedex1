// function Animal() {
//     let poo = "poo"
//     function walk() {
//         let wk = "I can walk very well"
//         return "I am walking"
//     }

//     function speak() {
//         return "I can speak"
//     }

//     return {
//         walk, 
//         speak,
//         poo
//     }
    
// }

// const animal = new Animal();
// console.log(animal.poo)


const pokemonList = (function() {
    let pokemon = [{
        name: "glad",
    },
    {
        name: "lad"
    },
    {
        name: "pete"
    },
    {
         name: "goal"
    },
    {
        name: "yun"
    }]

    const arr = new Array(9)

    function display() {
        return pokemon
    }


    function displayGrid() {
        const container = document.querySelector('.container')
        const gridWrapper = document.createElement('div');
        gridWrapper.setAttribute('class', 'grid-wrapper')
        arr.fill("");
        
        // console.log(arr, div, innerDiv)
        
        arr.forEach((a, i) => {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            grid.setAttribute('id', i);
            grid.innerText = a;
            gridWrapper.appendChild(grid)
            container.append(gridWrapper)
        })

        // return grid
    }

    function getDisplay() {
        return display()
    }

    function add(value) {
        if(typeof value !== 'object') {
            console.log("please add an object");
            return
        }

        pokemon.push(value)
    }

    return {
        getDisplay,
        add,
        displayGrid
    }
})()

setTimeout(() => console.log("set"), 10000);
pokemonList.add({name: "john"})
pokemonList.add({name: "James"})
pokemonList.add({name: "Fati", ability: ["fire", "air"]})
pokemonList.getDisplay().forEach(element => {
    console.log(element.name)
});

pokemonList.displayGrid();
console.log('get');

const nono = (value, callback) => {
    return callback(value)
}

function callMeLater(value) {
    return value * 3
}

console.log(nono(3, callMeLater))


async function getUsers(names) {
    const response = await fetch(`https://api.github.com/users/${names}`).then(res => res.json()).then(dat => console.log(dat))

    // const users = await response.json()

    // console.log(users)
   
    // return users]
    /* your code */
}


getUsers(')))s')