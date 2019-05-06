//Attendre que la page soit chargée !
document.addEventListener("DOMContentLoaded", function() {
    var buttonToDo = document.getElementById('buttonToDo');
    var inputField = document.getElementById('inputToDo');
    
    // J'écoute le click sur le bouton Ajouter
    buttonToDo.addEventListener("click", function() {
        
        // Je récupère la valeur de l'utilisateur    
        var inputValue = inputField.value;
        inputField.value = "";

        //Création d'un li avec la valeur de l'utilisateur stockée dedans
        var newToDo = document.createElement('li');
        newToDo.setAttribute("class", "list");
        var newText = document.createTextNode(inputValue);
        newToDo.appendChild(newText);
        var position = document.getElementById('toDoList');
        position.appendChild(newToDo);

        //Ajouter le bouton Remove
        var removeButton = document.createElement('button');
        var removeText = document.createTextNode('Supprimer');
        removeButton.appendChild(removeText);
        removeButton.setAttribute("class", "removeButton");
        newToDo.appendChild(removeButton);
        // Supprimer le bouton et l'entrée   
        removeButton.addEventListener('click', function() {
            newToDo.remove();
            removeButton.remove();
        });
    });
});