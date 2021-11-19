

let areasDaPixel = ["marketing", "projetos", "dho", "comercial", "gestao interna", "presidencia"]

var pertencePixel = palavra => areasDaPixel.includes(palavra.toLowerCase()) 
 ? console.log(`É uma área da Pixel`) : console.log(`Não é uma área da Pixel`)

pertencePixel('marketing')
pertencePixel('PROJETOS')
pertencePixel('projetos')
pertencePixel('produção cientifica')
pertencePixel('área de P&D')