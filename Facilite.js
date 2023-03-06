import inquirer from 'inquirer'
import chalk from 'chalk'

let array = ["overflow", "width", "scale", "object-fit"] 

listaCSS()

function listaCSS() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'O que quer fazer ??',
          choices: [
            'Exibir lista CSS',
            'Adicionar item a lista CSS',
            'Remover itens da lista CSS',
            'Sair',
          ],
        },
      ])
      .then((respond) => {
        let action = respond['action']
  
        if (action === 'Exibir lista CSS') {
          exibLista()
        } else if (action === 'Adicionar item a lista CSS') {
          iserItem()
        } else if (action === 'Remover itens da lista CSS') {
          removItens()
        } else if (action === 'Sair') {
            console.log('Sair')
            sair() 
        }
      })
  }

  function back(){
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'back',
          message: 'Voltar ao Menu Inicial ??',
          choices: [
            'Sim',
            'Não',
          ],
        },
      ])
      .then((respond) => {
        let back = respond['back']
  
        if (back === 'Sim') {
            listaCSS()
        } else if (back === 'Não') {
            console.log('Sair')
            sair()   
        }
      })
  }

  function exibLista(){
    console.log("lista CSS:", array.sort())
    back()

  }

  function iserItem() {
    inquirer
      .prompt([
        {
          name: 'insert',
          message: 'Digite uma propriedade CSS:',
        },
      ])
      .then((respond) => {
        let propriedadeCSS = respond['insert']
  
        if (!array.includes(propriedadeCSS)) {
          array.push(propriedadeCSS)
          console.log(chalk.green('Propriedade CSS inserida com sucesso!!!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else{
          console.log(chalk.red.black('Esta propriedade já esta na lista. Tente outra :)'))
          iserItem()
        }
      })
  }

  function removItens(){
    inquirer
      .prompt([
        {
          name: 'remove',
          message: 'Digite uma propriedade CSS que irar ser removida:',
        },
      ])
      .then((respond) => {
        let removeCSS = respond['remove']
      
        if (array.includes(removeCSS)) {
          let findFor = removeCSS
          let index = array.indexOf(findFor);
          while(index >= 0){
            array.splice(index, 1);
            index = array.indexOf(findFor);}
            
          console.log(chalk.green('Propriedade removida com sucesso !!'))
          console.log("lista CSS:", array.sort())
          return back()
        }
        else {
          console.log(chalk.red('Esta propriedade já foi removida, ou não existe na lista. Escolha outra :('))
          console.log("lista CSS:", array.sort())
          return back()
        }
      })
   }

  function sair(){
    console.log("lista CSS:", array.sort())
    console.log(chalk.blue('Tchau Tchau. Volte sempre :)'))
    process.exit()

  }