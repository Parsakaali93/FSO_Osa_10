import { ApolloClient, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useNavigate } from 'react-router-native';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const navigate = useNavigate();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(SIGN_IN);

    const signIn = async ({ username, password }) => {
        try {
            const response = await mutate({ variables: { username, password } });
            // console.log("response ", response);
            const token = response.data.authenticate.accessToken;

            console.log("setting user token in local storage ", token);
            await authStorage.setAccessToken(token);
            apolloClient.resetStore();
            //const t = await authStorage.getAccessToken()
            //console.log("current value in local storage: ", t);
            navigate("/");
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