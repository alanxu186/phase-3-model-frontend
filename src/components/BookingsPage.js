import "../stylesheets/BookingsPage.css"

function BookingsPage() {
    return (
        <div>
            <div className="banner">
                <div className="card-container">
                    <div className="card-img">
                    </div>

                <div className="card-content">
                    <h3>Bookings</h3>
                    <form>
                        <div className="form-row">
                            <select name="days">
                                <option value="day-select">Select Day</option>
                                <option value="sunday">Sunday</option>
                                <option value="monday">Monday</option>
                                <option value="tuesday">Tuesday</option>
                                <option value="wednesday">Wednesday</option>
                                <option value="thursday">Thursday</option>
                                <option value="friday">Friday</option>
                                <option value="saturday">Saturday</option>
                            </select>

                            <select name="hours">
                                <option value="day-select">Select Day</option>
                                <option value="10">10:00</option>
                                <option value="10">11:00</option>
                                <option value="10">12:00</option>
                                <option value="10">14:00</option>
                                <option value="10">15:00</option>
                                <option value="10">16:00</option>
                                <option value="10">17:00</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <input type="text" placeholder="Full Name"></input>
                            <input type="number" placeholder="Phone Number"></input>
                        </div>

                        <div className="form-row">
                            <input type="text" placeholder="Location"></input>
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