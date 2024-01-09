// export const concepts = ['paper', 'plastic', 'glass', 'metal', 'compost', 'trash',
//     'justice', 'peace', 'comfort', 'efficiency', 'reliability', 'safety', 'speed']

export const concepts = {
    "en": [
        { cptFood: ['mango', 'peach', 'banana', 'carrot'] },
        { cptAbstract: ['safety', 'justice', 'peace', 'comfort'] },
        { cptEmotion: ['sad', 'love', 'happy', 'angry'] },
        { cptWeather: ['drought', 'lightning', 'sandstorm', 'hurricane'] }
    ],
    "fr": [
        { cptFood: ['mangue', 'pêche', 'banane', 'carotte'] },
        { cptAbstract: ['sureté', 'justice', 'paix', 'confort'] },
        { cptEmotion: ['triste', 'amour', 'heureux', 'en colère'] },
        { cptWeather: ['sécheresse', 'foudre', 'tempête de sable', 'ouragan'] }
    ]
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


const shuffle = (a) => { //Fisher-Yates shuffle
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i]; a[i] = a[j]; a[j] = x;
    } return a;
}

// export const conceptsAllMix = shuffle([].concat(cptFood, cptAbstract, cptEmotion, cptWeather))
// export const concreteConcepts = conceptsAllMix.slice(0, conceptsAllMix.length / 2)
// export const abstractConcepts = conceptsAllMix.slice(conceptsAllMix.length / 2, conceptsAllMix.length)export const concreteConcepts = conceptsAllMix.slice(0, conceptsAllMix.length / 2)
// export const abstractConcepts = conceptsAllMix.slice(conceptsAllMix.length / 2, conceptsAllMix.length)

// console.log(conceptsAllMix)
// console.log(concreteConcepts, abstractConcepts)

