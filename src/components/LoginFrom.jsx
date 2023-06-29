import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "2525e5d5-2027-4200-834b-676b2a335c26", 'User-Name': username, 'User-Secret': password};
        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch(error){

        }
    }

    return(
         <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="input" placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
            </div>
         </div>
    )
}

export default LoginForm; 