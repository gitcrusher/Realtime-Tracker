const socket = io(); // by calling io a connection request goes to the socket.io

if(navigator.geolocation){
        navigator.geolocation.watchPosition(
            (position)=>{
            const {latitude,longitude} = position.coords;
            socket.emit(send-location,{latitude, longitude});
        },
        (error)=>{
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}