const hoseCalc = (nut, hose, result) => {
    const nutBlock = document.querySelector(nut),
        hoseBlock = document.querySelector(hose),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () =>{
        // sum = работа + фитинги + муфты + рукав
        switch(nutBlock.value){
            case '19':
                sum = Math.round(300 + 110 + 80 + (+hoseBlock.value * 2.5));
                break;
            case '22':
                sum = Math.round(300 + 115 + 80 + (+hoseBlock.value * 3));
                break;
            case '27':
                sum = Math.round(300 + 180 + 90 + (+hoseBlock.value * 3.5));
                break;
            case '30':
                sum = Math.round(300 + 290 + 170 + (+hoseBlock.value * 4));
                break;
            case '32':
                sum = Math.round(300 + 300 + 215 + (+hoseBlock.value * 5.2));
                break;
            case '41':
                sum = Math.round(300 + 500 + 350 + (+hoseBlock.value * 7.5));
                break;
        }

        if(nutBlock.value == '' || hoseBlock.value == ''){
            resultBlock.textContent = "Пожалуйста, выберете размер гайки и длинну шланга";
        }else {
            resultBlock.textContent = sum;
        }
    };
    nutBlock.addEventListener('change', calcFunc);
    hoseBlock.addEventListener('input', calcFunc);

};

export default hoseCalc;