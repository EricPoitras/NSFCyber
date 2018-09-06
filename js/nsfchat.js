



var nsfchat = {

    myusername: "testusername",
    myphonenumber: 2039120765,





    addPageEventListeners: function(){
        var buttondiv = getDiv("submitNewText");
        var buttondiv2 = getDiv("submitNewChat");

        buttondiv.addEventListener("click", function(event){
            nsfchat.submitNewText();
        });

        buttondiv2.addEventListener("click", function(event){
            nsfchat.submitNewChat();
        });
    },


    submitNewText:function(){
        var newtext = getDiv("newTextToSubmit").value;

        var ttobj = {"rawtext":newtext};
        var convo = getDiv("mainconversation");
        var newtt = nsfchat.renderNewTherapistTT(ttobj);

        convo.appendChild(newtt);

        getDiv("newTextToSubmit").value = "";
    },


    renderNewTherapistTT:function(object){
        var blankdiv = getDiv();
        blankdiv.className = "row";




        var html = `<div class="col">
                                    <h6 class="card-subtitle mb-2 text-muted patient">John Doe 5, Sat, Oct 8, 5:10PM</h6>
                                    <div class="card client">
                                      <div class="card-body text-white">
                                        ${object.rawtext}
                                      </div>
                                      <div class="p-1 ml-auto">
                                        <i class="fa fa-share-square-o" aria-hidden="true"></i>  
                                      </div>
                                    </div>
                                </div>
                                <div class="col">

                                </div>`;

        blankdiv.innerHTML = html;
        return blankdiv;
    },

    submitNewChat:function(){
        var newtext = getDiv("newChatToSubmit").value;

        var ttobj2 = {"rawtext":newtext};
        var convo2 = getDiv("mainchat");
        var newtt2 = nsfchat.renderNewChat(ttobj2);

        var divcomchat = getDiv("maincommunitychat");

        divcomchat.appendChild(nsfchat.renderNewChat(ttobj2));
        getDiv("newChatToSubmit").value = "";
    },

    renderNewChat:function(object){
        var p = getp();
        p.innerHTML = "My Name: "+object.rawtext;
        return p;

    }







};




