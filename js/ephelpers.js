/*
 HTML Helper Classes
 */

/*
 Returns new div if there is no name, else it gets the divname, returns the element if it is an element
 */

function moveDivTo(div1,divtarget){
    div1=getDiv(div1);
    var divt=getDiv(divtarget);

    if(div1!=null&&divt!=null)divt.appendChild(div1);

}



function getDiv(name){
    if(name instanceof Element){
        return name;
    }
    if(name==null){
        return document.createElement("div");
    }
    else if (typeof name === 'string' || name instanceof String){
        return document.getElementById(name);
    }

}
function getli(name){
    if(name instanceof Element){
        return name;
    }
    if(name==null){
        return document.createElement("li");
    }
    else if (typeof name === 'string' || name instanceof String){
        return document.getElementById(name);
    }
}
function getul(name){
    if(name instanceof Element){
        return name;
    }
    if(name==null){
        return document.createElement("ul");
    }
    else if (typeof name === 'string' || name instanceof String){
        return document.getElementById(name);
    }
}
function putli(html,parent,classname){
    parent = getul(parent);  //return element or retrieve div
    var div = getli();
    parent.appendChild(div);
    div.innerHTML=html;
    if(classname!=null){
        div.className=classname;
    }
    return div;
}


function getp(name){
    if(name instanceof Element){
        return name;
    }
    if(name==null){
        return document.createElement("p");
    }
    else if (typeof name === 'string' || name instanceof String){
        return document.getElementById(name);
    }
}

function putp(html,parent,classname){
    parent = getDiv(parent);  //return element or retrieve div
    var div = getp();
    parent.appendChild(div);
    div.innerHTML=html;
    if(classname!=null){
        div.className=classname;
    }
    return div;
}


