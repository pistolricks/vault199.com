import {createSignal, JSXElement, onMount, Show, useContext} from 'solid-js';
import ValidateCredentials from '~/utils/CredentialValidator';
import {A, useLocation, useNavigate} from '@solidjs/router';
import FetchCredentials from '~/utils/FetchCredentials';
import {AuthContext} from '~/context/AuthContextProvider';
import logo from "~/static/logos/vault-tec.png";

type LoginCardProps = {
  isLogin: boolean;
};

type LoginStateError = {
  err: string;
};

export default function LoginCard({ isLogin }: LoginCardProps): JSXElement {
  const [username, setUsername] = createSignal<string>('');
  const [password, setPassword] = createSignal<string>('');
  const [validationError, setValidationError] = createSignal<string>('');
  const locationState = useLocation().state as LoginStateError;
  const { storage } = useContext(AuthContext);
  const navigate = useNavigate();

  onMount(() => {
    if (locationState?.err?.length > 0) {
      setValidationError(locationState.err);
    } else if (storage().getItem('authentication') != null) {
      navigate('/');
      return;
    }
  });


  const onUsernameChangeHandler = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const onPasswordChangeHandler = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    var credentialValidation: string = ValidateCredentials(
      username(),
      password()
    );
    if (credentialValidation != '') {
      setValidationError(credentialValidation);
    } else {
      const getCred = await FetchCredentials(isLogin, username(), password());
      if (getCred == '') {
        window.localStorage.setItem('authentication', 'true');
        navigate('/dashboard');
        return;
      } else {
        setValidationError(getCred);
      }
    }
  };

  return (
    <div class='flex items-start justify-center absolute top-24 w-full'>
      <div class='min-w-[90%] sm:min-w-96 flex-col border bg-transparent px-6 py-4 shadow-md rounded-3xl '>
        <div class='mb-8 flex flex-col items-center justify-center'>
          <img
            class='w-48 mb-2'
            src={logo}
            alt='Logo'
          />
        </div>
        <div class='flex flex-col text-sm rounded-md'>
          <input
            class='mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-cyan-500 '
            type='text'
            placeholder='Username'
            onChange={onUsernameChangeHandler}
          />
          <input
            class='border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-cyan-500'
            type='password'
            placeholder='Password'
            onChange={onPasswordChangeHandler}
          />
          <Show when={validationError() != ''}>
            <div class='rounded-md flex mt-3 max-w-lg'>
              <svg
                viewBox='0 0 24 24'
                class='text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3'
              >
                <path
                  fill='currentColor'
                  d='M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z'
                ></path>
              </svg>
              <span class='text-red-800'>{validationError()}</span>
            </div>
          </Show>
        </div>
        <button
          onClick={clickHandler}
          class='mt-5 w-full border p-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-[4px] hover:scale-105 hover:duration-300'
          type='submit'
        >
          Sign in
        </button>
        <Show when={isLogin}>
          <div class='mt-5 flex justify-end text-sm text-gray-600'>
            <A href='/register' activeClass='underlined'>
              Register
            </A>
          </div>
        </Show>
      </div>
    </div>
  );
}
