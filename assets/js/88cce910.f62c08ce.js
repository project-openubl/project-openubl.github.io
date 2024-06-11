"use strict";(self.webpackChunkproject_openubl=self.webpackChunkproject_openubl||[]).push([[392],{59755:e=>{e.exports=JSON.parse('{"url":"redocusaurus/searchpe.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.0.3","info":{"title":"Searchpe API","description":"Searchpe REST API definitions for you to consume.","termsOfService":"https://github.com/project-openubl/searchpe/blob/master/CODE_OF_CONDUCT.md","contact":{"name":"Searchpe API Support","url":"https://project-openubl.github.io/","email":"projectopenubl@googlegroups.com"},"license":{"name":"Apache 2.0","url":"https://www.apache.org/licenses/LICENSE-2.0.html"},"version":"4.1.1"},"servers":[{"url":"http://localhost:8080","description":"Auto generated value"},{"url":"http://0.0.0.0:8080","description":"Auto generated value"}],"paths":{"/api/admin/users":{"get":{"tags":["Basic User Resource"],"summary":"Get users","description":"Get users","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/BasicUserDto"}}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","user:write"]},{"SecurityScheme":["admin:app","user:write"]}]},"post":{"tags":["Basic User Resource"],"summary":"Create user","description":"Creates a new user","requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasicUserDto"}}}},"responses":{"200":{"description":"OK"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","user:write"]},{"SecurityScheme":["admin:app","user:write"]}]}},"/api/admin/users/{id}":{"get":{"tags":["Basic User Resource"],"summary":"Get user","description":"Get user","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasicUserDto"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","user:write"]},{"SecurityScheme":["admin:app","user:write"]}]},"put":{"tags":["Basic User Resource"],"summary":"Update user","description":"Update username or password. It won\'t update current role","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasicUserDto"}}}},"responses":{"200":{"description":"OK"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","user:write"]},{"SecurityScheme":["admin:app","user:write"]}]},"delete":{"tags":["Basic User Resource"],"summary":"Delete user","description":"Delete user","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","user:write"]},{"SecurityScheme":["admin:app","user:write"]}]}},"/api/contribuyentes":{"get":{"tags":["Contribuyente Resource"],"summary":"Search contribuyentes","description":"Get contribuyentes in a page","parameters":[{"name":"filterText","in":"query","schema":{"type":"string"}},{"name":"limit","in":"query","schema":{"format":"int32","default":"10","maximum":1000,"type":"integer"}},{"name":"offset","in":"query","schema":{"format":"int32","default":"0","maximum":9000,"type":"integer"}},{"name":"sort_by","in":"query","schema":{"type":"array","items":{"type":"string"}}},{"name":"tipoPersona","in":"query","schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchResultDtoContribuyenteDto"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","search"]},{"SecurityScheme":["admin:app","search"]}]}},"/api/contribuyentes/{numeroDocumento}":{"get":{"tags":["Contribuyente Resource"],"summary":"Get contribuyente by numeroDocumento","description":"Get contribuyentes by numeroDocumento","parameters":[{"name":"numeroDocumento","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ContribuyenteDto"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","search"]},{"SecurityScheme":["admin:app","search"]}]}},"/api/current-user/credentials":{"post":{"tags":["Current User Resource"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasicUserPasswordChangeDto"}}}},"responses":{"200":{"description":"OK"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":[]},{"SecurityScheme":[]}]}},"/api/current-user/profile":{"put":{"tags":["Current User Resource"],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasicUserDto"}}}},"responses":{"200":{"description":"OK"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":[]},{"SecurityScheme":[]}]}},"/api/templates/settings.js":{"get":{"tags":["Frontend Resource"],"responses":{"200":{"description":"OK","content":{"text/javascript":{"schema":{"$ref":"#/components/schemas/TemplateInstance"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":[]},{"SecurityScheme":[]}]}},"/api/versions":{"get":{"tags":["Version Resource"],"summary":"Get versions","description":"Get all versions available","parameters":[{"name":"active","in":"query","schema":{"type":"boolean"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/VersionDto"}}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","version:write"]},{"SecurityScheme":["admin:app","version:write"]}]},"post":{"tags":["Version Resource"],"summary":"Create version","description":"Creates a new version and fires the importing process","responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VersionDto"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","version:write"]},{"SecurityScheme":["admin:app","version:write"]}]}},"/api/versions/{id}":{"get":{"tags":["Version Resource"],"summary":"Get version","description":"Get version by id","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/VersionDto"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","version:write"]},{"SecurityScheme":["admin:app","version:write"]}]},"put":{"tags":["Version Resource"],"summary":"Update version","description":"Update version status","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"requestBody":{"content":{"application/json":{"schema":{"$ref":"#/components/schemas/VersionEntity"}}}},"responses":{"204":{"description":"No Content"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","version:write"]},{"SecurityScheme":["admin:app","version:write"]}]},"delete":{"tags":["Version Resource"],"summary":"Delete version","description":"Delete version by id","parameters":[{"name":"id","in":"path","required":true,"schema":{"format":"int64","type":"integer"}}],"responses":{"204":{"description":"No Content"},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":["admin:app","version:write"]},{"SecurityScheme":["admin:app","version:write"]}]}},"/api/whoami":{"get":{"tags":["Who Am I Resource"],"responses":{"200":{"description":"OK","content":{"application/json":{"schema":{"$ref":"#/components/schemas/BasicUserDto"}}}},"401":{"description":"Not Authorized"},"403":{"description":"Not Allowed"}},"security":[{"SecurityScheme":[]},{"SecurityScheme":[]}]}}},"components":{"schemas":{"BasicUserDto":{"required":["username","password","permissions"],"type":"object","properties":{"id":{"format":"int64","type":"integer"},"fullName":{"type":"string"},"username":{"maxLength":250,"minLength":3,"pattern":"^[a-zA-Z0-9._-]{3,}$","type":"string"},"password":{"maxLength":250,"minLength":3,"type":"string"},"permissions":{"minItems":1,"uniqueItems":true,"type":"array","items":{"type":"string"}}}},"BasicUserPasswordChangeDto":{"type":"object","properties":{"newPassword":{"type":"string"}}},"Charset":{"type":"object","properties":{"name":{"type":"string"},"aliases":{"type":"array","items":{"type":"string"}},"aliasSet":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"registered":{"type":"boolean"}}},"ContribuyenteDto":{"type":"object","properties":{"versionId":{"format":"int64","type":"integer"},"ruc":{"type":"string"},"dni":{"type":"string"},"nombre":{"type":"string"},"estado":{"type":"string"},"condicionDomicilio":{"type":"string"},"ubigeo":{"type":"string"},"tipoVia":{"type":"string"},"nombreVia":{"type":"string"},"codigoZona":{"type":"string"},"tipoZona":{"type":"string"},"numero":{"type":"string"},"interior":{"type":"string"},"lote":{"type":"string"},"departamento":{"type":"string"},"manzana":{"type":"string"},"kilometro":{"type":"string"}}},"Date":{"format":"date","type":"string","example":"2022-03-10"},"Expression":{"type":"object","properties":{"namespace":{"type":"string"},"parts":{"type":"array","items":{"$ref":"#/components/schemas/Part"}},"literal":{"type":"boolean"},"literalValue":{"type":"object"},"origin":{"$ref":"#/components/schemas/Origin"},"generatedId":{"format":"int32","type":"integer"}}},"Locale":{"type":"object","properties":{"language":{"type":"string"},"script":{"type":"string"},"country":{"type":"string"},"variant":{"type":"string"},"extensionKeys":{"uniqueItems":true,"type":"array","items":{"format":"byte","type":"string"}},"unicodeLocaleAttributes":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"unicodeLocaleKeys":{"uniqueItems":true,"type":"array","items":{"type":"string"}},"iSO3Language":{"type":"string"},"iSO3Country":{"type":"string"},"displayLanguage":{"type":"string"},"displayScript":{"type":"string"},"displayCountry":{"type":"string"},"displayVariant":{"type":"string"},"displayName":{"type":"string"}}},"Meta":{"type":"object","properties":{"offset":{"format":"int32","type":"integer"},"limit":{"format":"int32","type":"integer"},"count":{"format":"int64","type":"integer"}}},"Origin":{"type":"object","properties":{"line":{"format":"int32","type":"integer"},"lineCharacterStart":{"format":"int32","type":"integer"},"lineCharacterEnd":{"format":"int32","type":"integer"},"templateId":{"type":"string"},"templateGeneratedId":{"type":"string"},"variant":{"type":"object","allOf":[{"$ref":"#/components/schemas/Variant"}],"nullable":true}}},"ParameterDeclaration":{"type":"object","properties":{"typeInfo":{"type":"string"},"key":{"type":"string"},"defaultValue":{"$ref":"#/components/schemas/Expression"},"origin":{"$ref":"#/components/schemas/Origin"}}},"Part":{"type":"object","properties":{"name":{"type":"string"},"typeInfo":{"type":"string"},"virtualMethod":{"type":"boolean"}}},"SearchResultDtoContribuyenteDto":{"type":"object","properties":{"meta":{"$ref":"#/components/schemas/Meta"},"data":{"type":"array","items":{"$ref":"#/components/schemas/ContribuyenteDto"}}}},"Status":{"enum":["SCHEDULED","DOWNLOADING","UNZIPPING","IMPORTING","INDEXING","ERROR","CANCELLED","COMPLETED","DELETING","CANCELLING"],"type":"string"},"Template":{"type":"object","properties":{"expressions":{"type":"array","items":{"$ref":"#/components/schemas/Expression"}},"generatedId":{"type":"string"},"id":{"type":"string"},"variant":{"type":"object","allOf":[{"$ref":"#/components/schemas/Variant"}],"nullable":true},"parameterDeclarations":{"type":"array","items":{"$ref":"#/components/schemas/ParameterDeclaration"}},"fragment":{"type":"boolean"}}},"TemplateInstance":{"type":"object","properties":{"timeout":{"format":"int64","type":"integer"},"template":{"$ref":"#/components/schemas/Template"}}},"Variant":{"type":"object","properties":{"locale":{"$ref":"#/components/schemas/Locale"},"contentType":{"type":"string"},"encoding":{"$ref":"#/components/schemas/Charset"},"hashCode":{"format":"int32","type":"integer"},"mediaType":{"type":"string"},"charset":{"$ref":"#/components/schemas/Charset"}}},"VersionDto":{"type":"object","properties":{"id":{"format":"int64","type":"integer"},"createdAt":{"$ref":"#/components/schemas/Date"},"updatedAt":{"$ref":"#/components/schemas/Date"},"status":{"$ref":"#/components/schemas/Status"},"records":{"format":"int32","type":"integer"},"isActive":{"type":"boolean"},"active":{"type":"boolean"}}},"VersionEntity":{"required":["createdAt","updatedAt","status","records"],"type":"object","properties":{"id":{"format":"int64","type":"integer"},"createdAt":{"$ref":"#/components/schemas/Date"},"updatedAt":{"$ref":"#/components/schemas/Date"},"status":{"$ref":"#/components/schemas/Status"},"records":{"format":"int32","type":"integer"},"triggerKey":{"type":"string"},"version":{"format":"int32","type":"integer"}}}}}}}')}}]);