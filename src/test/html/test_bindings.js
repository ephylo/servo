//window.alert(ClientRect);
//window.alert(ClientRectList);
window.alert(window);
var document = window.document;
window.alert("==1==");
window.alert(document.documentElement);
window.alert(document.documentElement.firstChild);
window.alert(document.documentElement.nextSibling);
window.alert(document instanceof HTMLDocument);
window.alert(document instanceof Document);
var elems = document.getElementsByTagName('div');
window.alert(elems.length);
let elem = elems[0];
window.alert(elem.nodeType);
window.alert(elem);
window.alert("==1.5==");
var rect = elem.getBoundingClientRect();
window.alert(rect);
window.alert(rect.top);
window.alert(rect.bottom);
window.alert(rect.left);
window.alert(rect.right);
window.alert(rect.width);
window.alert(rect.height);
window.alert("==2==");
var rects = elem.getClientRects();
window.alert("==3==");
window.alert(rects);
window.alert(rects.length);
window.alert("==4==");
let rect = rects[0];
window.alert(rect);
/*window.alert(Object.prototype.toString.call(rect.__proto__));
window.alert(rect.__proto__ === Object.getPrototypeOf(rect));
window.alert(rect.__proto__.top);
window.alert(Object.getPrototypeOf(rect).top);*/
window.alert(rect.top);
window.alert(rect.bottom);
window.alert(rect.left);
window.alert(rect.right);
window.alert(rect.width);
window.alert(rect.height);

window.alert("HTMLCollection:");
let tags = document.getElementsByTagName("div");
//let tag = tags[0];
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
window.alert(tags[0].getClientRects());
window.alert(tags[1]);
window.alert(tags[2]);
window.alert(tags[3]);
let tags = document.getElementsByName("test");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
window.alert(tags[1]);
window.alert(tags[1].tagName);
window.alert(tags[2]);
let tags = document.links;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
let tags = document.images;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
let tags = document.embeds;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
let tags = document.plugins;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
let tags = document.forms;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
let tags = document.scripts;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);
let tags = document.applets;
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);

window.alert("Document:");
let head = document.head;
window.alert(head);
window.alert(head.tagName);

window.alert("DOMParser:");
window.alert(DOMParser);
let parser = new DOMParser();
window.alert(parser);
//window.alert(parser.parseFromString("<html></html>", "text/html"));

window.alert("Event:");
window.alert(Event);
let ev = new Event("foopy");
window.alert(ev.type);
window.alert(ev.defaultPrevented);
ev.preventDefault();
window.alert(ev.defaultPrevented);

window.alert("MouseEvent:");
window.alert(MouseEvent);
let ev2 = new MouseEvent("press", {bubbles: true, screenX: 150, detail: 100});
window.alert(ev2);
window.alert(ev2.screenX);
window.alert(ev2.detail);
window.alert(ev2.getModifierState("ctrl"));
window.alert(ev2 instanceof Event);
window.alert(ev2 instanceof UIEvent);

window.alert(document.title);
document.title = "foo";
window.alert(document.title);

window.alert(document.links[0]);
window.alert(document.getElementsByTagName('iframe')[0]);

window.alert(document.getElementsByTagName("body")[0]);
window.alert(document.getElementsByTagName("area")[0]);
window.alert(document.getElementsByTagName("base")[0]);
window.alert(document.getElementsByTagName("data")[0]);

window.alert("OList:");
let tags = document.getElementsByTagName("ol");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0]);
window.alert(tags[0].tagName);

window.alert("HTMLElement:");
let tagList = ["section", "aside", "b", "i"];
for (let i = 0, l = tagList.length; i < l; ++i) {
  let tags = document.getElementsByTagName(tagList[i]);
  window.alert(tags);
  window.alert(tags.length);
  window.alert(tags[0].tagName);
  window.alert(tags[0] instanceof HTMLElement);
}

window.alert("HTMLCanvasElement:");
let tags = document.getElementsByTagName("canvas");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLCanvasElement);

window.alert("HTMLSourceElement:");
let tags = document.getElementsByTagName("source");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLSourceElement);

window.alert("HTMLTimeElement:");
let tags = document.getElementsByTagName("time");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLTimeElement);

window.alert("HTMLTableCaptionElement:");
let tags = document.getElementsByTagName("caption");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLTableCaptionElement);

window.alert("HTMLTextAreaElement:");
let tags = document.getElementsByTagName("textarea");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLTextAreaElement);

window.alert("HTMLQuoteElement:");
let tags = document.getElementsByTagName("q");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLQuoteElement);

window.alert("HTMLTableCellElement:");
let tags = document.getElementsByTagName("th");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLTableCellElement);

window.alert("HTMLTableCellElement:");
let tags = document.getElementsByTagName("td");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLTableCellElement);

window.alert("HTMLTableColElement");
let tagList = ["col", "colgroup"];
for (let i = 0, l = tagList.length; i < l; ++i) {
  let tags = document.getElementsByTagName(tagList[i]);
  window.alert(tags);
  window.alert(tags.length);
  window.alert(tags[0].tagName);
  window.alert(tags[0] instanceof HTMLTableColElement);
}

window.alert("HTMLInputElement:");
let tags = document.getElementsByTagName("input");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLInputElement);

window.alert("HTMLLIElement:");
let tags = document.getElementsByTagName("li");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLLLIElement);

window.alert("HTMLProgressElement:");
let tags = document.getElementsByTagName("progress");
window.alert(tags);
window.alert(tags.length);
window.alert(tags[0].tagName);
window.alert(tags[0] instanceof HTMLProgressElement);

//TODO: Doesn't work until we throw proper exceptions instead of returning 0 on
//      unwrap failure.
/*try {
  Object.getOwnPropertyDescriptor(Object.getPrototypeOf(rects), "length").get.call(window);
  window.alert("hmm?");
} catch (x) {
  window.alert("ok");
}*/
