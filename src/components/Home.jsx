import { useContext } from 'react';
import { authContext } from '../layouts/MainLayout';

const Home = () => {
    const contextValue = useContext(authContext);

    const { handleGoogleLogin, handleGithubLogin, handleTwitterLogin, handleLogout } = contextValue;

    return (
        <div className="mt-10 ml-10 flex gap-4">
            <button onClick={handleGoogleLogin} className="btn">
                Google login
            </button>
            <button onClick={handleGithubLogin} className="btn">
                Github login
            </button>
            <button onClick={handleTwitterLogin} className="btn">
                Twitter login
            </button>
            <button onClick={handleLogout} className="btn">
                handleLogout
            </button>
        </div>
    );
};
export default Home;
