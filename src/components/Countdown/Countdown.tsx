import React, { useEffect, useState } from 'react';
import { CountdownBlock } from "./CountdownBlock";
import { _Countdown } from "./Countdown.styles";


export interface ICountdown {
    end: Date;
}

const DAYS = 86400;
const HOURS = 3600;
const MINUTES = 60;


export const Countdown = (props: ICountdown) => {
    const { end } = props;

    // Calculate duration from end date
    const now = new Date();
    const _duration = Math.round((end.getTime() - now.getTime()) / 1000);
    const finished = _duration <= 0;

    // init
    const [ duration, setDuration ] = useState(finished ? 0 : _duration);
    const [ days, setDays ]         = useState(0);
    const [ hours, setHours ]       = useState(0);
    const [ minutes, setMinutes ]   = useState(0);
    const [ seconds, setSeconds ]   = useState(0);
    const [ stopped, setStopped ]   = useState(finished ? true : false);


    // Start interval
    useEffect(() => {
        let interval: NodeJS.Timer;

        if(!stopped) {
            if (duration > 0) {
                interval = setInterval(() => {
                    setDuration(duration => duration - 1);
                }, 1000);
            } else {
                setStopped(true);
            }
        }
        

        return () => {
            clearInterval(interval);
        }
    }, [duration]);


    // Calculate days, hours... when duration changes
    useEffect(() => {
        // Get days
        const restDays = duration % DAYS;
        const _days = (duration - restDays) / DAYS;

        // Get hours
        const restHours = restDays % HOURS;
        const _hours = (restDays - restHours) / HOURS;

        // Get minutes
        const restMinutes = restHours % MINUTES;
        const _minutes = (restHours - restMinutes) / MINUTES;

        // Get seconds
        const _seconds = restMinutes;

        setDays(_days);
        setHours(_hours);
        setMinutes(_minutes);
        setSeconds(_seconds);

        return () => {}
    }, [duration]);


    return (
        <_Countdown>
            <CountdownBlock label='days' value={days} />
            <CountdownBlock label='hours' value={hours} />
            <CountdownBlock label='min' value={minutes} />
            <CountdownBlock label='sec' value={seconds} />
        </_Countdown>
    );
}