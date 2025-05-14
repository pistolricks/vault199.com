function realtimeClock(): void {
    const rtc: Date = new Date();
    let hours: number = rtc.getHours();
    const minutes: string = ("0" + rtc.getMinutes()).slice(-2);
    const seconds: string = ("0" + rtc.getSeconds()).slice(-2);
    const ampm: string = (hours < 12) ? "AM" : "PM";
    
    hours = (hours > 12) ? hours - 12 : hours;
    const hoursStr: string = ("0" + hours).slice(-2);
    
    const clockElement: HTMLElement | null = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerHTML = hoursStr + ":" + minutes + ":" + seconds + " " + ampm;
    }
    
    setTimeout(realtimeClock, 500);
}

function realTimeDate(): void {
    const dateToday: Date = new Date();
    const day: number = dateToday.getDate();
    const month: number = dateToday.getMonth();
    const year: number = dateToday.getFullYear();
    
    const dateElement: HTMLElement | null = document.getElementById('my_date');
    if (dateElement) {
        dateElement.innerHTML = day + "." + (month + 1) + "." + year;
    }
}

// Initialize clock and date
realtimeClock();
realTimeDate();