function getA(name){
    if(name instanceof Element){
        return name;
    }
    if(name==null){
        return document.createElement("a");
    }
    else if (typeof name === 'string' || name instanceof String){
        return document.getElementById(name);
    }
}
function putModernizerButton(text,parent,iconname, additionalclasses,tooltiptext){
    parent = getDiv(parent);  //return element or retrieve div
    var a= getA();
    parent.appendChild(a);
    if(iconname!=null){
        a.innerHTML="<i class='material-icons left'>"+iconname+"</i>";
    }
    a.innerHTML+=text;


    if(additionalclasses!=null){
        a.className="waves-effect waves-light btn "+additionalclasses;
    }else{
        a.className="waves-effect waves-light btn";
    }
    //if you do this, remember to run this at some point:  $('.tooltipped').tooltip({delay: 50});
    if(tooltiptext!=null){
        a.className=a.className+" tooltipped";
        a.dataset.position="top";
        a.dataset.tooltip=tooltiptext;
    }



    return a;
}
//classname optional
function putDiv(html,parent,classname){
    parent = getDiv(parent);  //return element or retrieve div
    var div = getDiv();
    parent.appendChild(div);
    div.innerHTML=html;
    if(classname!=null){
        div.className=classname;
    }
    return div;
}
function removeDiv(div){
    var el = getDiv(div);  //return element or retrieve div
    if(el!=null&&el.parentElement!=null){
        el.parentElement.removeChild(el);
    }
}
function putSpan(html,parent,classname){
    parent = getDiv(parent);  //return element or retrieve div
    var span = document.createElement("span");
    parent.appendChild(span);
    span.innerHTML=html;
    if(classname!=null){
        span.className=classname;
    }
    return span;
}
function putLabel(html,parent,classname){
    parent = getDiv(parent);  //return element or retrieve div
    var span = document.createElement("label");
    parent.appendChild(span);
    span.innerHTML=html;
    if(classname!=null){
        span.className=classname;
    }
    return span;
}
function putA(html,parent,classname){
    parent = getDiv(parent);  //return element or retrieve div
    var span = document.createElement("a");
    parent.appendChild(span);
    span.innerHTML=html;
    if(classname!=null){
        span.className=classname;
    }
    return span;
}
function hideDiv(name){
    var el = getDiv(name);  //return element or retrieve div
    if(el!=null){
        hideEl(el)
    }
}
function showDiv(name){
    var el = getDiv(name);  //return element or retrieve div
    if(el!=null){
        showEl(el)
    }
}
function putCheck(parentdiv,labeltext,onchange,context,checked){
    parentdiv=getDiv(parentdiv);
    var div=putDiv('',parentdiv,'checkparentdiv');
    var id = (new Date()).getTime();
    var check = document.createElement('input');
    check.name=id;
    check.type='checkbox';
    if(checked!=null&&checked==true){
        check.checked=true;
    }
    div.appendChild(check);
    var label = document.createElement('label');
    label.innerHTML=labeltext;
    div.appendChild(label);
    label.for=id;
    check.addEventListener('change',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    return div;
}
function putTextArea(parentdiv,labeltext,initialtext,onchange,context,putLabelTextOutside){
    parentdiv=getDiv(parentdiv);
    var maindiv = putDiv('',parentdiv,'areaparentdiv');
    if(putLabelTextOutside==null)putLabelTextOutside=true;
    if(putLabelTextOutside){
        putDiv(labeltext,maindiv,'textarealabel');
    }
    var div = putDiv('',maindiv,'');
    var area = document.createElement('textarea');
    area.innerHTML=initialtext||'';
    div.appendChild(area);
    area.addEventListener('change',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    area.addEventListener('keyup',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    return maindiv;
}
function putSimpleTextInput(parentdiv,labeltext,initialtext,onchange,context,putLabelTextOutside){
    parentdiv=getDiv(parentdiv);
    var maindiv = putDiv('',parentdiv,'areaparentdiv');
    if(putLabelTextOutside!=null&&putLabelTextOutside){
        putDiv(labeltext,maindiv,'simpleinputlabel');
    }

    var ti = document.createElement('input');
    ti.placeholder=labeltext;
    ti.value=initialtext||'';
    ti.type="text";
    ti.className="ul-input";
    maindiv.appendChild(ti);
    ti.addEventListener('change',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    ti.addEventListener('keyup',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    return ti;
}
function putTextInputWithPlaceholderLabel(parentdiv,placeholdertext,classname,initialtext,onchange,context){
    parentdiv=getDiv(parentdiv);
    var id = Math.random();

    var outerdiv = putDiv(``,parentdiv,'input-field');

    var ti = document.createElement('input');

    ti.value=initialtext||'';
    ti.type="text";
    ti.className=classname;
    outerdiv.appendChild(ti);
    ti.addEventListener('change',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    ti.addEventListener('keyup',function(event){
        if(context!=null){
            onchange.call(context,event);
        }else{
            onchange(event);
        }
    });
    ti.id=id;
    if(placeholdertext!=null){
        putLabel(placeholdertext,outerdiv,'').for=id;
    }


    return ti;
}

function putTable(parent,nrow,ncol){
    parent=getDiv(parent);
    var table = document.createElement("table");
    parent.appendChild(table);
    if(nrow!=null&&ncol!=null){
        for(var i=0;i<nrow;i++){
            var row = table.insertRow(-1);
            for(var j=0;j<ncol;j++){
                row.insertCell(-1);
            }
        }
    }
    return table;

}


function hideEl(el){
    var div;
    if(typeof el === 'string'){
        div = getDiv(el);
    }else{
        div=el;
    }
    if(div!=null){
        div.style.display="none";
    }else{
        console.log("Tried to hide Null element");
    }

}
function showEl(el){
    var div;
    if(typeof el === 'string'){
        div = getDiv(el);
    }else{
        div=el;
    }
    if(div!=null){
        div.style.display=null;
    }else{
        console.log("Tried to show Null element");
    }
}
function getTable(){
    return document.createElement("table");

}
function clearDiv(divName){
    var el= getDiv(divName);
    if(el!=null){
        el.innerHTML="";
    }
}
//synonym for clearDiv
function clearEl(el){
    clearDiv(el);
}
//use this as an onclick listener for a button to hide its parent
function hideMyParent(event){
    var parentel = event.currentTarget.parentElement;
    hideEl(parentel);
}
//use this as an onclick listener for a button to hide its parent
function hideMyParentsParent(event){
    var parentel = event.currentTarget.parentElement.parentElement;
    hideEl(parentel);
}
//accepts element OR divname
//object array:  {'label':label,onclick:function,selected:true|false}
function putDropdownFromArray(div,array){
    div = getDiv(div);  //return element or retrieve div
    var maindiv = putDiv('',div,'epdropdown')
    var button = putDiv('(Choose)',maindiv,'epdropdownbutton');
    var droplist = putDiv('',maindiv,'epdropdowncontent fadeinout');

    for(var i=0;i<array.length;i++){
        (function() {  //for scope
            var item = array[i];
            var a=putA(item.label,droplist,'');
            a.href="#";
            a.onclick=function(event){
                button.innerHTML=item.label;
                if(item.onclick)item.onclick();
                //temporarily hide
                droplist.style.display="none";
                setTimeout(function(){droplist.style.display=null; }, 500);
            }
            if(item.selected!=null&&item.selected==true){
                button.innerHTML=item.label;
            }
        })();
    }
}

function putFormDropdownFromArray(div,array,label){
    div = getDiv(div);  //return element or retrieve div
    var maindiv = putDiv('',div,'input-field')
    var select = document.createElement("select");
    maindiv.appendChild(select);

    var option = document.createElement("option");
    select.appendChild(option);
    option.value="";
    option.innerHTML="Choose one";
    option.disabled=true;


    for(var i=0;i<array.length;i++){
        (function() {  //for scope
            var item = array[i];
            var option = document.createElement("option");
            select.appendChild(option);
            option.value=item.value;
            option.innerHTML=item.label;
            if(item.selected!=null&&item.selected==true){
                option.selected=true;
            }

        })();
    }

    if(label!=null){
        var l = document.createElement("label");
        l.innerHTML=label;
        maindiv.appendChild(l);
    }
    $(select).material_select();
    $(select).change(function(event){
        var value = event.currentTarget.value;
        for(var i=0;i<array.length;i++){
            var item = array[i];
            if(item.value==value){
                if(item.onclick)item.onclick();
            }
        }
    });
}

function fixXmlChars(text){

    if(text==null)return "";
    var  re = /(â€™|â€œ|â€)/g;
    var  re3 = /(â€“)/g;
    var re2 = /(?:\r\n|\r|\n)/g;
    var re4 = /(â€¦)/g;
    text=text.replace(re4,"..");
    text=text.replace(re2,"<p>");
    text=text.replace(re3,"-");
    text=text.replace(re,"&apos;");


    return text;



}
//use this as an onlick listener
function clickExpandHide(event){
    var target = event.target;
    var divname = target.getAttribute("data-divshow");
    var div =getDiv(divname);
    if(div.style.display=="none"){
        div.style.display="block";
    }else{
        div.style.display="none";
    }
}


///polyfill includes

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}


function searchObjectForStringFirstLayer(text,object){
    if(text==null)text="";
    text=text.toLowerCase();
    var item = object;
    for (var key in item) {
        if (item.hasOwnProperty(key)&&item[key]!=null) {
            var value=item[key].toString().toLowerCase();
            if(value.indexOf(text) > -1){
                return true;
            }
        }
    }
    return false;
}

function dynamicLoadScript(name){
    var fileref=document.createElement('script')
    fileref.setAttribute("type","text/javascript")
    fileref.setAttribute("src",name)
    document.head.appendChild(fileref)   ;
}


