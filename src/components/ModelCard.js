import "../stylesheets/ModelCard.css"
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function ModelCard({model, id, img, work_status, first_name, last_name, handleModelButton, isLoading, setIsLoading}){
    const [booked, setBooked] = useState(false);

    
    let navigate = useNavigate();

    function handleAvailability(){
        setBooked(!booked);
        // setIsloading(!isLoading);
        // const avail ={
        //     work_status: !work_status,
        // };
        console.log(model.id)
        console.log({model})
        // console.log(avail)
        fetch(`http://localhost:9292/models/${model.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({work_status: !work_status}),
        })
    //     .then((r) => {
    //     if (r.ok) {
    //         (r.json().then((console.log(r))))
    // }})
    //     .then(handleModelButton(id))
    //     .then(console.log(model))
        .then( r => r.json())
        .then( data => {
            console.log(data);
            setIsLoading(!isLoading) //change state and pass isLoading back to App to cause a rerender
        })
    }
    return(
        <>
            <div className="profile-container">
                <div className="image-container">
                    <img src={img} onClick={() => navigate(`/profile/${model.id}`)} />
                </div>
                <div className="detail-container">
                    <p>{first_name} {last_name}</p>
                    
                    <button onClick={handleAvailability}>
                    {work_status ? "Unbook" : "Book"}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ModelCard;