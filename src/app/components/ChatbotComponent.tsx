import React, { useState } from 'react';
import { Chatbot } from '../lib/Chatbot';

const ChatbotComponent: React.FC = () => {
    const [query, setQuery] = useState('');
  
    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };
  
    const handleQuerySubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      const response = await Chatbot.getAnswer(query);
      console.log(response);
    };
  
    return (
      <div>
        <form onSubmit={handleQuerySubmit}>
          <input type="text" value={query} onChange={handleQueryChange} />
          <button type="submit">Ask</button>
        </form>
      </div>
    );
  };
  
  export default ChatbotComponent;
  