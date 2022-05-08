function makeAll(){
  const body = document.querySelector('body');

  const divTrivia = document.createElement('div');
  const divYear = document.createElement('div');
  const divDate = document.createElement('div');

  const inputTrivia = document.createElement('input');
  const inputYear = document.createElement('input');
  const inputdate = document.createElement('input');

  inputTrivia.placeholder = 'Digite um número qualquer';
  inputYear.placeholder = 'Digite um ano';
  inputdate.placeholder = 'mm/dd';

  const pTrivia = document.createElement('p')
  const pYear = document.createElement('p')
  const pDate = document.createElement('p')

  const btn = document.createElement('button');
  btn.innerText = 'ATUALIZAR';

  divDate.append(inputdate, pDate);
  divYear.append(inputYear, pYear);
  divTrivia.append(inputTrivia, pTrivia);

  body.append(divDate, divYear, divTrivia, btn);

  async function trivia(number) {
    const resp = await fetch(`http://numbersapi.com/${number}/math?json`)
    const data = await resp.json()
    pTrivia.innerText = data.text
  }

  async function year(number) {
    const resp = await fetch(`http://numbersapi.com/${number}/year?json`)
    const data = await resp.json();
    pYear.innerText = data.text
  }

  async function mes(mes, dia) {
    const resp = await fetch(`http://numbersapi.com/${mes}/${dia}/date?json`);
    const data = await resp.json();
    pDate.innerText = data.text
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault;
    trivia(inputTrivia.value);
    year(inputYear.value);
    mes(+inputdate.value.slice(0,2), +inputdate.value.slice(3,5))
  })
}
makeAll();

