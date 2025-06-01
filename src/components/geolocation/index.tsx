import {Component, createMemo, createSignal, onMount, Setter} from "solid-js";



type PROPS = {
    setPosition: Setter<any>

}

const GeolocationComponent: Component<PROPS> = props => {

    const [getLatitude, setLatitude] = createSignal(null);
    const [getLongitude, setLongitude] = createSignal(null);

// get latitude and longitude
    const getGeolocation = async() => {
        if(navigator.geolocation)  {
            navigator.geolocation.getCurrentPosition((position) => {
                    setLatitude( position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                () => {
                    return ('Unable to retrieve your location');
                });
        } else {
            return ('Geolocation is not supported by your browser')
        }

        return {
            latitude: await getLatitude(),
            longitude: await getLongitude()
        }
    }

   onMount(async() => {
      let gps = await getGeolocation()
       props.setPosition(gps)
    })


    const gps = createMemo(() => {
        return {
            latitude: getLatitude(),
            longitude: getLongitude()
        }
    })

    return <div></div>
};

export default GeolocationComponent;