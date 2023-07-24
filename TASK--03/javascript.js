const chatWindow = document.getElementById('chat-text-window');
const messageInput = document.getElementById('message-input');

// Функция отправки сообщения
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    displayMessage('Вы: ' + message);
    sendMessageToEchoServer(message);
    messageInput.value = '';
  }
}

// Функция вывода сообщения в окно чата
function displayMessage(message) {
  let messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
}

// Функция отправки сообщения на эхо-сервер
function sendMessageToEchoServer(message) {
  const socket = new WebSocket('wss://echo-ws-service.herokuapp.com');
  socket.addEventListener('open', function (event) {
    socket.send(message);
  });
  socket.addEventListener('message', function (event) {
    displayMessage('Эхо-сервер: ' + event.data);
    socket.close();
  });
}
  // Функция отправки геолокации
  function sendLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
         
      let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      displayMessage(link);
          
    }, error => {
      console.error('Ошибка при получении геолокации:', error);
    });
  } else {
    console.error('Геолокация не поддерживается');
  }
}
 
 
    
  
 
     


      
   

      
      
  


