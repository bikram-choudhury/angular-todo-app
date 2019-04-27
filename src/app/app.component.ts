import { Component } from '@angular/core';

interface customObjectType {
  'key1': string,
  'key2': number,
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  inputType: string = 'text';
  inputValue: string = "I am Input";

  a: number = 2;
  b: number = 3;

  array: (string|number|object)[] = ['a',5,'a',6,'a','c','a', {'a': 6}];

  obj: object = {
    'key1': 'value 1',
    'key2': 5,
    'key3': 'value 3',
  }

  obj1:{
    [key: string]: string | number
  } = {
    'key1': 'value 1',
    'key2': 4,
    'key3': 'value 3',
  }

  obj2:customObjectType[] = [{
    'key1': 'value 1',
    'key2': 4
  }]
  customObject:customObjectType[] = [{
    'key1': 'value 1',
    'key2': 4
  }]

  constants: object = {
    'key': 'value'
  }
  mixedArray:[object,customObjectType[]] = [this.constants, this.customObject]
  variable:number;

  stringify(obj) {
    let parameter = obj || this.obj;
    return JSON.stringify(parameter);
  }
  typeCastMethod() {
    let variable: string;
    // const variable2 = <string><any> this.variable;
  }
  findDuplicates(callback: Function){
    console.log("findDuplicates: ",this);
    callback();
  }
  findDuplicatesEs6 = () => console.log("findDuplicatesEs6: ",this)
  handleClick(event: Event, templateRef: any) {
    console.log("Button clicked", event.target);
    console.log("Button clicked for templateRef", templateRef);
    this.inputValue = `${event.target.innerText} Button clicked`;
    templateRef && (templateRef.value = `${event.target.innerText} Button clicked`);
  }

  moveValues(firstInput, secondInput) {
    secondInput.value = firstInput.value;
    firstInput.value = '';
  }
}
