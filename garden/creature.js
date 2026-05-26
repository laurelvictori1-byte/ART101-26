// store all creatures in array

let allCreatures=[];

// functions
// function to grab data from form

function getCreatureFromForm(){
    
    const freshCreature={
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val(),
        SSN: $("#crSSN").val()
    };

return freshCreature;

};

async function getRandomName() {
    // goes and grabs data from api
    const response = await fetch("https://api.gofakeit.com/funcs/petname", {method: "GET",});
    // converts the response into plain text
    const nameRandom = await response.text();

    console.log("Got name:", nameRandom);
    return nameRandom;
}

async function getRandomColor() {
    // goes and grabs data from api
    const response = await fetch("https://api.gofakeit.com/funcs/hexcolor", {method: "GET",});
    // converts the response into plain text
    const RandomColor = await response.text();

    console.log("Got color:", RandomColor);
    return RandomColor;
}

async function getRandomSSN() {
    // goes and grabs data from api
    const response = await fetch("https://api.gofakeit.com/funcs/ssn", {method: "GET",});
    // converts the response into plain text
    const RandomSSN = await response.text();

    console.log("Got ssn:", RandomSSN);
    return RandomSSN;
}

// random creature
async function randomizeCreature() {

    const eyesRandom= Math.floor(Math.random() * 5) +1;
    const nameRandom= await getRandomName();
    const RandomColor= await getRandomColor();
    const RandomSSN= await getRandomSSN();

    const randomCreature={
        name: nameRandom,
        color: RandomColor,
        eyesNum: eyesRandom,
        SSN: RandomSSN
    };

return randomCreature;

}

// checks function
function isCreatureValid(creature) {
    if(creature.name=== "") return false;
    if (creature.name.length>12) return false;
    if (isNaN(creature.eyesNum) || creature.eyesNum>5) return false; 
    if (creature.SSN.length>9) return false;
    return true;
}

// adds creature to page
function renderCreature(creature) {
    let crEyesHtml="";
    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHtml=crEyesHtml+ "<div class 'eye'>👁️</div>";
    }

    const html=`
        <div class="creature">
            <div class="creature-body" style="background-color: ${creature.color}">${crEyesHtml}</div>
            <div class="creature-info">${creature.name}</div>
            <div class="creature-ssn">${creature.SSN}</div>
        </div>
        `;
    return html;
}

// append creature to page
function addCreatureToDOM(creature) {
    const html=renderCreature(creature);
    $("#creature-list").append(html);
}

// the main brain
$("#crAdd").click(async function(){
    let newCreature;
    // choose random or manual
    // if checked go random mode
    if($("#crRandom").is(":checked") ) {
        newCreature = await randomizeCreature();
        console.log("random way");
    }
    // if not checked go manual mode
    else {newCreature = getCreatureFromForm();
    console.log("manual way");
    }

    // create creature object from form inputs
    // const newCreature = getCreatureFromForm();
    console.log(newCreature);

    // safety checks
    console.log(isCreatureValid(newCreature) ); 
    if(isCreatureValid(newCreature)==false ) {// true==false
        return; // stops the function "click"
    }

    // add creature to page
    addCreatureToDOM(newCreature)

    // save to memory 
    allCreatures.push(newCreature);
    
    // reset form to prepare for next iteration

});