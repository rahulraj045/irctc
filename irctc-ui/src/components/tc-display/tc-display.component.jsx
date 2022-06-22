import './tc-display.styles.scss';

const TcDisplay = ({ userData, handleExit }) => {
    const { ticketDetails } = userData;
    return (
        <div style={{padding: "30px"}} className='tcdisplay-container'>
            <div className='exit-button' onClick={handleExit}>&larr;</div>
            <h2>Total Number of seats: 72</h2>
            <h2>Seats Reserved: 39</h2>
            {
                ticketDetails.map(ticket => (
                    ticket ?
                    <div key={ticket.seatNumber} className={`${ticket.validationStatus === '1'?'validated' :''} ticket-data-display`}>
                        <p>Name: {ticket.name}</p>
                        <p>Train Number: {ticket.trainNumber}</p>
                        <p>Passenger ID: {ticket.passengerID}</p>
                        <p>Seat Number: {ticket.seatNumber}</p>
                        <p>Boarding Station: {ticket.boardingStation}</p>
                        <p>Destination Station: {ticket.destinationStation}</p>
                    </div>
                    :
                    <div></div>
                ))
            }
        </div>
    )
};

export default TcDisplay;