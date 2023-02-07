//This function fetches a word from a random word API and returns it.
//This API isn't ideal, as some of the words it returns are not actually words. If I can find a better one I will update this
async function getWord() {
        let result = await fetch("https://random-word-api.herokuapp.com/word?length=5");
        const word = await result.json()
        console.log(word[0])
        return word[0]
};

export default getWord