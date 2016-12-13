import 'assets/css/app.css';

class App {
  private title: HTMLHeadingElement;

  constructor(title: string){

    this.title =  document.createElement('h1');
    this.title.innerText = title;
    document.querySelector('App').appendChild(this.title);
  }
}

new App('Hello world!');