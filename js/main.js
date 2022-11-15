const teamContainer = document.querySelector(".container-listmembers")
const teamMembers = [
  
    {
        name:"Wayne",
        surname:"Barnett",
        profession:"Founder & CEO",
        picture:"img/wayne-barnett-founder-ceo.jpg"
        
    },
    {
        name:"Angela",
        surname:"Caroll",
        profession:"Chief Editor",
        picture:"img/angela-caroll-chief-editor.jpg"
        
    },
    {
        name:"Walter",
        surname:"Gordon",
        profession:"Office Manager",
        picture:"img/walter-gordon-office-manager.jpg"
        
    },
    {
        name:"Angela",
        surname:"Lopez",
        profession:"Social Media Manager",
        picture:"img/angela-lopez-social-media-manager.jpg"
        
    },
    {
        name:"Scott",
        surname:"Estrada",
        profession:"Developer",
        picture:"img/scott-estrada-developer.jpg"
       
    },
    {
        name:"Barbara",
        surname:"Ramos",
        profession:"Graphic Designer",
        picture:"img/barbara-ramos-graphic-designer.jpg"
       
    }
    
];

for(let i = 0; i < teamMembers.length; i++){
    const memberInfo = teamMembers[i];
    const listMembers = 
                       `<div class="list-members card ">
                        <img class="img-fluid rounded" src="${memberInfo.picture}"/>
                            <div class="card-body text-center">
                                <h1 class="card-title py-2">${memberInfo.name} ${ memberInfo.surname}</h1>
                                <h3 >${memberInfo.profession}</h3> 
                            </div>
                        </div>`;                   
    teamContainer.innerHTML += listMembers;
    console.log( memberInfo.name + " " + memberInfo.surname + ": " + memberInfo.profession + " --- " + memberInfo.picture);
}