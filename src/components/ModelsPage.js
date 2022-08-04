import { useEffect, useState } from "react"
import "../stylesheets/ModelsPage.css"


function ModelsPage() {

    const [agency, setAgency] = useState([])
    //going to fetch all model data at once
    useEffect(() => {
        fetch('http://localhost:9292/agency')
            .then(res => res.json())
            .then(setAgency)
    }, [])
        const agencyInfo = agency.map ((item) => (
            <li key={item.id}>
                <div className="some-container">
                    <div className="agency-name"> 
                        <p>{item.company_name}</p>
                    </div>
                </div>
            </li>
        ))

    return (
        <div className="grid-body">
            {agencyInfo}
        </div>
    )
}

export default ModelsPage