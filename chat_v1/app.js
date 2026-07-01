
const { useState } = React;

function App() {
    const [messages, setMessages] = useState([]);
    const [aliceInput, setAliceInput] = useState('');
    const [bobInput, setBobInput] = useState('');

    // Send message as Alice
    const sendAsAlice = (e) => {
        e.preventDefault();
        if (!aliceInput.trim()) return;
        setMessages((prev) => [...prev, { id: Date.now(), sender: 'Alice', text: aliceInput }]);
        setAliceInput('');
    };

    // Send message as Bob
    const sendAsBob = (e) => {
        e.preventDefault();
        if (!bobInput.trim()) return;
        setMessages((prev) => [...prev, { id: Date.now(), sender: 'Bob', text: bobInput }]);
        setBobInput('');
    };

    return (
        <div className="chat-container">
            {/* Alice's Box (Sender) */}
            <div className="chat-box alice-box">
                <h2>Sender</h2>
                <div className="message-log">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`msg ${msg.sender === 'Alice' ? 'mine' : 'other'}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={sendAsAlice}>
                    <input
                        type="text"
                        value={aliceInput}
                        onChange={(e) => setAliceInput(e.target.value)}
                        placeholder="Type message as Alice..."
                    />
                    <button type="submit">Send</button>
                </form>
            </div>

            {/* Bob's Box (Receiver) */}
            <div className="chat-box bob-box">
                <h2>Receiver</h2>
                <div className="message-log">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`msg ${msg.sender === 'Bob' ? 'mine' : 'other'}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={sendAsBob}>
                    <input
                        type="text"
                        value={bobInput}
                        onChange={(e) => setBobInput(e.target.value)}
                        placeholder="Type message as Bob..."
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
