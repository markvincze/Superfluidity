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
    var game = new Superfluidity.Game();
    game.start();
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Game

Superfluidity.Game = function Superfluidity_Game() {
    /// <field name="map" type="Superfluidity.Map">
    /// </field>
    /// <field name="player" type="Superfluidity.Player">
    /// </field>
    /// <field name="_renderer" type="Superfluidity.Renderer">
    /// </field>
    this.map = new Superfluidity.Map();
    this._renderer = new Superfluidity.Renderer(this);
    this.player = new Superfluidity.Player(5, 7, 1);
}
Superfluidity.Game.prototype = {
    map: null,
    player: null,
    _renderer: null,
    
    start: function Superfluidity_Game$start() {
        this._renderer._drawMinimap();
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Map

Superfluidity.Map = function Superfluidity_Map() {
    /// <field name="tiles" type="Array" elementType="Array">
    /// </field>
    this.tiles = [ [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1 ], [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ] ];
}
Superfluidity.Map.prototype = {
    
    getWidth: function Superfluidity_Map$getWidth() {
        /// <returns type="Number" integer="true"></returns>
        return this.tiles[0].length;
    },
    
    getHeight: function Superfluidity_Map$getHeight() {
        /// <returns type="Number" integer="true"></returns>
        return this.tiles.length;
    }
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Player

Superfluidity.Player = function Superfluidity_Player(x, y, dir) {
    /// <param name="x" type="Number">
    /// </param>
    /// <param name="y" type="Number">
    /// </param>
    /// <param name="dir" type="Number">
    /// </param>
    /// <field name="x" type="Number">
    /// </field>
    /// <field name="y" type="Number">
    /// </field>
    /// <field name="direction" type="Number">
    /// </field>
    this.x = x;
    this.y = y;
    this.direction = dir;
}
Superfluidity.Player.prototype = {
    x: 0,
    y: 0,
    direction: 0
}


////////////////////////////////////////////////////////////////////////////////
// Superfluidity.Renderer

Superfluidity.Renderer = function Superfluidity_Renderer(game) {
    /// <param name="game" type="Superfluidity.Game">
    /// </param>
    /// <field name="_minimapBlockSize" type="Number" integer="true" static="true">
    /// </field>
    /// <field name="_ctx" type="CanvasContext2D">
    /// </field>
    /// <field name="_minimapCtx" type="CanvasContext2D">
    /// </field>
    /// <field name="_minimapCanvas" type="Object" domElement="true">
    /// </field>
    /// <field name="_game" type="Superfluidity.Game">
    /// </field>
    this._game = game;
    var can = document.getElementById('canvas');
    this._ctx = can.getContext('2d');
    this._initializeMinimap();
}
Superfluidity.Renderer.prototype = {
    _ctx: null,
    _minimapCtx: null,
    _minimapCanvas: null,
    _game: null,
    
    _initializeMinimap: function Superfluidity_Renderer$_initializeMinimap() {
        this._minimapCanvas = document.getElementById('minimapCanvas');
        this._minimapCanvas.width = this._game.map.getWidth() * 10;
        this._minimapCanvas.height = this._game.map.getHeight() * 10;
        this._minimapCanvas.style.width = this._minimapCanvas.width.toString() + 'px';
        this._minimapCanvas.style.height = this._minimapCanvas.height.toString() + 'px';
        this._minimapCtx = this._minimapCanvas.getContext('2d');
    },
    
    _drawMinimap: function Superfluidity_Renderer$_drawMinimap() {
        this._clearMinimap();
        this._drawMapOnMinimap();
        this._drawPlayerOnMinimap();
    },
    
    _clearMinimap: function Superfluidity_Renderer$_clearMinimap() {
        this._minimapCtx.clearRect(0, 0, this._minimapCanvas.width, this._minimapCanvas.height);
    },
    
    _drawMapOnMinimap: function Superfluidity_Renderer$_drawMapOnMinimap() {
        for (var y = 0; y < this._game.map.getHeight(); y++) {
            for (var x = 0; x < this._game.map.getWidth(); x++) {
                var tile = this._game.map.tiles[y][x];
                if (tile > 0) {
                    this._minimapCtx.fillStyle = this._getTileFillStyle(tile);
                    this._minimapCtx.fillRect(x * 10, y * 10, 10, 10);
                }
            }
        }
    },
    
    _drawPlayerOnMinimap: function Superfluidity_Renderer$_drawPlayerOnMinimap() {
        var player = this._game.player;
        this._minimapCtx.fillStyle = 'rgb(10, 10, 10)';
        this._minimapCtx.fillRect(player.x * 10 - 2, player.y * 10 - 2, 4, 4);
        this._minimapCtx.beginPath();
        this._minimapCtx.moveTo(player.x * 10, player.y * 10);
        this._minimapCtx.lineTo((player.x + Math.cos(player.direction) * 3) * 10, (player.y + Math.sin(player.direction) * 3) * 10);
        this._minimapCtx.closePath();
        this._minimapCtx.stroke();
    },
    
    _getTileFillStyle: function Superfluidity_Renderer$_getTileFillStyle(tile) {
        /// <param name="tile" type="Number" integer="true">
        /// </param>
        /// <returns type="Object"></returns>
        switch (tile) {
            case 1:
                return 'rgb(100, 100, 100)';
            case 2:
                return 'rgb(200, 200, 200)';
            default:
                return 'ak\ufffdrmi';
        }
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


Superfluidity.Game.registerClass('Superfluidity.Game');
Superfluidity.Map.registerClass('Superfluidity.Map');
Superfluidity.Player.registerClass('Superfluidity.Player');
Superfluidity.Renderer.registerClass('Superfluidity.Renderer');
Superfluidity.Vector.registerClass('Superfluidity.Vector');
(function () {
    $(function() {
        _start();
    });
})();
Superfluidity.Renderer._minimapBlockSize = 10;
})(jQuery);

//! This script was generated using Script# v0.7.3.0
