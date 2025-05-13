import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function handleInitials(string?: string) {
    if (!string) return;
    return string?.split(' ')?.map((sp) => sp[0])
}


export function handleSplit(string?: string) {
    if (!string) return;
    return string?.trim().split(' ')
}

export function handleCamelCase(arr?: string[]) {
    if (!arr) return;

    let newArr = [];

    for (let i = 0; i < arr?.length; i++) {
        let ns = arr[i]?.trim();
        let str = ns?.[0]?.toUpperCase() + ns?.substring(1);

        newArr.push(str);
    }

    return newArr.join('');
}

export function handleUserName(string?: string) {
    if(!string) return;
    let split = handleSplit(string);
    let camelCase = handleCamelCase(split);
    return "@" + camelCase;
}

export function capitalizeFirstLetter(str?: string) {
    if(!str) return;
    return str[0].toUpperCase() + str.slice(1);
}