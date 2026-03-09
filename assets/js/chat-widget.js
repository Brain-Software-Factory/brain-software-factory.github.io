/**
 * Chat Widget - Brain
 * Widget de chat conectado a webhook n8n
 */
(function () {
  "use strict";

  const CONFIG = {
    webhook: {
      url: "https://webhookdev.brain.com.ar/webhook/40951eb8-0dc2-4548-a320-35eecce11663/chat",
      route: "general",
    },
  };

  function getChatId() {
    let chatId = sessionStorage.getItem("chatId");
    if (!chatId) {
      chatId = "chat_" + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("chatId", chatId);
    }
    return chatId;
  }

  function openChat() {
    document.getElementById("chat-widget-container").classList.add("chat-widget-open");
    document.getElementById("chat-widget-button").style.display = "none";
  }

  function closeChat() {
    document.getElementById("chat-widget-container").classList.remove("chat-widget-open");
    document.getElementById("chat-widget-button").style.display = "flex";
  }

  function addMessage(text, type) {
    const body = document.getElementById("chat-widget-body");
    const p = document.createElement("p");
    p.textContent = text;
    p.className = "chat-widget-message-" + type;
    body.appendChild(p);
    body.scrollTop = body.scrollHeight;
  }

  function addLoadingMessage() {
    const body = document.getElementById("chat-widget-body");
    const p = document.createElement("p");
    p.textContent = "Enviando...";
    p.className = "chat-widget-loading";
    p.id = "chat-widget-loading-msg";
    body.appendChild(p);
    body.scrollTop = body.scrollHeight;
  }

  function removeLoadingMessage() {
    const el = document.getElementById("chat-widget-loading-msg");
    if (el) el.remove();
  }

  function sendMessage() {
    const input = document.getElementById("chat-widget-input");
    const sendBtn = document.getElementById("chat-widget-send");
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, "user");
    input.value = "";
    sendBtn.disabled = true;
    addLoadingMessage();

    fetch(CONFIG.webhook.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chatId: getChatId(),
        message: message,
        route: CONFIG.webhook.route,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        removeLoadingMessage();
        const output = data.output || data.message || data.text || data.response;
        if (output) {
          addMessage(output, "bot");
        } else {
          addMessage("No pude procesar tu mensaje. Intentá de nuevo.", "error");
        }
      })
      .catch(function (error) {
        removeLoadingMessage();
        addMessage("No pudimos conectar. Intentá de nuevo.", "error");
        console.error("Chat widget error:", error);
      })
      .finally(function () {
        sendBtn.disabled = false;
      });
  }

  function init() {
    const btn = document.getElementById("chat-widget-button");
    const closeBtn = document.getElementById("chat-widget-close");
    const sendBtn = document.getElementById("chat-widget-send");
    const input = document.getElementById("chat-widget-input");

    if (!btn || !closeBtn || !sendBtn || !input) return;

    btn.addEventListener("click", openChat);
    closeBtn.addEventListener("click", closeChat);
    sendBtn.addEventListener("click", sendMessage);

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
