import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';  //this method worked, it will not import as an angular module
// also modifications to ts config to disable ivy and update paths for timers and stream
import * as convert from 'xml-js';

@Component({
  selector: 'app-jsoption',
  templateUrl: './jsoption.component.html',
  styleUrls: ['./jsoption.component.scss']
})

export class JsoptionComponent implements OnInit {

  originalPoem: any;
  modifiedPoem: any;
  options: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.options = {compact: true, ignoreComment: false, spaces: 4};
    this.http.get('./assets/data/M1.xml', { responseType: 'text'}).subscribe(data => {
      this.originalPoem = data;
      this.parseXmltoJSON(data);
    })
  }

  // takes the XML and the path to the path through the object we want to return
  public parseXmltoJSON(xmlStr: string) {
    let result;
    /*const parser = new xml2js.Parser({ strict: false, trim: true });
    parser.parseString(xmlStr, (e, r) => {result = r; });
    console.log(result);*/
    result = convert.xml2js(xmlStr, {compact: true});
    console.log(result);
    this.editJSON(result);
  }

  public editJSON(jsonObj: any){
    // for xml2js jsonObj.TEI.TEIHEADER[0].FILEDESC[0].SOURCEDESC.push({P: ['test source']});
    //for xml-js
    console.log(jsonObj);
    jsonObj.TEI.teiHeader.profileDesc.creation.listChange.change.push('test add to array');
    console.log(jsonObj);
    this.parseJSONtoXML(jsonObj);
  }

  // This method builds arrays to XML incorrectly, if IDNO contains an array of 2 objects, there will be 2 IDNO tags containing a single object in the resulting XML
  public parseJSONtoXML(editedJson: any){
   /* const builder = new xml2js.Builder();
    this.modifiedPoem = builder.buildObject(editedJson);*/
    
    this.modifiedPoem = convert.json2xml(editedJson, this.options);
    console.log(this.modifiedPoem);

  }


}
