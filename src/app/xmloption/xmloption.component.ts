
declare var require: any;
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-xmloption',
  templateUrl: './xmloption.component.html',
  styleUrls: ['./xmloption.component.scss']
})
export class XmloptionComponent implements OnInit {
  originalPoem: any;
  modifiedPoem: any;
  options: any;
  linesTest: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('./assets/data/M1.xml', { responseType: 'text'}).subscribe(data => {
      this.originalPoem = data;
      this.parseXML(data);
    })
  }


  // takes the XML and the path to the path through the object we want to return
  public parseXML(Str: string) {
    let xmlDoc;
    // from PT const re = /\:/gi;
    const DomParser = require('dom-parser');
    const domparser = new DomParser();
    //from PT const StrToParse = Str.replace(re, '');
    xmlDoc = domparser.parseFromString(Str, 'text/xml');

    //find a target
    console.log(xmlDoc);
    let test = xmlDoc.getElementsByTagName("title")[1].childNodes; //finding the path is difficult, required logging each array to find where element sits in dom, could use JSON version to find elements
    console.log(test);

    /*working with lines instead - not working 
    this.linesTest = xmlDoc.getElementsByTagName("l"); //this makes it a js array
    let newLines = [];
    this.linesTest.forEach(line => {
      let jsLine = JSON.parse(line);
      newLines.push(jsLine);
    });
    console.log(newLines);
    console.log(this.linesTest);
    console.log(this.linesTest);

*/
    //edit 
    let newElement = document.createElement("edition");
    xmlDoc.getElementsByTagName("title")[1].childNodes.push(newElement); //need to make it something visible in the XML, that might be the problem
    console.log(xmlDoc);
    return xmlDoc.rawHTML;
  }

}
