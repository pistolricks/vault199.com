import {Component, createEffect, createSignal, For, useContext} from "solid-js";
import {RouteSectionProps, useNavigate} from "@solidjs/router";
import RoomCard from '~/components/chat/RoomCard';
import Navbar from '~/components/chat/Navbar';
import CreateRoomCard from '~/components/chat/CreateRoomCard';
import ValidateRoomName from '~/utils/RoomnameValidator';
import {CreateRoom, FetchRooms, RoomResponse} from '~/utils/FetchRooms';
import {CredentialError} from '~/utils/CredentialValidator';
import {AuthContext} from '~/context/AuthContextProvider';


type PROPS = {}

const Dashboard: Component<RouteSectionProps> = props => {
    const navigate = useNavigate();
    const [roomName, setRoomName] = createSignal<string>('');
    const [roomCount, setRoomCount] = createSignal<RoomResponse[]>([]);
    const [roomErr, setRoomErr] = createSignal<string>('');
    const { storage } = useContext(AuthContext);

    createEffect(() => {
        if (storage().getItem('authentication') == null) {
            navigate('/login', { replace: true });
            return;
        }

        FetchRooms().then((rooms) => {
            if (rooms != undefined && rooms.length > 0) {
                if (rooms === CredentialError.unauthenticatedError) {
                    navigate('/login', { replace: true, state: { err: rooms } });
                    return;
                } else if (rooms === CredentialError.catchAllError) {
                    setRoomErr(rooms);
                } else {
                    setRoomCount(rooms);
                }
            }
        });
    });

    const createRoomChangeEvent = (
        e: Event & {
            currentTarget: HTMLInputElement;
            target: HTMLInputElement;
        }
    ) => {
        e.preventDefault();
        setRoomName(e.target.value);
    };

    const createRoomHandleClick = async () => {
        const roomNameValidation: string = ValidateRoomName(
            roomName(),
            roomCount()
        );
        if (roomNameValidation.length > 0) {
            setRoomErr(roomNameValidation);
        } else if (roomCount().length < 6) {
            const createCall = await CreateRoom(crypto.randomUUID(), roomName());
            if (createCall === CredentialError.unauthenticatedError) {
                navigate('/login', { replace: true, state: { err: createCall } });
                return;
            } else if (createCall === CredentialError.catchAllError) {
                setRoomErr(createCall);
            } else {
                setRoomCount((roomCount) => [...roomCount, createCall]);
                setRoomErr('');
            }
        }
    };


    return (
        <>
            <div>
                <Navbar />
                <CreateRoomCard
                    onChangeHandler={createRoomChangeEvent}
                    onClickHandler={createRoomHandleClick}
                    errorMsg={roomErr}
                />
                <div class='grid grid-cols-3 gap-8 px-8 py-8'>
                    <For each={roomCount()}>
                        {(room, index) => (
                            <RoomCard id={room?.id} imgSrc={room?.imgSrc} name={room?.name} />
                        )}
                    </For>
                </div>
            </div>
        </>
    );
};

export default Dashboard;