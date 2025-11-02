function fetchDataFromDatabase() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const data = true

            if(data)
            {
                console.log("Data fectched successfully!")
            }
            else
            {
                console.log("Data not found!")
            }
        }, 3000)
    })
}

    fetchDataFromDatabase()
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })



