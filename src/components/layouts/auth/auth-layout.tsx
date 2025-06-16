import {Component, createEffect, createSignal, ParentProps, useContext} from "solid-js";
import {useNavigate} from "@solidjs/router";
import {AuthContext} from "~/context/AuthContextProvider";
import FetchUserProfile from "~/utils/FetchUserProfile";
import FetchProfileAvatarImage from "~/utils/ProfileAvatar";

type PROPS = ParentProps

const AuthLayout: Component<PROPS> = props => {
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
    return props.children;
};

export default AuthLayout;