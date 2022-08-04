import { useState } from "react"
import "../stylesheets/BookingsPage.css"

function BookingsPage() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [currentAgency, setCurrentAgency] = useState('')
    const [message, setMessage] = useState('')


    function handleBookingSubmit(e){
        e.preventDefault()

        const newBooking = {
            
        }

        fetch('http://localhost/9292/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify()
            })
    }
    return (
        <div>
            <div className="banner">
                <h2>Book Your Model</h2>
                <div className="card-container">
                    <div className="card-img">
                    </div>
                    <div className="card-content">
                        <h3>Bookings</h3>
                        <form className="form-row" onSubmit={handleBookingSubmit}>
                            <div >
                                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            </div>
                            <div >
                                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Agency" value={currentAgency} onChange={(e) => setCurrentAgency(e.target.value)}></input>
                            </div>
                            <div>
                                <textarea rows="5" placeholder="Leave a message..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div>
                                <input type="submit" placeholder="Book model"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingsPage