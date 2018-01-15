var friend = ['Blue', 'Black', 'Red', 'Yellow', 'Green'];
var weapon = ['bottle', 'knuckles', 'fist', 'boomerang', 'bomb', 'slingshot', 'bat', 'knife', 'wand', 'club', 'sword', 'shuriken', 'spear', 'whip', 'axe', 'katana', 'kunai', 'nunchuku', 'bo', 'sai'];
var locations = ['sky', 'ocean', 'mountain', 'desert', 'forest', 'space', 'tundra', 'plains', 'hills', 'grassland'];


for (var index = 1; index < 101; index++) {
    var h3 = document.createElement('h3');

    h3.innerText = 'Accusation ' + index;
    document.body.appendChild(h3);

    h3.addEventListener('click', accusation(index));
};

function accusation(index) {

    var friendName = friend[index % friend.length];
    var weaponName = weapon[index % weapon.length];
    var locationsName = locations[index % locations.length];

    return function () {
        alert('Accusation ' + index + ': I accuse ' + friendName +
            ', with the ' + weaponName + ' in the ' + locationsName + '!');
    }
}

