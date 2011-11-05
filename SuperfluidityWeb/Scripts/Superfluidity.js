// Superfluidity.js
(function($){
Type.registerNamespace('Superfluidity');Superfluidity.KeyCodes=function(){};Superfluidity.KeyCodes.prototype = {backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pause_break:19,caps_lock:20,escape:27,space:32,page_up:33,page_down:34,end:35,home:36,left_arrow:37,up_arrow:38,right_arrow:39,down_arrow:40,insert:45,delete_key:46,d0:48,d1:49,d2:50,d3:51,d4:52,d5:53,d6:54,d7:55,d8:56,d9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,left_window_key:91,right_window_key:92,select_key:93,numpad_0:96,numpad_1:97,numpad_2:98,numpad_3:99,numpad_4:100,numpad_5:101,numpad_6:102,numpad_7:103,numpad_8:104,numpad_9:105,multiply:106,add:107,subtract:109,decimal_point:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,num_lock:144,scroll_lock:145,semi_colon:186,equal_sign:187,comma:188,dash:189,period:190,forward_slash:191,grave_accent:192,open_bracket:219,back_slash:220,close_braket:221,single_quote:222}
Superfluidity.KeyCodes.registerEnum('Superfluidity.KeyCodes',false);window.$0=function(){var $0=new Superfluidity.Game();$0.start();}
Superfluidity.Game=function(){this.map=new Superfluidity.Map();this.$0=new Superfluidity.Renderer(this);this.player=new Superfluidity.Player(5,7,1);}
Superfluidity.Game.prototype={map:null,player:null,$0:null,start:function(){this.$0.$6();}}
Superfluidity.Map=function(){this.tiles=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];}
Superfluidity.Map.prototype={getWidth:function(){return this.tiles[0].length;},getHeight:function(){return this.tiles.length;}}
Superfluidity.Player=function(x,y,dir){this.x=x;this.y=y;this.direction=dir;}
Superfluidity.Player.prototype={x:0,y:0,direction:0}
Superfluidity.Renderer=function(game){this.$4=game;var $0=document.getElementById('canvas');this.$1=$0.getContext('2d');this.$5();}
Superfluidity.Renderer.prototype={$1:null,$2:null,$3:null,$4:null,$5:function(){this.$3=document.getElementById('minimapCanvas');this.$3.width=this.$4.map.getWidth()*10;this.$3.height=this.$4.map.getHeight()*10;this.$3.style.width=this.$3.width.toString()+'px';this.$3.style.height=this.$3.height.toString()+'px';this.$2=this.$3.getContext('2d');},$6:function(){this.$7();this.$8();this.$9();},$7:function(){this.$2.clearRect(0,0,this.$3.width,this.$3.height);},$8:function(){for(var $0=0;$0<this.$4.map.getHeight();$0++){for(var $1=0;$1<this.$4.map.getWidth();$1++){var $2=this.$4.map.tiles[$0][$1];if($2>0){this.$2.fillStyle=this.$A($2);this.$2.fillRect($1*10,$0*10,10,10);}}}},$9:function(){var $0=this.$4.player;this.$2.fillStyle='rgb(10, 10, 10)';this.$2.fillRect($0.x*10-2,$0.y*10-2,4,4);this.$2.beginPath();this.$2.moveTo($0.x*10,$0.y*10);this.$2.lineTo(($0.x+Math.cos($0.direction)*3)*10,($0.y+Math.sin($0.direction)*3)*10);this.$2.closePath();this.$2.stroke();},$A:function($p0){switch($p0){case 1:return 'rgb(100, 100, 100)';case 2:return 'rgb(200, 200, 200)';default:return 'ak\ufffdrmi';}}}
Superfluidity.Vector=function(x,y){this.x=x;this.y=y;}
Superfluidity.Vector.dot=function(v1,v2){return v1.x*v2.x+v1.y*v2.y;}
Superfluidity.Vector.smallerAngleBetween=function(v1,v2){var $0=v1.angle()-v2.angle();if($0<-180){return $0+360;}else if($0>180){return $0-360;}else{return $0;}}
Superfluidity.Vector.subtract=function(v1,v2){return new Superfluidity.Vector(v1.x-v2.x,v1.y-v2.y);}
Superfluidity.Vector.prototype={x:0,y:0,abs:function(){return Math.sqrt(this.x*this.x+this.y*this.y);},angle:function(){var $0=45/Math.atan(1);var $1=($0*Math.atan2(this.y,this.x));if($1>=0){return $1;}return 360+$1;},alert:function(name){alert('A '+name+' vektor: '+this.x+', '+this.y);}}
Superfluidity.Game.registerClass('Superfluidity.Game');Superfluidity.Map.registerClass('Superfluidity.Map');Superfluidity.Player.registerClass('Superfluidity.Player');Superfluidity.Renderer.registerClass('Superfluidity.Renderer');Superfluidity.Vector.registerClass('Superfluidity.Vector');(function(){$(function(){
$0();});})();
})(jQuery);// This script was generated using Script# v0.7.3.0
