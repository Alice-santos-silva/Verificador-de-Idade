function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        alert('verifique os dados e tente novamente.')
    }
    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value) //*
        let genero = ''
        if(fsex[0].checked){ //se o check está no 0 então é masculino
            genero = 'masculino'
            if(idade >=0 && idade <13){
                document.getElementById("image").innerHTML = "<img src='imgs/menino.jpg'>"
            }
           else if(idade < 30){
            document.getElementById("image").innerHTML = "<img src='imgs/jovem-homem.jpg'>"
           }
           else if(idade < 60){
            document.getElementById("image").innerHTML = "<img src='imgs/adulto.jpg'>"
           }
           else{
            document.getElementById("image").innerHTML = "<img src='imgs/idoso.jpg'>"
           }

        }
        else if(fsex[1].checked){
            genero = 'feminino'
            if(idade >=0 && idade <13){
                document.getElementById("image").innerHTML = "<img src='imgs/menina.jpg'>"
            }
           else if(idade < 30){
            document.getElementById("image").innerHTML = "<img src='imgs/jovem-mulher.jpg'>"
           }
           else if(idade < 60){
            document.getElementById("image").innerHTML = "<img src='imgs/adulta.jpg'>"
           }
           else{
            document.getElementById("image").innerHTML = "<img src='imgs/idosa.jpg'>"
           }
        }
        res.innerHTML = `<p>Detectamos uma pessoa do gênero <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade.</p>`

    }
}
