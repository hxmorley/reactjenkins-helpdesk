import { useState } from 'react';

const TicketForm = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [Issue, setIssue] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
        const buyer = { first, last, Issue }

        fetch('http://localhost:8000/Ticket',
        {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify()
        })
        
        setFirst('');
        setLast('');
        setIssue('');
            
    }

    return (
        <div>
        <form onSubmit={handlesubmit} className= "buyerform">
            <label>First Name: </label>
            <input type="text"
            required value={first}
            onChange={(e) => setFirst(e.target.value)} />

            <br /><br />

            <label>Surname: </label>
            <input type="text"
            required value={last}
            onChange={(e) => setLast(e.target.value)} />

            <br /><br />

            <label>Issue: </label>
            <input type="text"
            required value={Issue}
            onChange={(e) => setIssue(e.target.value)} />

            <br /><br />
            <div className='buyerbutton'>
            <button>Submit</button>
            </div>

        </form>
        
        </div>

    )

    

    

}
export default TicketForm;
