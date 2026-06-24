//promise is async function.

const getUser = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts"

        const res = await fetch(url)
        const data = await res.json()
        console.log(data[0])

    }
    catch (error) {
        console.log("Error", error)
    }


}
getUser()