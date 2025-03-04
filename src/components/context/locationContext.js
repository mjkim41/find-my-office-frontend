import {createContext} from "react";

const locationContext = createContext({
    latitude: 0,
    longitude: 0,
    message: ''
});

export default locationContext;