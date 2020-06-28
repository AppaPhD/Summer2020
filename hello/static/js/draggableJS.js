// Text User Input
function textInput(){
    var anyText = document.getElementById('text1').value;
    document.getElementById('result').innerHTML = anyText;
}

document.getElementById('button1').addEventListener('click', textInput);

// Draggable
const containers = document.querySelectorAll('.block')

const droppable = new Draggable.Droppable(containers, {
  draggable: '.draggable',
  droppable: '.droppable'
});

droppable.on('drag:start', () => console.log('drag:start'));
droppable.on('droppable:over', () => console.log('droppable:over'));
droppable.on('droppable:out', () => console.log('droppable:out'));
