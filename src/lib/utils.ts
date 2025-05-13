import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const capitalize = (str: string) =>
    `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;