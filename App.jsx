import React, { useState } from "react";

export default function App() {
  const [idea, setIdea] = useState("");
  const [pitch, setPitch] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chat, setChat] = useState([]);

  const generate = () => {
    const ideas = [
      "AI tool for automating small business tasks",
      "Startup assistant for student founders",
      "Marketplace connecting freelancers and shops",
      "AI-powered productivity system",
    ];
    const i = ideas[Math.floor(Math.random() * ideas.length)];
    setIdea(i);
    setPitch(i + ". Problem: inefficiency. Solution: smart tooling. Impact: measurable results.");
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    const reply = "AI: Talk to 5 users to validate your idea.";
    setChat([...chat, { user: chatInput, bot: reply }]);
    setChatInput("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Startup Support Portal</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">AI Idea Generator</h2>
        <button onClick={generate} className="btn btn-primary mt-3">Generate</button>
        <p className="mt-3"><b>Idea:</b> {idea}</p>
        <p><b>Pitch:</b> {pitch}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Team Chat</h2>
        <div className="flex gap-2">
          <input value={chatInput} onChange={e => setChatInput(e.target.value)} className="input input-bordered w-full" placeholder="Type message..." />
          <button onClick={sendChat} className="btn btn-secondary">Send</button>
        </div>

        <div className="mt-4 space-y-3">
          {chat.map((c, i) => (
            <div key={i} className="p-3 bg-base-100 rounded border">
              <div><b>You:</b> {c.user}</div>
              <div className="text-primary"><b>{c.bot}</b></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
