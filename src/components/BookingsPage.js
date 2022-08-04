import "../stylesheets/BookingsPage.css"

function BookingsPage() {
    return (
        <div>
            <div className="banner">
                <h2>Book Your Model</h2>
                <div className="card-container">
                    <div className="card-img">
                    </div>
                    <div className="card-content">
                        <h3>Bookings</h3>
                        <form className="form-row">
                            <div >
                                <input type="text" placeholder="First Name"></input>
                            </div>
                            <div >
                                <input type="text" placeholder="Last Name"></input>
                            </div>
                            <div>
                                <input type="text" placeholder="Agency"></input>
                            </div>
                            <div>
                                <textarea rows="5" placeholder="Leave a message..."></textarea>
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