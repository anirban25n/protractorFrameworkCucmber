import { element, ElementFinder, by } from "protractor";


class practicePage{

    radioButtonExample: ElementFinder;
    suggestedClassExample: ElementFinder;
    dropdownExample: ElementFinder;
    checkBoxExample: ElementFinder;
    
    constructor(){
        this.radioButtonExample = element(by.css("input[value='radio2']"));
        this.suggestedClassExample = element(by.id("autocomplete"));
        this.dropdownExample = element(by.name("dropdown-class-example"));
        this.checkBoxExample = element(by.css("input[value='checkBoxOption2']"));
    }




}