class Kalkulator{
    constructor(racunanjeTextElement, rezultatTextElement)
    {
        this.racunanjeTextElement=racunanjeTextElement;
        this.rezultatTextElement=rezultatTextElement;
        this.ukloni();
    }

    ukloni(){
        this.racunanje='';
        this.rezultat='';
        this.operator=undefined;
    }
    brisi(){
        this.rezultat=this.rezultat.toString().slice(0, -1);
    }
    dodajBroj(broj)
    {
        if(broj==='.' && this.rezultat.includes('.')) return;
        this.rezultat+=broj;
    }
    izaberiOperator(operator)
    {
        if(this.rezultat==='') return;
        if(this.racunanje!=='')
        {
            this.racunaj();
        }
        this.operator=operator;
        this.racunanje=this.rezultat;
        this.rezultat='';
    }
    racunaj()
    {
        let konacno;
        const a1=parseFloat(this.racunanje);
        const a2=parseFloat(this.rezultat);
        if(isNaN(a1)|| isNaN(a2)) return;
        switch (this.operator)
        {
            case '+':
                konacno=a1+a2;
                break;
            case '-':
                konacno=a1-a2;
                break;
            case '*':
                konacno=a1*a2;
                break;
            case '÷':
                konacno=a1/a2;
                break;
            default:
                return;
        }
        this.rezultat=konacno;
        this.operator=undefined;
        this.racunanje='';
    }
    BrojSaZarezima(broj)
    {
        const stringBroj=broj.toString();
        const intCifre=parseFloat(stringBroj.split('.')[0]);
        const decCifre=stringBroj.split('.')[1];
        let intPrikaz;
        if(isNaN(intCifre))
        {
            intPrikaz='';
        }
        else 
        {
            intPrikaz=intCifre.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if(decCifre != null)
        {
            return `${intPrikaz}.${decCifre}`;
        }
        else{
            return intPrikaz;
        }
    }
    Ucitaj()
    {
        this.rezultatTextElement.innerText=this.BrojSaZarezima(this.rezultat);
        if(this.operator!=null) 
        {
            this.racunanjeTextElement.innerText=`${this.racunanje} ${this.operator}`;
        }
        else
        {
            this.racunanjeTextElement.innerText='';
        }
    }

}


const brojevi=document.querySelectorAll('[broj]');
const operatori=document.querySelectorAll('[operator]');
const jednako=document.querySelector('[operatorJednako]');
const brisanje=document.querySelector('[brisanje]');
const brisanjeSve=document.querySelector('[brisanjeSve]');
const racunanjeTextElement=document.querySelector('[gornjiBroj]');
const rezultatTextElement=document.querySelector('[donjiBroj]');


const kalkulator= new Kalkulator(racunanjeTextElement,rezultatTextElement);

brojevi.forEach(button=>{
    button.addEventListener('click', () => {
        kalkulator.dodajBroj(button.innerText);
        kalkulator.Ucitaj();
    })
})

operatori.forEach(button=>{
    button.addEventListener('click', () => {
        kalkulator.izaberiOperator(button.innerText);
        kalkulator.Ucitaj();
    })
})

jednako.addEventListener('click', button=>{
    kalkulator.racunaj();
    kalkulator.Ucitaj();
})

brisanjeSve.addEventListener('click', button=>{
    kalkulator.ukloni();
    kalkulator.Ucitaj();
})

brisanje.addEventListener('click', button=>{
    kalkulator.brisi();
    kalkulator.Ucitaj();
})

document.onkeydown= function(e)
{
    console.log(e);
    if(e.key=='=' || e.key=='Enter') 
    {     
        kalkulator.racunaj();
        kalkulator.Ucitaj(); 
    }
    if(e.key=='+')
    {
        kalkulator.izaberiOperator('+');
        kalkulator.Ucitaj();
    }
    if(e.key=='-')
    {
        kalkulator.izaberiOperator('-');
        kalkulator.Ucitaj();
    }
    if(e.key=='*')
    {
        kalkulator.izaberiOperator('*');
        kalkulator.Ucitaj();
    }
    if(e.key=='/' || e.key=='÷')
    {
        kalkulator.izaberiOperator('÷');
        kalkulator.Ucitaj();
    }
    if(e.key=='1')
    {
        kalkulator.dodajBroj('1');
        kalkulator.Ucitaj();
    }
    if(e.key=='2')
    {
        kalkulator.dodajBroj('2');
        kalkulator.Ucitaj();
    }
    if(e.key=='3')
    {
        kalkulator.dodajBroj('3');
        kalkulator.Ucitaj();
    }
    if(e.key=='4')
    {
        kalkulator.dodajBroj('4');
        kalkulator.Ucitaj();
    }
    if(e.key=='5')
    {
        kalkulator.dodajBroj('5');
        kalkulator.Ucitaj();
    }
    if(e.key=='6')
    {
        kalkulator.dodajBroj('6');
        kalkulator.Ucitaj();
    }
    if(e.key=='7')
    {
        kalkulator.dodajBroj('7');
        kalkulator.Ucitaj();
    }
    if(e.key=='8')
    {
        kalkulator.dodajBroj('8');
        kalkulator.Ucitaj();
    }
    if(e.key=='9')
    {
        kalkulator.dodajBroj('9');
        kalkulator.Ucitaj();
    }
    if(e.key=='0')
    {
        kalkulator.dodajBroj('0');
        kalkulator.Ucitaj();
    }
    if(e.key=='.')
    {
        kalkulator.dodajBroj('.');
        kalkulator.Ucitaj();
    }
    if(e.key=='Backspace')
    {
        kalkulator.brisi();
        kalkulator.Ucitaj();
    }


}