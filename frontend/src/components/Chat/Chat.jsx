import React, { useState } from 'react';
import './Chat.css';
import SendIcon from '@mui/icons-material/Send';
// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleUserMessage = () => {
//     if (newMessage.trim() === '') return;

//     // Simulated AI response (you can replace this with a real AI service)
//     const aiResponse = `AI: You said, "${newMessage}"`;

//     setMessages([...messages, `You: ${newMessage}`, aiResponse]);
//     setNewMessage('');
//   };

//   return (
//     <div className="chat-container">
//       <div className="chat-messages">
//         {messages.map((message, index) => (
//           <div key={index} className={index % 2 === 0 ? 'user-message' : 'ai-message'}>
//             {message}
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//         />
//         <button onClick={handleUserMessage} className='sendbtn'><SendIcon/></button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

 const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleUserMessage = () => {
    if (newMessage.trim() === '') return;

    // Simulated AI response (you can replace this with a real AI service)
    fetch('YOUR_AI_SERVICE_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage }),
    })
      .then((response) => response.json())
      .then((data) => {
        const aiResponse = `AI: ${data.response}`;
        setMessages([...messages, `You: ${newMessage}`, aiResponse]);
        setNewMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={index % 2 === 0 ? 'user-message' : 'ai-message'}>
            {message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleUserMessage} className='sendbtn'>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Chat;