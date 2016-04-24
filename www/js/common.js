var step_element = document.getElementById('step');
var field = {};
var step = 0;

var init = function () {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    field = {};
    step = 0;
    step_element.innerHTML = 0;
    for (var x = 1; x <= 4; x++) {
        field[x] = {};
        for (var y = 1; y <= 4; y++) {

            var rand = Math.floor(Math.random() * items.length);

            if (items[rand] === 16) {
                field[x][y] = null;
            } else {
                field[x][y] = new Cell(items[rand], x, y);
            }

            items.splice(rand, 1);
        }
    }
};

init();

document.getElementById('reload').onclick = init;
