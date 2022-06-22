import './user-display.styles.scss';
import axios from 'axios';

import CustomButton from '../custom-button/custom-button.component';
import { useEffect } from 'react';

const UserDisplay = ({userData, handleExit, setUserData}) => {
    const {numberOfTickets, ticketDetails} = userData;

    const handleValidate = async (seatNumber) => {
        await axios.patch('http://127.0.0.1:5000/validate',
        {
            'email': localStorage.getItem('email'),
            'seatNumber': seatNumber
        }
        )

        await axios.get('http://127.0.0.1:5000/login',
        {
            params: {
                'email':localStorage.getItem('email') 
            }
        }
        )
        .then(res => setUserData(res.data))
        .then(err => console.log(err))
    }

    useEffect(() => {
        console.log(userData);
    }, [userData])

    return (
        <div style={{padding: "30px"}} className='userdisplay-container'>
            <div className='exit-button' onClick={handleExit}>&larr;</div>
            <h1 >
                Ticket Details:
            </h1>
            <p style={{fontWeight: "bolder", fontSize: "22px"}}>Number of Tickets: {numberOfTickets}</p>
            {
                ticketDetails.map(ticket => (
                    ticket ?
                    <div key={ticket.seatNumber} className='ticket-data-display'>
                        <p>Name: {ticket.name}</p>
                        <p>Train Number: {ticket.trainNumber}</p>
                        <p>Passenger ID: {ticket.passengerID}</p>
                        <p>Seat Number: {ticket.seatNumber}</p>
                        <p>Boarding Station: {ticket.boardingStation}</p>
                        <p>Destination Station: {ticket.destinationStation}</p>
                        {ticket.validationStatus === '0' ?
                            <div className='validate-button-container'>
                                <CustomButton onClick={() => handleValidate(ticket.seatNumber)}>Validate</CustomButton>
                            </div>
                            :
                            <div className='validated'>Validated</div>
                        }
                        
                    </div>
                    :
                    <div></div>
                ))
            }
            
        </div>
    )
};

export default UserDisplay