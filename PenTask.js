

document.addEventListener("DOMContentLoaded", function() {

    const input = document.getElementById("inputBox");
    const button = document.getElementById("taskButton");
    const container = document.getElementById("taskContainer");

    button.addEventListener('click', function () {
        const taskInput = input.value.trim();
    
        if (taskInput !== '') {
            
            //CREATE BUTTON ELEMENT
            const deleteBtn = document.createElement('button');
            deleteBtn.type = "button";
            deleteBtn.className = "btn-close float-end";
            deleteBtn.ariaLabel = "Close";
            deleteBtn.name = "X";

            
            // CREATE CHECKBOX INPUT ELEMENT
            const scanner = document.createElement("input");
            scanner.className = 'form-check-input float-start mx-1 btn-secondary';
            scanner.type = "checkbox";
            scanner.id = "check";

            //CREATE LIST ELEMENT
            const li = document.createElement('li');
            li.className = 'list-group-item my-2 p-3 fs-4 z-0 rounded-3 shadow font-monospace text-wrap';
            li.id = 'thisText';

            li.appendChild(document.createTextNode(taskInput));// 
            li.appendChild(scanner);
            li.appendChild(deleteBtn);
            container.appendChild(li);
            input.value = "";
            
            

            scanner.addEventListener('change', function () {

                if (this.checked) {
                    li.classList.add('text-decoration-line-through');
                    li.classList.add('bg-dark-subtle');
                    saveData();
                }  else {
                    li.classList.remove('text-decoration-line-through');
                    li.classList.remove('bg-dark-subtle');
                    saveData();
                }
                
            })
            

            // THIS FUNCTION IS FOR DELETION OF TASKS
            deleteBtn.addEventListener('click', function() {
                li.remove();
                saveData();
            })
            
            
        } else {
            alert("no input");
        }
         
         function saveData() {
            localStorage.setItem("data", container.innerHTML);
        }
        
        
       
        
        
        saveData();
    });
    function displayData() {
        container.innerHTML = localStorage.getItem("data");
    }
    
    displayData();
});









