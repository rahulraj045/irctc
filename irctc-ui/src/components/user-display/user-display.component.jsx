import './user-display.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const UserDisplay = ({userData, setDisplayData}) => {
    const {numberOfTickets, ticketDetails} = userData;
    return (
        <div style={{padding: "30px"}} className='userdisplay-container'>
            <h1 >
                Ticket Details:
            </h1>
            <p style={{fontWeight: "bolder", fontSize: "22px"}}>Number of Tickets: {numberOfTickets}</p>
            {
                ticketDetails.map(ticket => (
                    ticket ?
                    <div key={ticket.passengerID} className='ticket-data-display'>
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
            <div className='validate-button-container'>
                <CustomButton onClick={() => setDisplayData(false)}>Validate</CustomButton>
            </div>
        </div>
    )
};

export default UserDisplay