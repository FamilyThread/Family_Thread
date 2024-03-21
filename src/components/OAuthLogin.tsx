import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";

// TODO: Note: I did suppress to ignore an error for jwtDecode. Look into it later.
export function OAuthLogin() {
    return (
        <>
            <GoogleOAuthProvider clientId='245334724280-b6df2ra63vbbbpftib4hgcgmc8r18dpr.apps.googleusercontent.com'>
                <GoogleLogin onSuccess={(credentialResponse) => {
                    // @ts-ignore
                    const credentialResponseDecoded= jwtDecode(credentialResponse.credential);
                    console.log(credentialResponseDecoded);
                }} onError={() => {
                    console.log('OAuthLogin Failed');
                }}/>
            </GoogleOAuthProvider>
            {/*<div id="signin">*/}
            {/*    <GoogleLogin onSuccess={}*/}
            {/*</div>*/}
        </>
    );
}
