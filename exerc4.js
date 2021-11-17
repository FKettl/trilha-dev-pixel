function pertencePixel(palavra){
    palavra = palavra.toLowerCase()
    /* pensei em usar um loop for/of pra conferir porém lembrei do .includes*/
    if (areasDaPixel.includes(palavra)){
        console.log(`É uma área da Pixel`)    
    } else {
        console.log(`Não é uma área da Pixel`)
    };
};

let areasDaPixel = ["marketing", "projetos", "dho", "comercial", "gestao interna", "presidencia"]
pertencePixel('marketing')
pertencePixel('PROJETOS')
pertencePixel('projetos')
pertencePixel('produção cientifica')
pertencePixel('área de P&D')
