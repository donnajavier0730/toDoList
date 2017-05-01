var myButton = document.querySelector('button.myB');
var myh1 = document.getElementById('title');
var input = document.getElementsByTagName('input')[0];
var myUl = document.getElementsByTagName('ul')[0];
var message = document.getElementsByClassName("message")[0];

var createLi = function(text){
    var newLi = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML = text;
    newLi.appendChild(span);
    var editButton = document.createElement('button');
    editButton.innerHTML = 'edit';
    newLi.appendChild(editButton);
    var removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    newLi.appendChild(removeButton);
    return newLi;
};

myButton.addEventListener('click', function(e){
    if(input.value ===''){
        message.innerHTML = "invalid input";
    } else {
      message.innerHTML = "";
      var text = input.value;
      var li = createLi(text);//function above
      myUl.appendChild(li);
      input.value = '';
    }
});

input.addEventListener('keyup', function(e){
    if(e.which===13){
        var newLi = document.createElement('li');
        if(input.value === ""){
            message.innerHTML = "invalid input";
        } else {
            message.innerHTML = "";
            var text = input.value;
            var li = createLi(text);
            myUl.appendChild(li);
            input.value ="";
        }
    }
});

myUl.addEventListener('click', function(e){
  if(e.target.tagName === 'BUTTON'){
     var li = e.target.parentNode;
     var ul = li.parentNode;
     var list = li.textContent;
     var button = e.target;
    if(button.innerHTML === 'remove'){
      ul.removeChild(li);
       } else if(button.textContent === 'edit'){
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;//so the name still appears on the input to edit
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
         } else if(button.textContent === 'save'){
                const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = 'edit';   
         }
     }
});

// myButton.addEventListener('click', function(){
//    var newLi = document.createElement('li');
//     if(input.value === ""){
//        message.innerHTML = "invalid"
//        } else {
//          message.innerHTML = "";
//          newLi.textContent = input.value;
//          myUl.appendChild(newLi);
//      input.value = "";
//     var button = document.createElement('button');
//     button.textContent = 'Remove';
//     newLi.appendChild(button);
//        }
//   });


// input.addEventListener('keyup', function(e){
//   if(e.which===13){
//     var newLi = document.createElement('li');
//     if(input.value===""){
//        message.innerHTML = "invalid";
//        } else {
//          message.innerHTML = "";
//          newLi.textContent = input.value;
//     myUl.appendChild(newLi);
//     input.value = "";
//     //add REMOVE button when new LI is added
//     var button = document.createElement('button');
//     button.innerHTML = 'Remove';
//     newLi.appendChild(button);
//        }
//     }
// });

///*************************************************
// myUl.addEventListener('click', function(e){
//   e.target.classList.add = ('removeButton');
//   if(e.target.className === 'removeButton'){
//     myUl.removeChild(li);
//   }
// });

// myUl.addEventListener('click', function(event){
//     event.target.classList.add('finish');
// });
 
