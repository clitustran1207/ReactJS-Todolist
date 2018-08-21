export const genId=()=>{
    var id = '';
    const possible = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
    for(var i = 0; i < 5; i++){
        id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
}

export let tasks = [
    {
        id: genId(),
        name: "Hit the gym",
        level: 2
    },
    {
        id: genId(),
        name: "Have an ice-cream at DQ",
        level: 0
    },
    {
        id: genId(),
        name: "Review English for bro",
        level: 1
    }
]
