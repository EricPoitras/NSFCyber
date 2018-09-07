var nsfchat = {

    /* Define variables */
    myusername: "testusername",
    myphonenumber: 2039120765,

    /* List event listeners */
    addPageEventListeners: function(){
        var buttondiv = getDiv("submitNewText");
        var buttondiv2 = getDiv("submitNewChat");
        var buttondiv3 = getDiv("submitSearch");
        var buttondiv4 = getDiv("submitNewMessage");
        var dropdown = getDiv("filterOnlineClient");
        var dropdown2 = getDiv("filterOfflineClient");
        var dropdown3 = getDiv("filterOnlineCommunity");
        var dropdown4 = getDiv("filterOfflineCommunity");
        var dropdown5 = getDiv("filterCounselorCommunity");
        var dropdown6 = getDiv("filterListenerCommunity");
        var hyperlink = getDiv("showMoreClient");
        var hyperlink2 = getDiv("showMoreCommunity");
        var hyperlink3 = getDiv("showMoreConversation");
        var hyperlink4 = getDiv("showMoreDemographic");
        var hyperlink5 = getDiv("showMoreResponses");
        var iconnotice1 = getDiv("clickNotice1");
        var iconnotice2 = getDiv("clickNotice2");
        var iconnotice3 = getDiv("clickNotice3");
        var iconnotice4 = getDiv("clickNotice4");
        var iconnotice5 = getDiv("clickNotice5");
        var iconconversation1 = getDiv("clickConversation1");
        var iconconversation2 = getDiv("clickConversation2");
        var iconconversation3 = getDiv("clickConversation3");
        var iconconversation4 = getDiv("clickConversation4");
        var iconconversation5 = getDiv("clickConversation5");
        var iconmessage1 = getDiv("clickMessage1");
        var iconmessage2 = getDiv("clickMessage2");
        var iconmessage3 = getDiv("clickMessage3");
        var iconmessage4 = getDiv("clickMessage4");
        var iconmessage5 = getDiv("clickMessage5");
        
        /* Getting icon click events for conversation panel - should we simply list a certain number to use id to get elements content, but allow the user to move up and down discourse moves in a conversation? */
        /* Getting icon click events for responses panel - maybe use another component other than carousel... show and hide cards */

        /* Listen for Client Response Submit */
        buttondiv.addEventListener("click", function(event){
            nsfchat.submitNewText();
        });

        /* Listen for Community Chat Post Submit */
        buttondiv2.addEventListener("click", function(event){
            nsfchat.submitNewChat();
        });
        
        /* Listen for Search Submit */
        buttondiv3.addEventListener("click", function(event){
           nsfchat.submitSearch(); 
        });
        
        /* Listen for New Message Submit */
        buttondiv4.addEventListener("click", function(event){
           nsfchat.submitNewMessage(); 
        });
        
        /* Listen for Online Client Filter */
        dropdown.addEventListener("click", function(event){
            nsfchat.filterOnlineClient();
        });
        
        /* Listen for Offline Client Filter */
        dropdown2.addEventListener("click", function(event){
            nsfchat.filterOfflineClient();
        });
        
        /* Listen for Online Commumity Filter */
        dropdown3.addEventListener("click", function(event){
            nsfchat.filterOnlineCommunity();
        });
        
        /* Listen for Offline Commumity Filter */
        dropdown4.addEventListener("click", function(event){
            nsfchat.filterOfflineCommunity();
        });
        
        /* Listen for Counselor Commumity Filter */
        dropdown5.addEventListener("click", function(event){
            nsfchat.filterCounselorCommunity();
        });
        
        /* Listen for Listener Commumity Filter */
        dropdown6.addEventListener("click", function(event){
            nsfchat.filterListenerCommunity();
        });
        
        /* Listen for Show More Client Hyperlink */
        hyperlink.addEventListener("click", function(event){
            nsfchat.showMoreClient();
        });
        
        /* Listen for Show More Community Hyperlink */
        hyperlink2.addEventListener("click", function(event){
           nsfchat.showMoreCommunity(); 
        });
        
        /* Listen for Show More Conversation */
        hyperlink3.addEventListener("click", function(event){
           nsfchat.showMoreConversation(); 
        });
        
        /* Listen for Show More Demographic */
        hyperlink4.addEventListener("click", function(event){
           nsfchat.showMoreDemographic(); 
        });
        
        /* Listen for Show More Responses */
        hyperlink5.addEventListener("click", function(event){
           nsfchat.showMoreResponses(); 
        });
        
        /* Listen for Click on Notice Icon 1 */
        iconnotice1.addEventListener("click", function(event){
           nsfchat.LoadNotificationClient1(); 
        });
        
        /* Listen for Click on Notice Icon 2 */
        iconnotice2.addEventListener("click", function(event){
           nsfchat.LoadNotificationClient2(); 
        });
        
        /* Listen for Click on Notice Icon 3 */
        iconnotice3.addEventListener("click", function(event){
           nsfchat.LoadNotificationClient3(); 
        });
        
        /* Listen for Click on Notice Icon 4 */
        iconnotice4.addEventListener("click", function(event){
           nsfchat.LoadNotificationClient4(); 
        });
        
        /* Listen for Click on Notice Icon 5 */
        iconnotice5.addEventListener("click", function(event){
           nsfchat.LoadNotificationClient5(); 
        });
        
        /* Listen for Click on Conversation Icon 1 */
        iconconversation1.addEventListener("click", function(event){
           nsfchat.LoadConversationClient1(); 
        });
        
        /* Listen for Click on Conversation Icon 2 */
        iconconversation2.addEventListener("click", function(event){
           nsfchat.LoadConversationClient2(); 
        });
        
        /* Listen for Click on Conversation Icon 3 */
        iconconversation3.addEventListener("click", function(event){
           nsfchat.LoadConversationClient3(); 
        });
        
        /* Listen for Click on Conversation Icon 4 */
        iconconversation4.addEventListener("click", function(event){
           nsfchat.LoadConversationClient4(); 
        });
        
        /* Listen for Click on Conversation Icon 5 */
        iconconversation5.addEventListener("click", function(event){
           nsfchat.LoadConversationClient5(); 
        });
        
        /* Listen for Click on Message Icon 1 */
        iconmessage1.addEventListener("click", function(event){
           nsfchat.LoadDirectMessage1(); 
        });
        
        /* Listen for Click on Message Icon 2 */
        iconmessage2.addEventListener("click", function(event){
           nsfchat.LoadDirectMessage2(); 
        });
        
        /* Listen for Click on Message Icon 3 */
        iconmessage3.addEventListener("click", function(event){
           nsfchat.LoadDirectMessage3(); 
        });
        
        /* Listen for Click on Message Icon 4 */
        iconmessage4.addEventListener("click", function(event){
           nsfchat.LoadDirectMessage4(); 
        });
        
        /* Listen for Click on Message Icon 5 */
        iconmessage5.addEventListener("click", function(event){
           nsfchat.LoadDirectMessage5(); 
        });
        
    },

    /* Get Client Reponse */
    submitNewText:function(){
        var newtext = getDiv("newTextToSubmit").value;

        var ttobj = {"rawtext":newtext};
        var convo = getDiv("mainconversation");
        var newtt = nsfchat.renderNewTherapistTT(ttobj);

        convo.appendChild(newtt);

        getDiv("newTextToSubmit").value = "";
    },
    
    /* Set Client Response */
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

    /* Get Community Chat Post */
    submitNewChat:function(){
        var newtext = getDiv("newChatToSubmit").value;

        var ttobj2 = {"rawtext":newtext};
        var convo2 = getDiv("mainchat");
        var newtt2 = nsfchat.renderNewChat(ttobj2);

        var divcomchat = getDiv("maincommunitychat");

        divcomchat.appendChild(nsfchat.renderNewChat(ttobj2));
        getDiv("newChatToSubmit").value = "";
    },

    /* Set Community Chat Post */
    renderNewChat:function(object){
        var p = getp();
        p.innerHTML = "My Name: "+object.rawtext;
        return p;
    },
    
    /* Submit Search Query */
    submitSearch:function(object){
        
    },
    
    /* Submit New Message */
    submitNewMessage:function(object){
        
    },
    
    /* Filter Online Client */
    filterOnlineClient:function(object){
        
    },
    
    /* Filter Offline Client */
    filterOfflineClient:function(object){
        
    },
    
    /* Filter Online Community */
    filterOnlineCommunity:function(object){
        
    },
    
    /* Filter Offline Community */
    filterOfflineCommunity:function(object){
        
    },
    
    /* Filter Counselor Community */
    filterCounselorCommunity:function(object){
        
    },
    
    /* Filter Listener Community */
    filterListenerCommunity:function(object){
        
    },
    
    /* Show More Client */
    showMoreClient:function(object){
        
    },
    
    /* Show More Community */
    showMoreCommunity:function(object){
        
    },
    
    /* Show More Conversation */
    showMoreConversation:function(object){
        
    },
    
    /* Show More Demographics */
    showMoreDemographic:function(object){
        
    },
    
    /* Show More Responses */
    showMoreResponses:function(object){
        
    },
    
    /* Load Client 1 Notification */
    LoadNotificationClient1:function(object){
        
    },
    
    /* Load Client 2 Notification */
    LoadNotificationClient2:function(object){
        
    },
    
    /* Load Client 3 Notification */
    LoadNotificationClient3:function(object){
        
    },
    
    /* Load Client 4 Notification */
    LoadNotificationClient4:function(object){
        
    },
    
    /* Load Client 5 Notification */
    LoadNotificationClient5:function(object){
        
    },
    
    /* Load Client 1 Conversation */
    LoadConversationClient1:function(object){
        
    },
    
    /* Load Client 2 Conversation */
    LoadConversationClient2:function(object){
        
    },
    
    /* Load Client 3 Conversation */
    LoadConversationClient3:function(object){
        
    },
    
    /* Load Client 4 Conversation */
    LoadConversationClient4:function(object){
        
    },
    
    /* Load Client 5 Conversation */
    LoadConversationClient5:function(object){
        
    },
    
    /* Load Direct Message 1 */
    LoadDirectMessage1:function(object){
        
    },
    
    /* Load Direct Message 2 */
    LoadDirectMessage2:function(object){
        
    },
    
    /* Load Direct Message 3 */
    LoadDirectMessage3:function(object){
        
    },
    
    /* Load Direct Message 4 */
    LoadDirectMessage4:function(object){
        
    },
    
    /* Load Direct Message 5 */
    LoadDirectMessage5:function(object){
        
    }
    
    
/* End of nsfchat.js */
};




