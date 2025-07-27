
const { createApp, ref} = Vue;

const app = createApp({
    // template: `
    // <h1> {{ message }}</h1>
    // <p>{{ author }}</p>
    // `,

    setup() {
        const message = ref("I`m Batman");
        const author = ref(" Bruce Wayne");

        const changeQuote = () => {
            message.value = "I`m Spiderman";
            author.value = "Peter Parker";
        }
        // setTimeout(() => {
        //     message.value = "I`m Spiderman";
        //     author.value = "Peter Parker";
        // }, 1000);

        return {
            message,
            author,
            changeQuote
        }
    }
});


app.mount('#myApp');