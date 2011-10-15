//! Superfluidity.debug.js
//

(function($) {

Type.registerNamespace('Superfluidity');

////////////////////////////////////////////////////////////////////////////////
// Superfluidity.KeyCodes

Superfluidity.KeyCodes = function() { 
    /// <field name="backspace" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="tab" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="enter" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="shift" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="ctrl" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="alt" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="pause_break" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="caps_lock" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="escape" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="space" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="page_up" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="page_down" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="end" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="home" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="left_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="up_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="right_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="down_arrow" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="insert" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="delete_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d0" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d1" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d2" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d3" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d4" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d5" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d6" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d7" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d8" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d9" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="a" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="b" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="c" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="d" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="e" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="g" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="h" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="i" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="j" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="k" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="l" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="m" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="n" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="o" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="p" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="q" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="r" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="s" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="t" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="u" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="v" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="w" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="x" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="y" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="z" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="left_window_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="right_window_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="select_key" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_0" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_1" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_2" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_3" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_4" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_5" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_6" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_7" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_8" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="numpad_9" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="multiply" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="add" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="subtract" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="decimal_point" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="divide" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f1" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f2" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f3" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f4" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f5" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f6" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f7" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f8" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f9" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f10" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f11" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="f12" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="num_lock" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="scroll_lock" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="semi_colon" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="equal_sign" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="comma" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="dash" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="period" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="forward_slash" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="grave_accent" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="open_bracket" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="back_slash" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="close_braket" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="single_quote" type="Number" integer="true" static="true">
    /// </field>
};
Superfluidity.KeyCodes.prototype = {
    backspace: 8, 
    tab: 9, 
    enter: 13, 
    shift: 16, 
    ctrl: 17, 
    alt: 18, 
    pause_break: 19, 
    caps_lock: 20, 
    escape: 27, 
    space: 32, 
    page_up: 33, 
    page_down: 34, 
    end: 35, 
    home: 36, 
    left_arrow: 37, 
    up_arrow: 38, 
    right_arrow: 39, 
    down_arrow: 40, 
    insert: 45, 
    delete_key: 46, 
    d0: 48, 
    d1: 49, 
    d2: 50, 
    d3: 51, 
    d4: 52, 
    d5: 53, 
    d6: 54, 
    d7: 55, 
    d8: 56, 
    d9: 57, 
    a: 65, 
    b: 66, 
    c: 67, 
    d: 68, 
    e: 69, 
    f: 70, 
    g: 71, 
    h: 72, 
    i: 73, 
    j: 74, 
    k: 75, 
    l: 76, 
    m: 77, 
    n: 78, 
    o: 79, 
    p: 80, 
    q: 81, 
    r: 82, 
    s: 83, 
    t: 84, 
    u: 85, 
    v: 86, 
    w: 87, 
    x: 88, 
    y: 89, 
    z: 90, 
    left_window_key: 91, 
    right_window_key: 92, 
    select_key: 93, 
    numpad_0: 96, 
    numpad_1: 97, 
    numpad_2: 98, 
    numpad_3: 99, 
    numpad_4: 100, 
    numpad_5: 101, 
    numpad_6: 102, 
    numpad_7: 103, 
    numpad_8: 104, 
    numpad_9: 105, 
    multiply: 106, 
    add: 107, 
    subtract: 109, 
    decimal_point: 110, 
    divide: 111, 
    f1: 112, 
    f2: 113, 
    f3: 114, 
    f4: 115, 
    f5: 116, 
    f6: 117, 
    f7: 118, 
    f8: 119, 
    f9: 120, 
    f10: 121, 
    f11: 122, 
    f12: 123, 
    num_lock: 144, 
    scroll_lock: 145, 
    semi_colon: 186, 
    equal_sign: 187, 
    comma: 188, 
    dash: 189, 
    period: 190, 
    forward_slash: 191, 
    grave_accent: 192, 
    open_bracket: 219, 
    back_slash: 220, 
    close_braket: 221, 
    single_quote: 222
}
Superfluidity.KeyCodes.registerEnum('Superfluidity.KeyCodes', false);


////////////////////////////////////////////////////////////////////////////////
// Superfluidity._default

window._start = function Superfluidity__default$_start() {
    var player = new Superfluidity.Player(new Superfluidity.Vector(0, 0), 45);
    Superfluidity.World._initTiles();
    Superfluidity.Renderer.instance = new Superfluidity.Renderer();
    Superfluidity.Renderer.instance.renderWorld(player);
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Player

Superfluidity.Player = function Superfluidity_Player(position, directionAngle) {
    /// <param name="position" type="Superfluidity.Vector">
    /// </param>
    /// <param name="directionAngle" type="Number">
    /// </param>
    /// <field name="position" type="Superfluidity.Vector">
    /// </field>
    /// <field name="directionAngle" type="Number">
    /// </field>
    /// <field name="directionVector" type="Superfluidity.Vector">
    /// </field>
    this.directionAngle = directionAngle;
    var angleRadian = directionAngle * Math.PI / 180;
    this.position = position;
    this.directionVector = new Superfluidity.Vector(Math.cos(angleRadian), Math.sin(angleRadian));
    this._initMoveHandlers();
}
Superfluidity.Player.prototype = {
    position: null,
    directionAngle: 0,
    directionVector: null,
    
    _modifyPos: function Superfluidity_Player$_modifyPos(posX, posY) {
        /// <param name="posX" type="Number" integer="true">
        /// </param>
        /// <param name="posY" type="Number" integer="true">
        /// </param>
        this.position.x = posX;
        this.position.y = posY;
        Superfluidity.Renderer.instance.renderWorld(this);
    },
    
    _modifyDirection: function Superfluidity_Player$_modifyDirection(directionAngle) {
        /// <param name="directionAngle" type="Number">
        /// </param>
        this.directionAngle = directionAngle;
        var angleRadian = directionAngle * Math.PI / 180;
        this.directionVector.x = Math.cos(angleRadian);
        this.directionVector.y = Math.sin(angleRadian);
        Superfluidity.Renderer.instance.renderWorld(this);
    },
    
    _moveForward: function Superfluidity_Player$_moveForward() {
        this.position.x = this.position.x + this.directionVector.x * 0.1;
        this.position.y = this.position.y + this.directionVector.y * 0.1;
    },
    
    _moveBackward: function Superfluidity_Player$_moveBackward() {
        this.position.x = this.position.x - this.directionVector.x * 0.1;
        this.position.y = this.position.y - this.directionVector.y * 0.1;
    },
    
    _turnLeft: function Superfluidity_Player$_turnLeft() {
        this._modifyDirection(this.directionAngle + 3);
    },
    
    _turnRight: function Superfluidity_Player$_turnRight() {
        this._modifyDirection(this.directionAngle - 3);
    },
    
    _initMoveHandlers: function Superfluidity_Player$_initMoveHandlers() {
        $(document).keydown(null, ss.Delegate.create(this, function(e) {
            switch (e.which) {
                case Superfluidity.KeyCodes.up_arrow:
                case Superfluidity.KeyCodes.w:
                    this._moveForward();
                    break;
                case Superfluidity.KeyCodes.down_arrow:
                case Superfluidity.KeyCodes.s:
                    this._moveBackward();
                    break;
                case Superfluidity.KeyCodes.right_arrow:
                case Superfluidity.KeyCodes.d:
                    this._turnRight();
                    break;
                case Superfluidity.KeyCodes.left_arrow:
                case Superfluidity.KeyCodes.a:
                    this._turnLeft();
                    break;
            }
            Superfluidity.Renderer.instance.renderWorld(this);
        }));
    },
    
    canSee: function Superfluidity_Player$canSee(tile) {
        /// <param name="tile" type="Superfluidity.Tile">
        /// </param>
        /// <returns type="Boolean"></returns>
        return Math.abs(Superfluidity.Vector.smallerAngleBetween(Superfluidity.Vector.subtract(tile.getCorner1(), this.position), this.directionVector)) < 45 || Math.abs(Superfluidity.Vector.smallerAngleBetween(Superfluidity.Vector.subtract(tile.getCorner2(), this.position), this.directionVector)) < 45 || Math.abs(Superfluidity.Vector.smallerAngleBetween(Superfluidity.Vector.subtract(tile.getCorner3(), this.position), this.directionVector)) < 45 || Math.abs(Superfluidity.Vector.smallerAngleBetween(Superfluidity.Vector.subtract(tile.getCorner4(), this.position), this.directionVector)) < 45;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Renderer

Superfluidity.Renderer = function Superfluidity_Renderer() {
    /// <field name="instance" type="Superfluidity.Renderer" static="true">
    /// </field>
    /// <field name="_ctx" type="CanvasContext2D">
    /// </field>
    var can = document.getElementById('canvas');
    this._ctx = can.getContext('2d');
}
Superfluidity.Renderer.prototype = {
    _ctx: null,
    
    renderWorld: function Superfluidity_Renderer$renderWorld(player) {
        /// <param name="player" type="Superfluidity.Player">
        /// </param>
        this._clearCanvas();
        for (var i = 0; i < Superfluidity.World.tiles.length; i++) {
            var tile = Superfluidity.World.tiles[i];
            if (player.canSee(tile)) {
                var p1 = this.convertToViewportPoint(tile.getCorner1(), player);
                var p2 = this.convertToViewportPoint(tile.getCorner2(), player);
                var p3 = this.convertToViewportPoint(tile.getCorner3(), player);
                var p4 = this.convertToViewportPoint(tile.getCorner4(), player);
                this._drawSquare(p1, p2, p3, p4);
            }
        }
    },
    
    convertToViewportPoint: function Superfluidity_Renderer$convertToViewportPoint(point, player) {
        /// <param name="point" type="Superfluidity.Vector">
        /// </param>
        /// <param name="player" type="Superfluidity.Player">
        /// </param>
        /// <returns type="Superfluidity.Vector"></returns>
        var playerToPoint = new Superfluidity.Vector(point.x - player.position.x, point.y - player.position.y);
        var viewportX = this._calculateViewportX(playerToPoint, player);
        var viewportY = this._calculateViewportY(playerToPoint, player);
        return new Superfluidity.Vector(viewportX * 429, viewportY * 429);
    },
    
    _calculateViewportX: function Superfluidity_Renderer$_calculateViewportX(playerToPoint, player) {
        /// <param name="playerToPoint" type="Superfluidity.Vector">
        /// </param>
        /// <param name="player" type="Superfluidity.Player">
        /// </param>
        /// <returns type="Number"></returns>
        var cosGammaInv = (playerToPoint.abs() * player.directionVector.abs()) / Superfluidity.Vector.dot(playerToPoint, player.directionVector);
        var c = Math.sqrt(Math.abs((cosGammaInv * cosGammaInv) - 1));
        var angleDiff = Superfluidity.Vector.smallerAngleBetween(player.directionVector, playerToPoint);
        if (angleDiff > 0) {
            return 0.7 + c;
        }
        else {
            return 0.7 - c;
        }
    },
    
    _calculateViewportY: function Superfluidity_Renderer$_calculateViewportY(playerToPoint, player) {
        /// <param name="playerToPoint" type="Superfluidity.Vector">
        /// </param>
        /// <param name="player" type="Superfluidity.Player">
        /// </param>
        /// <returns type="Number"></returns>
        var groundDistance = playerToPoint.abs();
        var y = 1.4 - (((groundDistance - 1) / groundDistance) - 0.3);
        return y;
    },
    
    _drawSquare: function Superfluidity_Renderer$_drawSquare(p1, p2, p3, p4) {
        /// <param name="p1" type="Superfluidity.Vector">
        /// </param>
        /// <param name="p2" type="Superfluidity.Vector">
        /// </param>
        /// <param name="p3" type="Superfluidity.Vector">
        /// </param>
        /// <param name="p4" type="Superfluidity.Vector">
        /// </param>
        this._ctx.fillStyle = '#0f0';
        this._ctx.beginPath();
        this._ctx.moveTo(p1.x, p1.y);
        this._ctx.lineTo(p2.x, p2.y);
        this._ctx.lineTo(p3.x, p3.y);
        this._ctx.lineTo(p4.x, p4.y);
        this._ctx.lineTo(p1.x, p1.y);
        this._ctx.fill();
        this._ctx.closePath();
    },
    
    _clearCanvas: function Superfluidity_Renderer$_clearCanvas() {
        this._ctx.clearRect(0, 0, 600, 600);
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Szuperosztaly

Superfluidity.Szuperosztaly = function Superfluidity_Szuperosztaly() {
    /// <summary>
    /// TODO: Update summary.
    /// </summary>
    /// <field name="publikusMezoMertScriptSharpbanNincsPropertySajna" type="Number" integer="true">
    /// </field>
}
Superfluidity.Szuperosztaly.prototype = {
    publikusMezoMertScriptSharpbanNincsPropertySajna: 0,
    
    ezaztanszuperosztaly: function Superfluidity_Szuperosztaly$ezaztanszuperosztaly() {
        this.publikusMezoMertScriptSharpbanNincsPropertySajna = 42;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Tile

Superfluidity.Tile = function Superfluidity_Tile(x, y, width, height) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="width" type="Number">
    /// </param>
    /// <param name="height" type="Number">
    /// </param>
    /// <field name="_corner1" type="Superfluidity.Vector">
    /// </field>
    /// <field name="_corner2" type="Superfluidity.Vector">
    /// </field>
    /// <field name="_corner3" type="Superfluidity.Vector">
    /// </field>
    /// <field name="_corner4" type="Superfluidity.Vector">
    /// </field>
    this._corner1 = new Superfluidity.Vector(x, y);
    this._corner2 = new Superfluidity.Vector(x, y + height);
    this._corner3 = new Superfluidity.Vector(x + width, y + height);
    this._corner4 = new Superfluidity.Vector(x + width, y);
}
Superfluidity.Tile.prototype = {
    _corner1: null,
    _corner2: null,
    _corner3: null,
    _corner4: null,
    
    getCorner1: function Superfluidity_Tile$getCorner1() {
        /// <returns type="Superfluidity.Vector"></returns>
        return this._corner1;
    },
    
    getCorner2: function Superfluidity_Tile$getCorner2() {
        /// <returns type="Superfluidity.Vector"></returns>
        return this._corner2;
    },
    
    getCorner3: function Superfluidity_Tile$getCorner3() {
        /// <returns type="Superfluidity.Vector"></returns>
        return this._corner3;
    },
    
    getCorner4: function Superfluidity_Tile$getCorner4() {
        /// <returns type="Superfluidity.Vector"></returns>
        return this._corner4;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Vector

Superfluidity.Vector = function Superfluidity_Vector(x, y) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <field name="x" type="Number">
    /// </field>
    /// <field name="y" type="Number">
    /// </field>
    this.x = x;
    this.y = y;
}
Superfluidity.Vector.dot = function Superfluidity_Vector$dot(v1, v2) {
    /// <param name="v1" type="Superfluidity.Vector">
    /// </param>
    /// <param name="v2" type="Superfluidity.Vector">
    /// </param>
    /// <returns type="Number"></returns>
    return v1.x * v2.x + v1.y * v2.y;
}
Superfluidity.Vector.smallerAngleBetween = function Superfluidity_Vector$smallerAngleBetween(v1, v2) {
    /// <param name="v1" type="Superfluidity.Vector">
    /// </param>
    /// <param name="v2" type="Superfluidity.Vector">
    /// </param>
    /// <returns type="Number"></returns>
    var diff = v1.angle() - v2.angle();
    if (diff < -180) {
        return diff + 360;
    }
    else if (diff > 180) {
        return diff - 360;
    }
    else {
        return diff;
    }
}
Superfluidity.Vector.subtract = function Superfluidity_Vector$subtract(v1, v2) {
    /// <param name="v1" type="Superfluidity.Vector">
    /// </param>
    /// <param name="v2" type="Superfluidity.Vector">
    /// </param>
    /// <returns type="Superfluidity.Vector"></returns>
    return new Superfluidity.Vector(v1.x - v2.x, v1.y - v2.y);
}
Superfluidity.Vector.prototype = {
    x: 0,
    y: 0,
    
    abs: function Superfluidity_Vector$abs() {
        /// <returns type="Number"></returns>
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    
    angle: function Superfluidity_Vector$angle() {
        /// <returns type="Number"></returns>
        var scale = 45 / Math.atan(1);
        var angle = (scale * Math.atan2(this.y, this.x));
        if (angle >= 0) {
            return angle;
        }
        return 360 + angle;
    },
    
    alert: function Superfluidity_Vector$alert(name) {
        /// <param name="name" type="String">
        /// </param>
        alert('A ' + name + ' vektor: ' + this.x + ', ' + this.y);
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.World

Superfluidity.World = function Superfluidity_World() {
    /// <field name="tiles" type="Array" elementType="Tile" static="true">
    /// </field>
}
Superfluidity.World._initTiles = function Superfluidity_World$_initTiles() {
    var flip = true;
    var cnt = 0;
    Superfluidity.World.tiles = new Array(45);
    for (var i = -10; i < 10; i++) {
        for (var j = -10; j < 9; j++) {
            if (flip) {
                var tile = new Superfluidity.Tile(i, j, 1, 1);
                Superfluidity.World.tiles[cnt++] = tile;
            }
            flip = !flip;
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Class1

Superfluidity.Class1 = function Superfluidity_Class1() {
}


Superfluidity.Player.registerClass('Superfluidity.Player');
Superfluidity.Renderer.registerClass('Superfluidity.Renderer');
Superfluidity.Szuperosztaly.registerClass('Superfluidity.Szuperosztaly');
Superfluidity.Tile.registerClass('Superfluidity.Tile');
Superfluidity.Vector.registerClass('Superfluidity.Vector');
Superfluidity.World.registerClass('Superfluidity.World');
Superfluidity.Class1.registerClass('Superfluidity.Class1');
(function () {
    $(function() {
        _start();
    });
})();
Superfluidity.Renderer.instance = null;
Superfluidity.World.tiles = null;
})(jQuery);

//! This script was generated using Script# v0.7.3.0
