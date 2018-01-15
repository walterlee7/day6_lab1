
for (var i = 1; i < 101; ++i) {
    var friend = ['Blue', 'Black', 'Red', 'Yellow', 'Green'];
    var weapon = ['bottle', 'knuckles', 'fist', 'boomerang', 'bomb', 'slingshot', 'bat', 'knife', 'wand', 'club', 'sword', 'shuriken', 'spear', 'whip', 'axe', 'katana', 'kunai', 'nunchuku', 'bo', 'sai'];
    var locations = ['sky', 'ocean', 'mountain', 'desert', 'forest', 'space', 'tundra', 'plains', 'hills', 'grassland'];
    var h3 = document.createElement('h3');

    h3.innerText = 'Accusation ' + i;
    document.body.appendChild(h3);

    function randomFriend() {
        return friend[Math.floor(Math.random()*friend.length)];
    }

    function randomWeapon() {
        return weapon[Math.floor(Math.random()*weapon.length)];
    }

    function randomLocations() {
        return locations[Math.floor(Math.random()*locations.length)];
    }
    
    h3.addEventListener('click', function(){
        alert('I accuse ' + randomFriend() + ', with the ' + randomWeapon() + ' in the ' + randomLocations() + '!');
    });
};



