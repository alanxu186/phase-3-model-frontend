import { useEffect, useState } from "react"
import "../stylesheets/ModelsPage.css"


function ModelsPage() {

    // const [agency, setAgency] = useState([])
    // //going to fetch all model data at once
    // useEffect(() => {
    //     fetch('http://localhost:9292/agency')
    //         .then(res => res.json())
    //         .then(setAgency)
    // }, [])

        // const agencyInfo = agency.map ((item) => (
        //     <li key={item.id}>
        //         <div className="some-container">
        //             <div className="agency-name"> 
        //                 <p>{item.name}</p>
        //             </div>
        //         </div>
        //     </li>
        // ))

    return (
        <div className="grid-body">

            {/* <div className="grid-container">
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-2-1521213815.jpg?resize=480:*"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-3-1521213819.jpg?resize=480:*"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
                <img src="https://hips.hearstapps.com/hmg-prod/images/emma-1-1521213816.jpg"></img>
            </div> */}
        </div>
    )
}

export default ModelsPage