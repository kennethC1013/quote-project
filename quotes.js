const michaelQuotes = [
    'I love inside jokes. I\'d love to be a part of one someday.',
    'I\'m not superstitious, but I am a little stitious.',
    'I am running away from my responsibilities, and it feels good.'
]

const dwightQuotes = [
    'Identity theft is not a joke, Jim!',
    'If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people',
    'I Don\'t Need Them. I Have Superior Genes. And Superior Brainpower.'
]

const kevinQuotes = [
    'I just want to lie on the beach and eat hot dogs. That\'s all I\'ve ever wanted.',
    'Me think, why waste time say lot word when few word do trick.',
    'I want to be wined and dined and sixty-nined.'
]

const officeQuotes = [michaelQuotes, dwightQuotes, kevinQuotes]



const randomGenerator = (arr) => {
    const randomize = arr[(Math.floor(Math.random() * (arr.length)))]
       return randomize
   }
    console.log(randomGenerator(officeQuotes));