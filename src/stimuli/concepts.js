// export const concepts = ['Paper', 'Plastic', 'glass', 'Metal', 'Compost', 'Trash',
//     'Justice', 'Peace', 'Comfort', 'Efficiency', 'reliability', 'Safety', 'Speed']

export const concepts = {
    "en": {
        cptFood: ['Mango', 'Peach', 'Banana', 'Carrot'],
        cptAbstract: ['Safety', 'Justice', 'Peace', 'Comfort'],
        cptEmotion: ['Sad', 'Love', 'Happy', 'Angry'],
        cptWeather: ['Drought', 'Lightning', 'Sandstorm', 'Hurricane']
    },
    "fr": {
        cptFood: ['Mangue', 'Pêche', 'Banane', 'Carotte'],
        cptAbstract: ['Sureté', 'Justice', 'Paix', 'Confort'],
        cptEmotion: ['Triste', 'Amour', 'Heureux', 'En colère'],
        cptWeather: ['Sécheresse', 'Foudre', 'Tempête de sable', 'Ouragan']
    }
}

export const getConcepts = (lang) => {
    const con = concepts[lang]
    const res = [];
    for (let i = 0; i < con.length; i++) {
        const key = Object.keys(con[i])[0]
        res.push(...con[i][key])
    }
    return res
}


// const shuffle = (a) => { //Fisher-Yates shuffle
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         x = a[i]; a[i] = a[j]; a[j] = x;
//     } return a;
// }


