import { Component,
         Input,
         OnInit,
         Output,
         EventEmitter,
         OnChanges,
         AfterViewInit,
         OnDestroy,
         SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img:string= '';

  @Input()
  set changeImg(newImage:string){
    this.img = newImage;
    console.log('change just =>', this.img)
  }
  @Input() alt:string = "";
  @Output() loaded = new EventEmitter<string[0]>();
  imageDefault: string = './assets/images/default.png';
  // counter: number = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render
    //No asyn -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }
  ngOnChanges(changes: SimpleChanges){
    //corre antes y durante
    //changes Inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log("changes:", changes);
  }

  ngOnInit(): void {
    //before render
    //Async podemos hacer llamadas a apis usar el Fetch solo corre una vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('run counter');
    // },1000);
  }

  ngAfterViewInit(){
    //corre despues
    //handler childrem
    console.log('ngAfterViewInit',);
  }

  ngOnDestroy(){
    //se dispara cuando es eliminado el componente
    console.log('ngOnDestroy',);
    // window.clearInterval(this.counterFn);
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
