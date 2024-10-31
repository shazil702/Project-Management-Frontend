import { useEffect, useState, useRef } from 'react';
import { baseUrl } from '../../constants/constants';
import axios from 'axios';

const AdminMessage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const wsRef = useRef(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${baseUrl}/hr/viewEmployee/`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (selectedUser) {
      const loggedInUser = localStorage.getItem('name');
      const usernames = [loggedInUser, selectedUser.username].sort();
      const roomName = usernames.join('_');
  
      const wsUrl = `ws://127.0.0.1:8000/ws/chat/${roomName}/`;
      wsRef.current = new WebSocket(wsUrl);
  
      wsRef.current.onopen = () => {
        console.log('Connected to WebSocket room:', roomName);
      };
  
      wsRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [
          ...prevMessages, 
          { sender: data.username, message: data.message }
        ]);
      };
  
      wsRef.current.onclose = () => {
        console.log('WebSocket connection closed');
      };
  
      return () => {
        if (wsRef.current) {
          wsRef.current.close();
        }
      };
    }
  }, [selectedUser]);
  

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && selectedUser && wsRef.current) {
      const messageData = {
        username: localStorage.getItem('name'),
        body: newMessage,
      };
      wsRef.current.send(JSON.stringify(messageData));
      setNewMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1">
          <div className="w-1/2 border-r border-gray-200">
            <div className="bg-blue-500 text-white text-center p-2">Inbox</div>
            <ul className="overflow-y-auto h-full">
              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={`${baseUrl}${user.img}`}
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <div className="font-bold">{user.username}</div>
                    <div className="text-sm text-gray-500">2 new messages</div>
                  </div>
                  <div className="text-sm text-gray-500">2m</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between bg-gray-100 p-4 border-b border-gray-200">
              {selectedUser && (
                <div className="flex items-center">
                  <img
                    alt="User"
                    src={`${baseUrl}${selectedUser.img}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="font-bold text-lg">{selectedUser.username}</div>
                </div>
              )}
            </div>

            <div className="flex-1 p-4">
              <div className="bg-gray-100 p-4 rounded-lg flex-1 overflow-y-auto h-full">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded shadow ${
                      message.sender === localStorage.getItem('name')
                        ? 'bg-blue-500 text-white self-end text-right'
                        : 'bg-white text-black text-left'
                    }`}
                  >
                    {message.message}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 w-96 mb-10 bg-gray-100 flex">
              <input
                type="text"
                placeholder="Message"
                className="w-full p-2 rounded-lg outline-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-500 text-white rounded mt-2 mx-11"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminMessage;
