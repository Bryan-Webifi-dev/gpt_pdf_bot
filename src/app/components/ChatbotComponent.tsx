import React, { useState } from 'react';
import { Chatbot } from '../lib/Chatbot';

const ChatbotComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answer = await Chatbot.getAnswer(query);
    setResponse(answer);
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask your question"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Chatbot's response:</p>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatbotComponent;

  