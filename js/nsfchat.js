var nsfchat = {

    /* Define variables */
    myusername: "testusername",
    myphonenumber: 2039120765,

    /* List event listeners */
    addPageEventListeners: function(){
        
        /* List of Controls to Handle User Interactions */
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
        var clickLogin = getDiv("clickLogin");
        var shareClient1 = getDiv("shareClient1");
        var shareClient2 = getDiv("shareClient2");
        var shareClient2 = getDiv("shareClient3");
        var rateSmileTherapist1 = getDiv("rateSmileTherapist1");
        var rateMehTherapist1 = getDiv("rateMehTherapist1");
        var rateFrownTherapist1 = getDiv("rateFrownTherapist1");
        var rateSmileTherapist2 = getDiv("rateSmileTherapist2");
        var rateMehTherapist2 = getDiv("rateMehTherapist2");
        var rateFrownTherapist2 = getDiv("rateFrownTherapist2");
        var rateSmileTherapist3 = getDiv("rateSmileTherapist3");
        var rateMehTherapist3 = getDiv("rateMehTherapist3");
        var rateFrownTherapist3 = getDiv("rateFrownTherapist3");
        var clickIndFeedback1 = getDiv("clickIndFeedback1");
        var clickIndFeedback2 = getDiv("clickIndFeedback2");
        var clickIndFeedback3 = getDiv("clickIndFeedback3");
        var clickComFeedback1 = getDiv("clickComFeedback1");
        var clickComFeedback2 = getDiv("clickComFeedback2");
        var clickComFeedback3 = getDiv("clickComFeedback3");
        var rateSmileCom1 = getDiv("rateSmileCom1");
        var rateMehCom1 = getDiv("rateMehCom1");
        var rateFrownCom1 = getDiv("rateFrownCom1");
        var rateSmileCom2 = getDiv("rateSmileCom2");
        var rateMehCom2 = getDiv("rateMehCom2");
        var rateFrownCom2 = getDiv("rateFrownCom2");
        var rateSmileCom3 = getDiv("rateSmileCom3");
        var rateMehCom3 = getDiv("rateMehCom3");
        var rateFrownCom3 = getDiv("rateFrownCom3");
        var reflectTherapist1 = getDiv("ReflectTherapist1");
        var affirmTherapist1 = getDiv("AffirmTherapist1");
        var refuteTherapist1 = getDiv("RefuteTherapist1");
        var summaryTherapist1 = getDiv("SummaryTherapist1");
        var openTherapist1 = getDiv("OpenTherapist1");
        var closeTherapist1 = getDiv("CloseTherapist1");
        var reflectTherapist2 = getDiv("ReflectTherapist2");
        var affirmTherapist2 = getDiv("AffirmTherapist2");
        var refuteTherapist2 = getDiv("RefuteTherapist2");
        var summaryTherapist2 = getDiv("SummaryTherapist2");
        var openTherapist2 = getDiv("OpenTherapist2");
        var closeTherapist2 = getDiv("CloseTherapist2");
        var reflectTherapist3 = getDiv("ReflectTherapist3");
        var affirmTherapist3 = getDiv("AffirmTherapist3");
        var refuteTherapist3 = getDiv("RefuteTherapist3");
        var summaryTherapist3 = getDiv("SummaryTherapist3");
        var openTherapist3 = getDiv("OpenTherapist3");
        var closeTherapist3 = getDiv("CloseTherapist3");
        var reflectCom1 = getDiv("ReflectCom1");
        var affirmCom1 = getDiv("AffirmCom1");
        var refuteCom1 = getDiv("RefuteCom1");
        var summaryCom1 = getDiv("SummaryCom1");
        var openCom1 = getDiv("OpenCom1");
        var closeCom1 = getDiv("CloseCom1");
        var reflectCom2 = getDiv("ReflectCom2");
        var affirmCom2 = getDiv("AffirmCom2");
        var refuteCom2 = getDiv("RefuteCom2");
        var summaryCom2 = getDiv("SummaryCom2");
        var openCom2 = getDiv("OpenCom2");
        var closeCom2 = getDiv("CloseCom2");
        var reflectCom3 = getDiv("ReflectCom3");
        var affirmCom3 = getDiv("AffirmCom3");
        var refuteCom3 = getDiv("RefuteCom3");
        var summaryCom3 = getDiv("SummaryCom3");
        var openCom3 = getDiv("OpenCom3");
        var closeCom3 = getDiv("CloseCom3");
        var clickCloseDM = getDiv("clickCloseDM");
        var clickMIWiz1 = getDiv("clickMIWiz1");
        var clickMIWiz2 = getDiv("clickMIWiz2");
        var clickMIWiz3 = getDiv("clickMIWiz3");
        
        /* List of HTML Elements to toggle visibility and load data */
        var panelCommunity = getDiv("panelCommunity");
        var panelConversation = getDiv("panelConversation");
        var panelDemographic = getDiv("panelDemographic");
        var panelAnalytics = getDiv("panelAnalytics");
        var panelCommunityResponse = getDiv("panelCommunityResponse");
        var panelCommunityConsultation = getDiv("panelCommunityConsultation");
        var panelResponseArea = getDiv("panelResponseArea");
        
        var cardtherapist1content = getDiv("cardtherapist1content");
        var cardtherapist1rating = getDiv("cardtherapist1rating");
        var cardtherapist2content = getDiv("cardtherapist2content");
        var cardtherapist2rating = getDiv("cardtherapist2rating");
        var cardtherapist3content = getDiv("cardtherapist3content");
        var cardtherapist3rating = getDiv("cardtherapist3rating");
        
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
        
        /* Listen for Click on Login Button */
        clickLogin.addEventListener("click", function(event){
           nsfchat.UserLogin(); 
        });
        
        /* Listen for Share Client Message to Community Chat */
        shareClient1.addEventListener("click", function(event){
           nsfchat.CopyPasteClient1();
        });
        
        shareClient2.addEventListener("click", function(event){
           nsfchat.CopyPasteClient2();
        });
        
        shareClient3.addEventListener("click", function(event){
           nsfchat.CopyPasteClient3();
        });
        
        /* Listen for Ratings of Therapist Response */
        rateSmileTherapist1.addEventListener("click", function(event){
            nsfchat.RateSmileTherapist1();
        });
        
        rateSmileTherapist2.addEventListener("click", function(event){
            nsfchat.RateSmileTherapist2();
        });
        
        rateSmileTherapist3.addEventListener("click", function(event){
            nsfchat.RateSmileTherapist3();
        });
        
        rateMehTherapist1.addEventListener("click", function(event){
            nsfchat.RateMehTherapist1();
        });
        
        rateMehTherapist2.addEventListener("click", function(event){
            nsfchat.RateMehTherapist2();
        });
        
        rateMehTherapist3.addEventListener("click", function(event){
            nsfchat.RateMehTherapist3();
        });
        
        rateFrownTherapist1.addEventListener("click", function(event){
            nsfchat.RateFrownTherapist1();
        });
        
        rateFrownTherapist2.addEventListener("click", function(event){
            nsfchat.RateFrownTherapist2();
        });
        
        rateFrownTherapist3.addEventListener("click", function(event){
            nsfchat.RateFrownTherapist3();
        });
        
        /* Listen for Feedback Requests */
        clickIndFeedback1.addEventListener("click", function(event){
            nsfchat.clickIndFeedback1();
        });
        
        clickIndFeedback2.addEventListener("click", function(event){
            nsfchat.clickIndFeedback2();
        });
        
        clickIndFeedback3.addEventListener("click", function(event){
            nsfchat.clickIndFeedback3();
        });
        
        clickComFeedback1.addEventListener("click", function(event){
            nsfchat.clickComFeedback1();
        });
        
        clickComFeedback2.addEventListener("click", function(event){
            nsfchat.clickComFeedback2();
        });
        
        clickComFeedback3.addEventListener("click", function(event){
            nsfchat.clickComFeedback3();
        });
        
        /* Listen for Ratings of Community Responses */
        rateSmileCom1.addEventListener("click", function(event){
            nsfchat.RateSmileCom1();
        });
        
        rateSmileCom2.addEventListener("click", function(event){
            nsfchat.RateSmileCom2();
        });
        
        rateSmileCom3.addEventListener("click", function(event){
            nsfchat.RateSmileCom3();
        });
        
        rateMehCom1.addEventListener("click", function(event){
            nsfchat.RateMehCom1();
        });
        
        rateMehCom2.addEventListener("click", function(event){
            nsfchat.RateMehCom2();
        });
        
        rateMehCom3.addEventListener("click", function(event){
            nsfchat.RateMehCom3();
        });
        
        rateFrownCom1.addEventListener("click", function(event){
            nsfchat.RateFrownCom1();
        });
        
        rateFrownCom2.addEventListener("click", function(event){
            nsfchat.RateFrownCom2();
        });
        
        rateFrownCom3.addEventListener("click", function(event){
            nsfchat.RateFrownCom3();
        });
        
        reflectTherapist1.addEventListener("click", function(event){
           nsfchat.CategorizeReflectTherapist1(); 
        });
        
        affirmTherapist1.addEventListener("click", function(event){
           nsfchat.CategorizeAffirmTherapist1(); 
        });
        
        refuteTherapist1.addEventListener("click", function(event){
           nsfchat.CategorizeRefuteTherapist1(); 
        });
        
        summaryTherapist1.addEventListener("click", function(event){
           nsfchat.CategorizeSummaryTherapist1(); 
        });
        
        openTherapist1.addEventListener("click", function(event){
           nsfchat.CategorizeOpenTherapist1(); 
        });
        
        closeTherapist1.addEventListener("click", function(event){
           nsfchat.CategorizeCloseTherapist1(); 
        });
        
        reflectTherapist2.addEventListener("click", function(event){
           nsfchat.CategorizeReflectTherapist2(); 
        });
        
        affirmTherapist2.addEventListener("click", function(event){
           nsfchat.CategorizeAffirmTherapist2(); 
        });
        
        refuteTherapist2.addEventListener("click", function(event){
           nsfchat.CategorizeRefuteTherapist2(); 
        });
        
        summaryTherapist2.addEventListener("click", function(event){
           nsfchat.CategorizeSummaryTherapist2(); 
        });
        
        openTherapist2.addEventListener("click", function(event){
           nsfchat.CategorizeOpenTherapist2(); 
        });
        
        closeTherapist2.addEventListener("click", function(event){
           nsfchat.CategorizeCloseTherapist2(); 
        });
        
        reflectTherapist3.addEventListener("click", function(event){
           nsfchat.CategorizeReflectTherapist3(); 
        });
        
        affirmTherapist3.addEventListener("click", function(event){
           nsfchat.CategorizeAffirmTherapist3(); 
        });
        
        refuteTherapist3.addEventListener("click", function(event){
           nsfchat.CategorizeRefuteTherapist3(); 
        });
        
        summaryTherapist3.addEventListener("click", function(event){
           nsfchat.CategorizeSummaryTherapist3(); 
        });
        
        openTherapist3.addEventListener("click", function(event){
           nsfchat.CategorizeOpenTherapist3(); 
        });
        
        closeTherapist3.addEventListener("click", function(event){
           nsfchat.CategorizeCloseTherapist3(); 
        });
        
        reflectCom1.addEventListener("click", function(event){
           nsfchat.CategorizeReflectCom1(); 
        });
        
        affirmCom1.addEventListener("click", function(event){
           nsfchat.CategorizeAffirmCom1(); 
        });
        
        refuteCom1.addEventListener("click", function(event){
           nsfchat.CategorizeRefuteCom1(); 
        });
        
        summaryCom1.addEventListener("click", function(event){
           nsfchat.CategorizeSummaryCom1(); 
        });
        
        openCom1.addEventListener("click", function(event){
           nsfchat.CategorizeOpenCom1(); 
        });
        
        closeCom1.addEventListener("click", function(event){
           nsfchat.CategorizeCloseCom1(); 
        });
        
        reflectCom2.addEventListener("click", function(event){
           nsfchat.CategorizeReflectCom2(); 
        });
        
        affirmCom2.addEventListener("click", function(event){
           nsfchat.CategorizeAffirmCom2(); 
        });
        
        refuteCom2.addEventListener("click", function(event){
           nsfchat.CategorizeRefuteCom2(); 
        });
        
        summaryCom2.addEventListener("click", function(event){
           nsfchat.CategorizeSummaryCom2(); 
        });
        
        openCom2.addEventListener("click", function(event){
           nsfchat.CategorizeOpenCom2(); 
        });
        
        closeCom2.addEventListener("click", function(event){
           nsfchat.CategorizeCloseCom2(); 
        });
        
        reflectCom3.addEventListener("click", function(event){
           nsfchat.CategorizeReflectCom3(); 
        });
        
        affirmCom3.addEventListener("click", function(event){
           nsfchat.CategorizeAffirmCom3(); 
        });
        
        refuteCom3.addEventListener("click", function(event){
           nsfchat.CategorizeRefuteCom3(); 
        });
        
        summaryCom3.addEventListener("click", function(event){
           nsfchat.CategorizeSummaryCom3(); 
        });
        
        openCom3.addEventListener("click", function(event){
           nsfchat.CategorizeOpenCom3(); 
        });
        
        closeCom3.addEventListener("click", function(event){
           nsfchat.CategorizeCloseCom3(); 
        });
        
        clickCloseDM.addEventListener("click", function(event){
           nsfchat.CloseDirectMessageWindow(); 
        });
        
        clickMIWiz1.addEventListener("click", function(event){
           nsfchat.LoadAnalyticsResponse1(); 
        });
        
        clickMIWiz2.addEventListener("click", function(event){
           nsfchat.LoadAnalyticsResponse2(); 
        });
        
        clickMIWiz3.addEventListener("click", function(event){
           nsfchat.LoadAnalyticsResponse3(); 
        });
        
    },
    
    /* View Router */
    viewRouter:function(view){
        switch(view){
            case 'clientlanding':
                console.log("Route to therapist landing view...");
                /* Display only the conversation */
            case 'therapistlanding':
                console.log("Route to therapist landing view...");
                /* Display only the client list for a particular user */
                /* Hide the direct messaging window */
                hideEl(directmessagewindow);
                /* Hide the community panel */
                hideEl(panelCommunity);
                /* Hide the conversation panel */
                hideEl(panelConversation);
                /* Hide the demographic panel */
                hideEl(panelDemographic);
                /* Hide the analytics panel */
                hideEl(panelAnalytics);
                /* Hide the community response panel */
                hideEl(panelCommunityResponse);
                /* Hide the community consultation panel */
                hideEl(panelCommunityConsultation);
                break;
            case 'clientdiscussionview':
                console.log("Route to client discussion view...");
                /* Display for users as clients their discussions with therapists */
                break;
            case 'therapistdiscussionview':
                console.log("Route to therapist discussion view...");
                /* Display for therapists their discussions with clients */
                /* Hide the direct messaging window */
                hideEl(directmessagewindow);
                /* Show the community panel */
                showEl(panelCommunity);
                /* Show the conversation panel */
                showEl(panelConversation);
                /* Show the demographic panel */
                showEl(panelDemographic);
                /* Hide the analytics panel */
                hideEl(panelAnalytics);
                /* Hide the community response panel */
                hideEl(panelCommunityResponse);
                /* Hide the community consultation panel */
                hideEl(panelCommunityConsultation);
                /* Hide the response panel area */
                hideEl(panelResponseArea);
                break;
            case 'clientresponseview':
                console.log("Route to client response view...");
                /* Display for clients to respond to latest therapist response */
                break;
            case 'therapistresponseview':
                console.log("Route to therapist response view...");
                /* Display for therapist to respond to latest patient response */
                /* Hide the direct messaging window */
                hideEl(directmessagewindow);
                /* Show the community panel */
                showEl(panelCommunity);
                /* Show the conversation panel */
                showEl(panelConversation);
                /* Show the demographic panel */
                showEl(panelDemographic);
                /* Hide the analytics panel */
                hideEl(panelAnalytics);
                /* Hide the community response panel */
                hideEl(panelCommunityResponse);
                /* Hide the community consultation panel */
                hideEl(panelCommunityConsultation);
                /* Hide the response panel area */
                showEl(panelResponseArea);
                break;
            case 'therapistcommunityresponseview':
                console.log("Route to therapist community response view...");
                /* Display for therapists to rate responses submitted by members of the community */
                /* Hide the direct messaging window */
                hideEl(directmessagewindow);
                /* Show the community panel */
                showEl(panelCommunity);
                /* Show the conversation panel */
                showEl(panelConversation);
                /* Show the demographic panel */
                showEl(panelDemographic);
                /* Hide the analytics panel */
                hideEl(panelAnalytics);
                /* Hide the community response panel */
                showEl(panelCommunityResponse);
                /* Hide the community consultation panel */
                hideEl(panelCommunityConsultation);
                /* Hide the response panel area */
                hideEl(panelResponseArea);
                break;
                
            /* This is not used yet... based on the data when all the feedback has been provided to avoid contamination */
            case 'therapistcommunityconsultationview':
                console.log("Route to therapist community response view...");
                /* Display for therapists to rate responses submitted by members of the community */
                /* Hide the direct messaging window */
                hideEl(directmessagewindow);
                /* Show the community panel */
                showEl(panelCommunity);
                /* Show the conversation panel */
                showEl(panelConversation);
                /* Show the demographic panel */
                showEl(panelDemographic);
                /* Hide the analytics panel */
                hideEl(panelAnalytics);
                /* Hide the community response panel */
                showEl(panelCommunityResponse);
                /* Hide the community consultation panel */
                showEl(panelCommunityConsultation);
                /* Hide the response panel area */
                hideEl(panelResponseArea);
                break;
        }
    },

    /* Get Client Reponse */
    submitNewText:function(){
        var newtext = getDiv("newTextToSubmit").value;

        var ttobj = {"rawtext":newtext};
        var convo = getDiv("mainconversation");
        var newtt = nsfchat.renderNewTherapistTT(ttobj);

        convo.appendChild(newtt);

        getDiv("newTextToSubmit").value = "";
        
        /* POST new text to server */
        
        /* GET communmity responses */
        
        /* Refresh the HTML content with commumnity responses */
        
        /* Route to the community responses view or consultation view based on whether or not all responses are rated by the user */
        nsfchat.viewRouter("therapistcommunityresponseview");
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
        /* Add message from textbox to threaded discussion */
        
        /* Save threaded discussion to database */
       
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
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 2 Notification */
    LoadNotificationClient2:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 3 Notification */
    LoadNotificationClient3:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 4 Notification */
    LoadNotificationClient4:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 5 Notification */
    LoadNotificationClient5:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 1 Conversation */
    LoadConversationClient1:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 2 Conversation */
    LoadConversationClient2:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 3 Conversation */
    LoadConversationClient3:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 4 Conversation */
    LoadConversationClient4:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Client 5 Conversation */
    LoadConversationClient5:function(object){
        /* Get Data About Client 1 */
        
        /* Refresh HTML values */
        
        /* Route to therapist discussion view or response view based on state of the conversation - everything rated and categorized, and client responded */
        nsfchat.viewRouter("therapistdiscussionview");
        nsfchat.viewRouter("therapistresponseview");
    },
    
    /* Load Direct Message 1 */
    LoadDirectMessage1:function(object){
        /* Show user name in direct message window */
        
        /* Load threaded discussion with therapist in direct messaging window */
        
        /* Show direct message window */
        showEl(directmessagewindow);
    },
    
    /* Load Direct Message 2 */
    LoadDirectMessage2:function(object){
        /* Show user name in direct message window */
        
        /* Load threaded discussion with therapist in direct messaging window */
        
        /* Show direct message window */
        showEl(directmessagewindow);
    },
    
    /* Load Direct Message 3 */
    LoadDirectMessage3:function(object){
        /* Show user name in direct message window */
        
        /* Load threaded discussion with therapist in direct messaging window */
        
        /* Show direct message window */
        showEl(directmessagewindow);
    },
    
    /* Load Direct Message 4 */
    LoadDirectMessage4:function(object){
        /* Show user name in direct message window */
        
        /* Load threaded discussion with therapist in direct messaging window */
        
        /* Show direct message window */
        showEl(directmessagewindow);
    },
    
    /* Load Direct Message 5 */
    LoadDirectMessage5:function(object){
        /* Show user name in direct message window */
        
        /* Load threaded discussion with therapist in direct messaging window */
        
        /* Show direct message window */
        showEl(directmessagewindow);
    },
    
    /* Login */
    UserLogin:function(object){
        
    },
    
    /* Copy and Paste Client Message in Community Chat */
    CopyPasteClient1:function(object){
        
    },
    
    CopyPasteClient2:function(object){
        
    },
    
    CopyPasteClient3:function(object){
        
    },
    
    /* Save Rating for Therapist Response */
    
    RateSmileTherapist1:function(object){
        
    },
    
    RateSmileTherapist2:function(object){
        
    },
    
    RateSmileTherapist3:function(object){
        
    },
    
    RateMehTherapist1:function(object){
        
    },
    
    RateMehTherapist2:function(object){
        
    },
    
    RateMehTherapist3:function(object){
        
    },
    
    RateFrownTherapist1:function(object){
        
    },
    
    RateFrownTherapist2:function(object){
        
    },
    
    RateFrownTherapist3:function(object){
        
    },
    
    /* Deliver Individual and Community Feedback (NLP and CrowdSource) */
    
    clickIndFeedback1:function(object){
        nsfchat.LoadAnalyticsResponse1(); 
    },
    
    clickIndFeedback2:function(object){
        nsfchat.LoadAnalyticsResponse2();
    },
    
    clickIndFeedback3:function(object){
        nsfchat.LoadAnalyticsResponse3();
    },
    
    clickComFeedback1:function(object){
        /* GET communmity responses */
        
        /* Refresh the HTML content with commumnity responses */
        
        /* Route to the community responses view or consultation view based on whether or not all responses are rated by the user */
        showEl("panelCommunityResponse");
    },
    
    clickComFeedback2:function(object){
        /* GET communmity responses */
        
        /* Refresh the HTML content with commumnity responses */
        
        /* Route to the community responses view or consultation view based on whether or not all responses are rated by the user */
        showEl("panelCommunityResponse");
    },
    
    clickComFeedback3:function(object){
        /* GET communmity responses */
        
        /* Refresh the HTML content with commumnity responses */
        
        /* Route to the community responses view or consultation view based on whether or not all responses are rated by the user */
        showEl("panelCommunityResponse");
    },
    
    /* Save Ratings for Community Responses */
    
    RateSmileCom1:function(object){
        
    },
    
    RateSmileCom2:function(object){
        
    },
    
    RateSmileCom3:function(object){
        
    },
    
    RateMehCom1:function(object){
        
    },
    
    RateMehCom2:function(object){
        
    },
    
    RateMehCom3:function(object){
        
    },
    
    RateFrownCom1:function(object){
        
    },
    
    RateFrownCom2:function(object){
        
    },
    
    RateFrownCom3:function(object){
        
    },
    
    CategorizeReflectTherapist1:function(object){
        
    },
    
    CategorizeAffirmTherapist1:function(object){
        
    },
    
    CategorizeRefuteTherapist1:function(object){
        
    },
    
    CategorizeSummaryTherapist1:function(object){
        
    },
    
    CategorizeOpenTherapist1:function(object){
        
    },
    
    CategorizeCloseTherapist1:function(object){
        
    },
    
    CategorizeReflectTherapist2:function(object){
        
    },
    
    CategorizeAffirmTherapist2:function(object){
        
    },
    
    CategorizeRefuteTherapist2:function(object){
        
    },
    
    CategorizeSummaryTherapist2:function(object){
        
    },
    
    CategorizeOpenTherapist2:function(object){
        
    },
    
    CategorizeCloseTherapist2:function(object){
        
    },
    
    CategorizeReflectTherapist3:function(object){
        
    },
    
    CategorizeAffirmTherapist3:function(object){
        
    },
    
    CategorizeRefuteTherapist3:function(object){
        
    },
    
    CategorizeSummaryTherapist3:function(object){
        
    },
    
    CategorizeOpenTherapist3:function(object){
        
    },
    
    CategorizeCloseTherapist3:function(object){
        
    },
    
    CategorizeReflectCom1:function(object){
        
    },
    
    CategorizeAffirmCom1:function(object){
        
    },
    
    CategorizeRefuteCom1:function(object){
        
    },
    
    CategorizeSummaryCom1:function(object){
        
    },
    
    CategorizeOpenCom1:function(object){
        
    },
    
    CategorizeCloseCom1:function(object){
        
    },
    
    CategorizeReflectCom2:function(object){
        
    },
    
    CategorizeAffirmCom2:function(object){
        
    },
    
    CategorizeRefuteCom2:function(object){
        
    },
    
    CategorizeSummaryCom2:function(object){
        
    },
    
    CategorizeOpenCom2:function(object){
        
    },
    
    CategorizeCloseCom2:function(object){
        
    },
    
    CategorizeReflectCom3:function(object){
        
    },
    
    CategorizeAffirmCom3:function(object){
        
    },
    
    CategorizeRefuteCom3:function(object){
        
    },
    
    CategorizeSummaryCom3:function(object){
        
    },
    
    CategorizeOpenCom3:function(object){
        
    },
    
    CategorizeCloseCom3:function(object){
        
    },
    
    CloseDirectMessageWindow:function(object){
        hideEl(directmessagewindow);
    },
    
    LoadAnalyticsResponse1:function(object){
        /* GET Analytics related to response 1 */
        
        /* Refresh analytics panel HTML */
        
        /* Show analytics panel */
        showEl(panelAnalytics);
    },
    
    LoadAnalyticsResponse2:function(object){
        /* GET Analytics related to response 2 */
        
        /* Refresh analytics panel HTML */
        
        /* Show analytics panel */
        showEl(panelAnalytics);
    },
    
    LoadAnalyticsResponse3:function(object){
        /* GET Analytics related to response 3 */
        
        /* Refresh analytics panel HTML */
        
        /* Show analytics panel */
        showEl(panelAnalytics);
    }
    
    
/* End of nsfchat.js */
};




