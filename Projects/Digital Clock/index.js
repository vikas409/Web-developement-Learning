function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();
    const ampm = hours >=12 ? "PM" : "AM";
    hours = hours%12;
    hours = hours ? hours :12;

}