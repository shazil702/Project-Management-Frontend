import User1 from '../assets/images/User1.jpeg';
import User2 from '../assets/images/User 2.jpeg';
import User3 from '../assets/images/User 3.jpeg';
import User4 from '../assets/images/User 4.jpg';
import User5 from '../assets/images/User 5.jpeg';
const ClientView = () => {
    const client = [{
        name: 'Shazil',
        email: 'shazil@gmail.com',
        img:User4
    },
    {
        name:'Naja',
        email:'naja.jaleel@gmail.com',
        img:User1
    },
]
return(
    <div className=' flex-1 p-8'>
        <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold'>Clients</h1>
            <button className='bg-blue-700 text-white py-2 px-4 rounded'>Add Client</button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {client.map((client, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg flex flex-col items-center">
              <img className="w-24 h-24 rounded-full mb-4" src={client.img} alt={client.name} />
              <div className="text-lg font-bold">{client.name}</div>
              <div className="text-gray-700">{client.email}</div>
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-700 text-white py-1 px-3 rounded">Chat</button>
                <button className="bg-blue-700 text-white py-1 px-3 rounded">Profile</button>
              </div>
            </div>
          ))}
        </div>
    </div>
)
}
export default ClientView;