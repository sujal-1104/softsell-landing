// components/ChatWidget.jsx
import { useState } from 'react';

const predefinedResponses = {
  "How do I sell my license?": "Click 'Get a Quote', upload your license, and we’ll take care of the rest!",
  "Is this secure?": "Absolutely. All transactions are encrypted and secure.",
  "How long does payment take?": "Usually within 24 hours of license approval.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    const reply =
      predefinedResponses[input.trim()] ||
      "I'm sorry, I don't understand that. Try asking something like: 'How do I sell my license?'";

    setMessages([...newMessages, { role: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white border border-gray-300 shadow-lg rounded-lg w-72 h-96 flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">SoftSell Chat</div>
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md ${
                  msg.role === 'user'
                    ? 'bg-blue-100 self-end text-right'
                    : 'bg-gray-100 text-left'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 px-2 py-1 border rounded-md text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded-md text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isOpen ? '✖' : '💬'}
      </button>
    </div>
  );
}
