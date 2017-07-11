//only soap credentials have to encrypt in base64
var db = 'PotatoHead'

var strUserID = 'dGVzdHVzZXI='; //testuser
var strPassword = 'dGVzdHBhc3N3b3Jk'; //testpassword
var url= 'http://uatcrm3.ascentis.com.sg/matrixapis/APIsCommandService.asmx'


var strMemberID = 'testuser@gmail.com';
var strMemberPassword = 'wiseword';

function SOAPRequest (jsonStr){
  return '<?xml version="1.0" encoding="utf-8"?>' +
          '<soap:Envelope ' +
            'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
            'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
            'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
              '<soap:Header>' +
                '<SOAPAuthHeader xmlns="http://MatrixAPIs/">' +
                  '<strUserName>' + strUserID + '</strUserName>' +
                  '<strPassword>' + strPassword + '</strPassword>' +
                '</SOAPAuthHeader>' +
              '</soap:Header>' +
              '<soap:Body>' +
                '<JSONCommand xmlns="http://MatrixAPIs/">' +
                  '<requestJSON>' + jsonStr + '</requestJSON>' +
                '</JSONCommand>' +
              '</soap:Body>' +
          '</soap:Envelope>';
}


function setXMLHTTPHeader(xmlHttp, SOAPRequest)
{
  xmlHttp.setRequestHeader ("POST", "/matrixapis/APIsCommandService.asmx HTTP/1.1");
  xmlHttp.setRequestHeader ("Host", "uatcrm3.ascentis.com.sg");
  xmlHttp.setRequestHeader ("Content-Type", "text/xml; charset=utf-8");
  xmlHttp.setRequestHeader ("Content-Length", SOAPRequest.length);
  xmlHttp.setRequestHeader ("SOAPAction", "http://MatrixAPIs/JSONCommand");
}

export const requestSOAP = (commandType, commandFunc, ...args) => {
  return new Promise((resolve, reject) => {
    var SOAPRequestStr = SOAPRequest(commandFunc(commandType, args));

    var xmlHttp =  new XMLHttpRequest();

    xmlHttp.open('POST', url, true);

    //on load
    xmlHttp.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        var json = getJSONresult(xmlHttp.responseText);
        //console.log(json);
        if(json.ReturnStatus === 1)
        {
          resolve(json);
        }
        else{
          //{ReturnStatus: 5, ReturnMessage: "INVALID REQUEST", RequestTime: "20170524202717", ResponseTime: "20170524202717"}
          reject(json);
        }

      } else {
        //{ReturnStatus: 5, ReturnMessage: "INVALID REQUEST", RequestTime: "20170524202717", ResponseTime: "20170524202717"}
        reject(json);
      }
    }

    //on error
    xmlHttp.onerror = function () {
      reject({
        status: "Error",
        statusText: "Request failed. Check network or syntax."
      });
    };

    //set request header
    setXMLHTTPHeader(xmlHttp, SOAPRequestStr)

    //send request
    xmlHttp.send(SOAPRequestStr);
    console.log(SOAPRequestStr);
  })
}

export function getJSONresult(responseText) {
  var parse1 = responseText.split('<JSONCommandResult>');
  var parse2 = parse1[1].split('</JSONCommandResult>');
  return JSON.parse(parse2[0]);
}
