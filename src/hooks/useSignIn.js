import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {

    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
        try {
            const response = await mutate({ variables: { username, password } });
            console.log("response ", response);
            return response;
        } 
        catch (error) {
            console.error('Sign in failed:', error);
        }
    };

    /* result is the mutation's result as it is returned by the useMutation hook and
    signIn a function that runs the mutation with a { username, password } object argument */
    return [signIn, result];
};

export default useSignIn;