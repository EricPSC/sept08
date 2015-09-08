var list_item = document.getElementsByTagName('ul')[0].children;

function add_nested_list_item(version, Int){
    list_item.innerHTML = document.write('<li>' + version + '</li>')
    alert (add_nested_list_item("1.5"));
}; 
/*function get_index(){
    for(var i = 0; i < game_list.length; i++){
        if (this == game_list[i]){
            alert (i);
            return i;
        }
    }
};

game_list[1].addEventListener('click', function(){
    get_index();
});*/


/*

// Function if they click new game
function newGame() {

    ngame=prompt("name");// ask for name of game

    if (ngame===null || ngame===''){ // if name of game is blank or canceled
    	return;// exit code
    }
    //else
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML + '<li onclick="getIndex(this)">'+ngame+"</li>";
    document.getElementsByTagName('ul')[0].innerHTML = document.getElementsByTagName('ul')[0].innerHTML + '<li onclick="li_state_normal(this)">'+ngame+"</li>";
    
};

// Function if 
function delparent(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
// Function if click on minus
function delparent(el){
    el.parentNode.parentNode.removeChild(el.parentNode);
}

function getIndex(node) {
function getIndex(node) { // when clicked on a li    
    var childs = node.parentNode.children; // creates an array of ul children   
    for (i = 0; i < childs.length; i++) { // loops the li index
        if (node == childs[i]) { // finds the index of the li clicked on           
           return me = childs[i]
        }
    }
}


function li_state_normal(el){    
getIndex(el);// returns var me as node clicked on
var my_parent=me.parentNode;
var str= me.innerHTML;
my_parent.innerHTML = my_parent.innerHTML.replace('<li onclick="li_state_normal(this)">' + me.innerHTML + '</li>', '<li class="li_active" onclick="li_state_minus(this)"><div>-</div>' + me.innerHTML + '</li>');

}

function li_state_minus(el){    
getIndex(el);// returns var me as node clicked on
var my_parent=me.parentNode;
var str= me.innerHTML.replace('<div>-</div>','');

my_parent.innerHTML = my_parent.innerHTML.replace('<li class="li_active" onclick="li_state_minus(this)"><div>-</div>'+ str + '</li>', '<li class="li_active li_open" onclick="li_state_open(this)">' + str + '</li>');


}

    var childs = node.parentNode.children;
   
    for (i = 0; i < childs.length; i++) {
function li_state_open(el){    
getIndex(el);// returns var me as node clicked on
var my_parent=me.parentNode;
var str= me.innerHTML;
my_parent.innerHTML = my_parent.innerHTML.replace('<li class="li_active li_open" onclick="li_state_open(this)">' + me.innerHTML + '</li>', '<li onclick="li_state_normal(this)">' + me.innerHTML + '</li>');

}

        if (node == childs[i]) {
            var liList =document.body.getElementsByTagName('ul')[0].children;
            
            if (liList[i].children.length == 0){


               
                    for (j = 0; j < childs.length; j++) {
                        liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
                        liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
                        liList[j].style.maxHeight = "52px";
                        liList[j].style.overflow = "hidden";
                    }

                        liList[i].innerHTML = liList[i].innerHTML + '<div onclick="delparent(this)"> - </div>';
//                     for (j = 0; j < childs.length; j++) {//resets all lis
//                         liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
//                         liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
//                         liList[j].style.maxHeight = "52px";
//                         liList[j].style.overflow = "hidden";
//                     }
//                         // adds minus
//                         liList[i].innerHTML = liList[i].innerHTML + '<div onclick="delparent(this)"> - </div>';
                
            }
            else{
                    if (liList[i].children.length > 1){
                   
                        for (j = 0; j < childs.length; j++) {
                            liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
                            liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
                            liList[j].style.maxHeight = "52px";
                            liList[j].style.overflow = "hidden";
                        }

                    }
                    else{

                        liList[i].innerHTML = liList[i].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
                        liList[i].style.maxHeight = "400px";
                        liList[i].style.overflow = "scroll";
                        liList[i].style.overflowX = "hidden";
                        liList[i].innerHTML = liList[i].innerHTML + "<br><hr>" + "<p>" + str1 + "</p>";
                    }
                }
        }
//             }
//             else{

//                 if (liList[i].innerHTML.indexOf('*</div>*') != -1{

//                             liList[i].innerHTML = liList[i].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
//                             liList[i].style.maxHeight = "400px";
//                             liList[i].style.overflow = "scroll";
//                             liList[i].style.overflowX = "hidden";
//                             liList[i].innerHTML = liList[i].innerHTML + "<br><hr>" + "<p>" + str1 + "</p>";
//                     }
//                 else{
               
//                     if (liList[i].innerHTML.indexOf('*</p>*') !=-1){// paragraph open
                           
//                                 for (j = 0; j < childs.length; j++) { // resets all lis
//                                     liList[j].innerHTML = liList[j].innerHTML.replace('<div onclick="delparent(this)"> - </div>', '');
//                                     liList[j].innerHTML = liList[j].innerHTML.replace('<br><hr>'+ "<p>" + "*" + "</p>", '');
//                                     liList[j].style.maxHeight = "52px";
//                                     liList[j].style.overflow = "hidden";
//                                 }

//                     }
//                 }
//             }
                    
//         }
//     }

// }

    }

}*/
/*
var list_items = document.getElementsByTagName('li');
var unordered_list = document.getElementsByTagName('ul');



function add_game(){
    var game_name = prompt('What new Game are we adding today');
    var new_item = document.createElement('li');
    new_item.innerText = game_name;
    unordered_list[0].appendChild(new_item);
};

function update_items(){
    
};

var set_add_game = document.getElementById('main').addEventListener('click', function(){
    add_game();
    update_items();
});


*/
