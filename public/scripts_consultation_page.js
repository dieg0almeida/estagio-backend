function checkFields(event){

    const valuesToCheck = [
        "filter",
    ] 

    const isEmpty = valuesToCheck.find(function(value){

        const checkIfIsString = typeof event.target[value].value ==="string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if(isEmpty){

        event.preventDefault()
        
        const text = document.createTextNode('Por favor, informe o nome ou o CPF!')
        const emptyFieldsElementeP = document.querySelector('div#emptyFields p')

        const button = document.querySelector('input#buttonFilter')
        
        emptyFieldsElementeP.appendChild(text)
        button.disabled = true
        
        setTimeout(function(){ 
            emptyFieldsElementeP.removeChild(text)
            button.disabled = false
        }, 3000);
          
    }
}