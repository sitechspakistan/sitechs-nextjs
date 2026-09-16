(function () {
  const config = window.ChatWidgetConfig || {};
  const webhookUrl = config.webhook?.url || '';
  const welcomeText = config.branding?.welcomeText || 'Hi there!';
  const responseTimeText = config.branding?.responseTimeText || '';
  const logo = config.branding?.logo || '';
  const botName = config.branding?.name || 'Assistant';
  const primaryColor = config.style?.primaryColor || '#4CAF50';
  const secondaryColor = config.style?.secondaryColor || '#388E3C';
  const bgColor = config.style?.backgroundColor || '#fff';
  const fontColor = config.style?.fontColor || '#000';

  const style = `
    <style>
      #chatbot-container {
        width: 100%;
        height: calc(87vh - 100px);
        background: transparent;
        color: #000;
        font-family: 'Poppins', sans-serif;
        display: flex;
        flex-direction: column;
        border: 4px solid #8a83be;
        border-radius: 35px;
        padding-bottom: 5px;
      }

      .chatbot-header {
        background: ${primaryColor};
        color: #fff;
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 15px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      .chatbot-header img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: contain;
        background: #fff;
      }

      .chatbot-header .texts {
        display: flex;
        flex-direction: column;
      }

      .chatbot-body {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }

      .chatbot-message {
        max-width: 70%;
        margin-bottom: 10px;
        padding: 10px 18px;
        border-radius: 17px;
        font-size: 18px;
        line-height: 1.4;
      }

      .user-message {
        align-self: flex-end;
        background: #8a83be;
        color: white;
        border-bottom-right-radius: 0;
      }

      .bot-message {
        align-self: flex-start;
        background: #000;
        color: #ffffff;
        border-bottom-left-radius: 0;
      }

      .chatbot-input {
        // display: flex;
        padding: 10px 20px;
        background: transparent;
        // border-top: 1px solid #ddd;
        position:relative;
      }

      .chatbot-input input {
        flex: 1;
        padding: 10px 15px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 25px;
        outline: none;
        width: 100%;
      }

      .chatbot-input button {
          padding: 6px 18px;
          background: #8a83be;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          position: absolute;
          right: 33px;
          font-size: 15px;
          bottom: 18px;
          font-weight: 600;
        }
    </style>
  `;

  const markup = `
    ${style}
    <div class="chatbot-body" id="chat-messages">
      <div class="chatbot-message bot-message">${welcomeText}</div>
    </div>
    <div class="chatbot-input">
      <input type="text" id="chat-input" placeholder="Type your message...">
      <button id="chat-send">Send</button>
    </div>
  `;

  const container = document.getElementById('chatbot-container');
  container.innerHTML = markup;

  const messages = document.getElementById('chat-messages');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');

  function appendMessage(text, type = 'bot') {
    const div = document.createElement('div');
    div.className = `chatbot-message ${type}-message`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  appendMessage(text, 'user');
  input.value = '';

  // Get or generate sessionId
  let sessionId = localStorage.getItem('chatSessionId');
  if (!sessionId) {
    sessionId = crypto.randomUUID(); // For older browsers, you can use a polyfill
    localStorage.setItem('chatSessionId', sessionId);
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: sessionId,
        action: 'sendMessage',
        chatInput: text
      })
    });

    const data = await res.json();
    console.log(data);
    const reply = data.output ?? null;

    appendMessage(reply || 'Sorry, I couldn’t understand.', 'bot');
  } catch (e) {
    appendMessage('Oops! Something went wrong.', 'bot');
  }
}
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
})();