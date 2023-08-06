import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('svrElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Server element constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Server element onChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('Server element onInit');
    console.log('Text conten ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck(): void {
    console.log('Server element doCheck');
  }

  ngAfterContentInit(): void {
    console.log('Server element afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Server element afterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Server element afterViewInit');
    console.log('Text content ' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('Server element afterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Server element onDestroy');
  }
}
