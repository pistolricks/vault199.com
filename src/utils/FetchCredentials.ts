import {LoginUrl, SignupUrl} from '~/constants/UrlConstants';
import {CredentialError} from './CredentialValidator';

export default async function FetchCredentials(
  isLogin: boolean,
  username: string,
  password: string
): Promise<string> {
  var success: string;
  const credentialUrl = isLogin ? LoginUrl : SignupUrl;
  await fetchData(credentialUrl, username, password).then(
    (responseData) => (success = responseData)
  );
  return success;
}

const fetchData = async (url: string, username: string, password: string) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      return '';
    } else {
      if (data.error) {
        var errMsg: string = data.error as string;
        if (errMsg.includes('No username exists with the one provided')) {
          return CredentialError.nonExistentUsernameError;
        }
        if (errMsg.includes('User already exists!')) {
          return CredentialError.usernameExistsError;
        }
      }
      return 'Something went wrong';
    }
  } catch (err) {
    console.log(err);
  }
};
