function textInput() {
    var yuh = document.getElementByID("text1").value;
    alert("yuh"); 
    document.getElementById("message").innerHTML = yuh;
}

const containers = document.querySelectorAll('.block')

const droppable = new Draggable.Droppable(containers, {
  draggable: '.draggable',
  droppable: '.droppable'
});

droppable.on('drag:start', () => console.log('drag:start'));
droppable.on('droppable:over', () => console.log('droppable:over'));
droppable.on('droppable:out', () => console.log('droppable:out'));
