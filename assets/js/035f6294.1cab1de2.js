(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[6147],{32462:function(e){"use strict";e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.1","info":{"title":"Searchpe API","contact":{"name":"Searchpe community support","url":"https://project-openubl.github.io/","email":"https://project-openubl.github.io/"},"license":{"name":"EPL-2.0","url":"https://opensource.org/licenses/EPL-2.0"},"version":"2.0.0","x-logo":{"url":"https://raw.githubusercontent.com/project-openubl/searchpe/master/src/main/resources/META-INF/resources/assets/images/logo-2-lines.svg","altText":"Searchpe logo"}},"servers":[{"url":"http://localhost:8080","description":"Dev mode server"}],"paths":{"/contribuyentes":{"get":{"summary":"Search contribuyentes","description":"Get contribuyentes in a page","parameters":[{"name":"filterText","in":"query","schema":{"type":"string"}},{"name":"limit","in":"query","schema":{"format":"int32","default":"10","type":"integer"}},{"name":"offset","in":"query","schema":{"format":"int32","default":"0","type":"integer"}},{"name":"sort_by","in":"query","schema":{"$ref":"#/components/schemas/ListString"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PageRepresentationContribuyenteEntity"}}}}}}},"/contribuyentes/{ruc}":{"get":{"summary":"Get contribuyente by RUC","description":"Get contribuyentes by RUC","parameters":[{"name":"ruc","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ContribuyenteEntity"}}}}}}},"/versions":{"get":{"summary":"Get versions","description":"Get all versions available","parameters":[{"name":"active","in":"query","schema":{"type":"boolean"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ListVersionEntity"}}}}}},"post":{"summary":"Create version","description":"Creates a new version and fires the importing process","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VersionEntity"}}}}}}},"/versions/{id}":{"get":{"summary":"Get version","description":"Get version by id","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VersionEntity"}}}}}},"delete":{"summary":"Delete version","description":"Delete version by id","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"204":{"description":"No Content"}}}}},"components":{"schemas":{"ContribuyenteEntity":{"required":["razonSocial"],"type":"object","properties":{"codigoZona":{"type":"string"},"condicionDomicilio":{"type":"string"},"departamento":{"type":"string"},"estadoContribuyente":{"type":"string"},"interior":{"type":"string"},"kilometro":{"type":"string"},"lote":{"type":"string"},"manzana":{"type":"string"},"nombreVia":{"type":"string"},"numero":{"type":"string"},"razonSocial":{"type":"string","nullable":false},"ruc":{"type":"string"},"tipoVia":{"type":"string"},"tipoZona":{"type":"string"},"ubigeo":{"type":"string"}}},"ListString":{"type":"array","items":{"type":"string"}},"ListContribuyenteEntity":{"type":"array","items":{"$ref":"#/components/schemas/ContribuyenteEntity"}},"Meta":{"type":"object","properties":{"count":{"format":"int64","type":"integer"},"limit":{"format":"int32","type":"integer"},"offset":{"format":"int32","type":"integer"}}},"PageRepresentationContribuyenteEntity":{"type":"object","properties":{"data":{"$ref":"#/components/schemas/ListContribuyenteEntity"},"meta":{"$ref":"#/components/schemas/Meta"}}},"Status":{"enum":["COMPLETED","DELETING","DOWNLOADING","ERROR","IMPORTING","SCHEDULED","UNZIPPING"],"type":"string"},"VersionEntity":{"required":["createdAt","records","status","updatedAt"],"type":"object","properties":{"id":{"format":"int64","type":"integer"},"createdAt":{"format":"date","type":"string","nullable":false},"records":{"format":"int32","type":"integer","nullable":false},"status":{"allOf":[{"$ref":"#/components/schemas/Status"},{"nullable":false}]},"updatedAt":{"format":"date","type":"string","nullable":false}}},"ListVersionEntity":{"type":"array","items":{"$ref":"#/components/schemas/VersionEntity"}}}}}}')}}]);