const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildPresences,GatewayIntentBits.GuildMembers] });
const oNickname = {"Firedoggo":"Persona Esempio CEO","Rebecca.c":"Persona Esempio Kai'sa","NoxusGrandGeneral99":"Persona Esempio Demacia",
                  "Lil_Tia":"Persona Esempio 500","norashane":"Persona Esempio Ashish","Leon Marcel":"Persona Esempio Iron","Beglios95":"Persona Esempio Yuumi"}
//"neker97":"Persona Esempio Akali"
async function changeNickname(guild, members) {
  await members.forEach(m => m.setNickname(oNickname[m.user.username]));
}

client.on('ready', async () => {
  // Get the guild and member objects for the user whose nickname you want to change
  //console.log("Eventi: ",Events)
  
  const oKey = Object.keys(oNickname)
  //console.log(guild.members)
  //oKey.includes(m.user.username)
  //console.log(client.guilds.cache.get('687763320266293249'))
  const guild = client.guilds.cache.get('687763320266293249');
  console.log("franco1")
  let members = await guild.members.fetch({ withPresences: true });
  console.log("franco2")
  //console.log(members)
    
  // Set up a background task to change the user's nickname every 60 seconds
  setInterval(async () => {   
    members1 = members.filter(m =>oKey.includes(m.user.username));
    await changeNickname(guild, members1);
  }, 5000);
  
  setInterval(async() =>{
    console.log("franco3")
    members = await guild.members.fetch({ withPresences: true });
    console.log("franco4")
  },15000);
});

client.login('MTA2MTc3NDU3OTcyMDI3ODAxNg.Gb3kaP.NhZaT1cOvAq6jTaZnZM-XtMT1HMgXpvxYJFqAM');
