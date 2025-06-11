import {Accessor, createContext, createSignal, JSX, Setter, useContext} from "solid-js";
import {Contact} from "~/components/lists/contact-list";


type AppType = {
    getContact: Accessor<Contact>
    setContact: Setter<Contact>

}
export const AppContext = createContext<AppType>();

export function AppProvider(props: { children: JSX.Element }) {
    const [getContact, setContact] = createSignal<Contact>();

    return (
        <AppContext.Provider value={{
            getContact,
            setContact
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() { return useContext(AppContext)! }