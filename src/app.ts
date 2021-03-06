import { customElement } from '@aurelia/runtime-html';
import template from './app.html';
import img from "../images/pexels-pixabay-459225.jpg";
import smallImg from "../images/pexels-stein-egil-liland-1933239.jpg";

@customElement({ name: 'app', template })
export class App {
  public readonly message: string = 'Hello World!';
  private readonly img = img;
  private readonly smallImg = smallImg;
}
