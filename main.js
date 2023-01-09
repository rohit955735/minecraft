var canvas = new fabric.Canvas('my_canvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_objects ="";
var block_image_objects = "";
function player_updates(){
    fabric.Image.fromURL("player.png",function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    block_image_objects=Img;
    block_image_objects.scaleToWidth(block_image_width);
    block_image_objects.scaleToHeight(block_image_height);
    block_image_objects.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_objects);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_pressed = e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true&&key_pressed=='80'){
        console.log("p+shiftkey pressed together");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("curent_width").innerHTML=block_image_width;
        document.getElementById("curent_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&key_pressed=='77'){
        console.log("m+shiftkey pressed together");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("curent_width").innerHTML=block_image_width;
        document.getElementById("curent_height").innerHTML=block_image_height;
    }
    if(key_pressed=='38'){
        Up();
        console.log("up");
    }
    if(key_pressed=='39'){
        right();
        console.log("right");
    }
    if(key_pressed=='37'){
        left();
        console.log("left");
    }
    if(key_pressed=='40'){
        down();
        console.log("down");
    }
    if(key_pressed=='87'){
        new_image("wall.jpg");
        console.log("w");
    }
    if(key_pressed=='71'){
        new_image("ground.png");
        console.log("g");
    }
    if(key_pressed=='76'){
        new_image("light_green.png");
        console.log("l");
    }
    if(key_pressed=='82'){
        new_image("roof.jpg");
        console.log("r");
    }
    if(key_pressed=='84'){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(key_pressed=='85'){
        new_image("unique.png");
        console.log("u");
    }
    if(key_pressed=='89'){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(key_pressed=='67'){
        new_image("cloud.jpg");
        console.log("c");
    }
    if(key_pressed=='68'){
        new_image("dark_green.png");
        console.log("d");
    }
}
function Up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image hieght="+block_image_height);
        console.log("when up arrow is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_objects);
        player_updates();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image hieght="+block_image_height);
        console.log("when down arrow is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_objects);
        player_updates();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when right arrow is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_objects);
        player_updates();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when left arrow is pressed,x="+player_x+",y="+player_y);
        canvas.remove(player_objects);
        player_updates();
    }
}