/*(() =>{
     const abas = document.querySelectorAll('[data-aba]')  //primeira parte
 
     abas.forEach(aba => aba.addEventListener('click' , () =>{    //segunda parte  
                                                            
      const valor = aba.dataset.aba // terceira parte
 
        esconderconteudos() // oitava parte
         inativarabas() // nona parte
         ativaconteudo(valor)
         ativaaba(aba)
      }))
     



        esconderconteudos = () =>{ // quarta parte 
           const conteudos = document.querySelectorAll('[data-conteudo]') //quinta parte
              conteudos.forEach(conteudo => conteudo.classList.add('hide')) // sexta parte 
       }


         inativarabas = () =>{
               abas.forEach(aba => aba.classList.remove('ativa')) //setima parte
         }

          ativaconteudo = (valor) =>{ // decima parte
             const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)
             conteudo.classList.remove('hide')
          }

           ativaaba = (aba) =>{  // decima primeira parte
               aba.classList.add('ativa')
           }


     
})()*/


(()=>{
    const abas = document.querySelectorAll('[data-aba]')
         esconderconteudos = () =>{
         const conteudos = document.querySelectorAll('[data-conteudo]')
         conteudos.forEach(conteudo => conteudo.classList.add('hide'))
     }

    inativarabas = () =>{
        abas.forEach(aba => aba.classList.remove('ativa'))
    }


    ativaconteudo = (valor) =>{
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)
        conteudo.classList.remove('hide')
    }

    ativaaba = (aba) =>{
        aba.classList.add('ativa')
    }


    abas.forEach(aba => aba.addEventListener('click', () =>{
        const valor = aba.dataset.aba 
   
  esconderconteudos()
   inativarabas()
   ativaconteudo(valor)
   ativaaba(aba)
    }))

})()