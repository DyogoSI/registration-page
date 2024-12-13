alert("OLÁ ESTE SITE ESTÁ EM DESENVOLVIMENTO!!");

window.onload = function() {
    
    const nome = prompt("ME FALE SEU NOME:");
    
    
    if (nome) {
        
        const mensagem = `Olá usuario(a), ${nome}!`;
        
        
        alert(mensagem);
    }
}



