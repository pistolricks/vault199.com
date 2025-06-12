import {createEffect, createSignal, JSXElement, Show, useContext,} from 'solid-js';
import Navbar from '~/components/chat/Navbar';
import FetchUserProfile from '~/utils/FetchUserProfile';
import {useNavigate} from '@solidjs/router';
import FetchProfileAvatarImage from '~/utils/ProfileAvatar';
import {AuthContext} from '~/context/AuthContextProvider';

export default function Profile(): JSXElement {
    const navigate = useNavigate();
    const [username, setUsername] = createSignal<string>();
    const [createdAt, setCreatedAt] = createSignal<string>();
    const [imgSrc, setImgSrc] = createSignal<string>('');
    const {storage} = useContext(AuthContext);

    createEffect(() => {
        if (storage().getItem('authentication') == null) {
            navigate('/login', {replace: true});
            return;
        }
    });

    FetchUserProfile().then((profile) => {
        if (profile.error != '') {
            console.log("PE", profile)
            navigate('/login', {replace: true, state: {err: profile.error}});
            return;
        }

        console.log("profile", profile)
        setUsername(profile.username);
        setCreatedAt(new Date(profile.createdAt).toLocaleDateString());
        setImgSrc(FetchProfileAvatarImage(username()));
    });

    return (
        <div>
            <Navbar/>
            <div class='flex items-center justify-center px-6 py-14 h-[75vh]'>
                <Show
                    when={imgSrc() != '' && username() != ''}
                    fallback={
                        <div>
                            <button
                                type='button'
                                class='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500'
                                disabled
                            >
                                Processing...
                            </button>
                        </div>
                    }
                >
                    <div
                        class='min-w-32 min-h-52 flex flex-col items-center border bg-white px-6 py-6 shadow-md rounded-3xl'>
                        <img loading='lazy' src={imgSrc()} alt='profile avatar'/>
                        <div class='mb-8 mt-8 flex flex-col '>
                            <p class='self-start px-4 py-1 text-xl whitespace-nowrap dark:text-white'>
                                {username()}
                            </p>
                            <p class='self-start px-4 py-1 text-xl whitespace-nowrap dark:text-white'>
                                {createdAt()}
                            </p>
                        </div>
                    </div>
                </Show>
            </div>
        </div>
    );
}
