import React from 'react';
import { useAuthContext } from '../../../AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn } = useAuthContext()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>

            <div className="divider">or</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;