

/*

//PROTOTYPE FUNCTION TO HANDLE THE MULTILINE COMMNETS
Function.prototype.convert_to_multiline_html = function() {
   var start_of_multiline = "/*!";
   var end_of_multiline = "*";
   var str = this.toString();
   var start_of_string = str.indexOf(start_of_multiline);
   var end_of_string = str.lastIndexOf(end_of_multiline);
   return str.slice(start_of_string + start_of_multiline.length, -(str.length - end_of_string));
};



var html_list = function() {/*!
    <ul>
<<<<<<< HEAD
       <li id="main">Add A Game</li>
       <li>Chess</li>
       <li>Poker</li>
       <li>Monopoly</li>
       <li>Scrabble</li>
=======
       <li onclick="newGame()">Add A Game +</li>
       <li onclick="li_state_normal(this)">Chess</li>
       <li onclick="li_state_normal(this)">Poker</li>
       <li onclick="li_state_normal(this)">Monopoly</li>
       <li onclick="li_state_normal(this)">Scrabble</li>
>>>>>>> f8126c3f8a6411e667fc3f09d443b8e18ebab985
    </ul>
}.convert_to_multiline_html();

//WHEN THE DOM IS LOADED CREATE THE HTML ELEMENTS
document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = document.body.innerHTML + html_list;
});
*/


 




