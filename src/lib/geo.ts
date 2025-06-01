import {Component, createMemo, createSignal, onMount, Setter} from "solid-js";


export function start() {
    let coords: GeolocationPosition = null;

    if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition(
            position => {
                console.log(position);
                document.querySelector("output").textContent = `
                Lat: ${position.coords.latitude} Long: ${position.coords.longitude}
                `;

                coords = position;
            },
            error => {
                console.log(error);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 60000
            },

        )
    }
    return coords;
}


export async function getGps(setPosition?: Setter<GeolocationCoordinates>) {

    let coords = null;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
                setPosition(() => position.coords);
                coords = () => position.coords;
            },
            () => {
                return ('Unable to retrieve your location');
            });
    } else {
        return ('Geolocation is not supported by your browser')
    }
    return coords;
}