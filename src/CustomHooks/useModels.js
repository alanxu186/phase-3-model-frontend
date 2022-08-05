// import { useState, useEffect } from "react"

// function useModel () {
//     const [model, setModel] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:9292/model')
//             .then(res => res.json())
//             .then(setModel)
//     }, [])


    // from models list:
        // function handleClick(id) {
    //     if (booked === false) {
    //         fetch(`http://localhost:9292/models${id}`, {
    //             headers: { "Content-Type": "application/json" },
    //             method: 'PATCH',
    //             body: JSON.stringify({
    //                 work: true
    //             })
    //         })
    //         setBooked(!booked)
    //     }
    //     else{
    //         fetch(`http://localhost:9292/models${id}`, {
    //             headers: { "Content-Type": "application/json" },
    //             method: 'PATCH',
    //             body: JSON.stringify({
    //                 work: true
    //             })
    //         })
    //         setBooked(!booked)

    //     }
    // }

    //going to fetch all model data at once
    // const [model, setModel] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/model')
    //         .then(res => res.json())
    //         .then(setModel)
    // }, [])


    // useEffect(() => {
    //     fetch('http://localhost:9292/model')
    //         .then(res => res.json())
    //         .then(data => setModels(data))
    // }, [])
    // const [model] = useModel()
  
//     return [model, setModel] 

// }

// export default useModel