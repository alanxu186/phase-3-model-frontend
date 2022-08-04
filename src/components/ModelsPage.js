import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import "../stylesheets/ModelsPage.css"


function ModelsPage() {
    const navigate = useNavigate()

    function handleClick () {
        navigate('/favorites')

        
    }

    const samplePictures = [
        "https://i.mdel.net/i/db/2021/7/1545784/1545784-500w.jpg",
        "https://i.mdel.net/i/db/2021/8/1555199/1555199-500w.jpg",
        "https://t4.ftcdn.net/jpg/02/47/32/01/360_F_247320171_cgxDl5WE2fQ60jzP0RVgazxkG9WNfr08.jpg",
        "https://i.mdel.net/i/db/2021/7/1545784/1545784-500w.jpg",
        "https://i.mdel.net/i/db/2021/7/1545784/1545784-500w.jpg",
        "https://i.mdel.net/i/db/2021/7/1545784/1545784-500w.jpg",
        "https://i.mdel.net/i/db/2021/7/1545784/1545784-500w.jpg",
        "https://i.mdel.net/i/db/2021/7/1545784/1545784-500w.jpg",
    ]

    console.log(samplePictures)

    const sampleMapped = samplePictures.map((picture) => (
        <div key={picture.id} className="profile-container">
            <div className="image-container">
                <img src={picture} />
            </div>
            <div className="detail-container">
                <div>
                    <p>Name</p>
                </div>
                <div>
                    <button onClick={handleClick}>Favorite</button>
                </div>
            </div>
        </div>
    ))

    // const [agency, setAgency] = useState([])
    // //going to fetch all model data at once
    // useEffect(() => {
    //     fetch('http://localhost:9292/agency')
    //         .then(res => res.json())
    //         .then(setAgency)
    // }, [])
    //     const agencyInfo = agency.map ((item) => (
    //         <li key={item.id}>
    //             <div className="some-container">
    //                 <div className="agency-name"> 
    //                     <p>{item.company_name}</p>
    //                 </div>
    //             </div>
    //         </li>
    //     ))

    return (
        <div className="grid-body">
            {/* {agencyInfo} */}
            {sampleMapped}
        </div>
    )
}

export default ModelsPage