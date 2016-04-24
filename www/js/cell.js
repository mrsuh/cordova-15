var Cell = function (index, x, y) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.element = document.getElementById('cell_' + index);
    this.onclick();
    this.setPlace(x, y);
};

Cell.prototype.setPlace = function () {
    this.element.style.top = ((this.x - 1) * 25) + '%';
    this.element.style.left = ((this.y - 1) * 25) + '%';
    this.element.setAttribute('data-x', this.x);
    this.element.setAttribute('data-y', this.y);
};

Cell.prototype.replace = function(x,y){
    if (this.x === x && this.y === y) {
        return false;
    }

    step++;
    step_element.innerHTML = step;
    field[this.x][this.y] = null;
    this.x = x;
    this.y = y;
    this.setPlace(x, y);

    field[x][y] = this;

    this.isDone();
};

Cell.prototype.isDone = function () {
    var index = 1;
    for (var x = 1; x <= 4; x++) {
        for (var y = 1; y <= 4; y++) {
            var cell = field[x][y];

            if (null !== cell && cell.index == index) {
                if (index == 15) {
                    alert('DONE!');
                }
            } else {
                return false;
            }
            index++;
        }
    }
};

Cell.prototype.onclick = function()
{
    this.element.onclick = function(e){

        var element = e.target;
        if(e.target.nodeName !== 'DIV'){
            element = e.target.parentNode;
        }

        var xx = element.getAttribute('data-x');
        var yy = element.getAttribute('data-y');
        var cell = field[xx][yy];

        if (null === cell) {
            return false;
        }

        var coord_x = cell.x;
        var coord_y = cell.y;

        switch (true) {
            case cell.x + 1 <= 4 && null === field[cell.x + 1][cell.y]:
                coord_x = cell.x + 1;
                coord_y = cell.y;
                break;
            case cell.x - 1 > 0 && null === field[cell.x - 1][cell.y]:
                coord_x = cell.x - 1;
                coord_y = cell.y;
                break;
            case cell.y + 1 <= 4 && null === field[cell.x][cell.y + 1]:
                coord_x = cell.x;
                coord_y = cell.y + 1;
                break;
            case cell.y - 1 > 0 && null === field[cell.x][cell.y - 1]:
                coord_x = cell.x;
                coord_y = cell.y - 1;
                break;
        }

        cell.replace(coord_x, coord_y);

    }.bind(this);
};
