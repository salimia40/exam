function q(n, people) {
    var team = people
    var room = []
    // enter
    team.forEach(person => {
        room.forEach(element => {
            console.log(`${person}:salam ${element}!`)
        });
        room.push(person)
    });
    // leave
    while(room.length > 0) {
        var person = room.shift()
        console.log(`${person}:khodafez bacheha!`)
        room.forEach(element => {
            console.log(`${element}:khodafez ${person}!`)
        });
    }
}

q(4, ["ali" ,"hana", "jafar" ,"tizi"])

