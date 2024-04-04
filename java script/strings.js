//ways to create string
//1.literal syntax
const msg="Welecome to mern full stack development";
//2.object syntax
const msg1=new String("Welcome folks");
const msg2="Welcome folks";
//recommended one is literal syntax

//==,===
console.log(msg1==msg2);//true
console.log(msg1===msg2);//false

//==
//loginapp
//usernmae="admin",password="admin123"
const username="admin";
const password="admin123";
if((username=="admin")&&(password=="admin123"))
{
    console.log("sucess");

}
else{
    console.log("Fail");
}

//how to get length of a string
//length
console.log(msg.length);

//how to get portion of astring
//slice(),substring(),substr()
console.log(msg.slice(16));
console.log(msg.slice(16,25));//inclusive,end-1
console.log(msg.slice(-25,-10));//25-10=15
console.log(msg.substring(16));
console.log(msg.substring(16,25));
console.log(msg.substring(-25,-10));
//substring() doesn't allow negative values
console.log(msg.substr(16));
console.log(msg.substr(16,9));//start value index,end is
//strike symbol means its outdated,legacy,old

//how to concate more than one string
//+,concat()
console.log(msg+" "+msg1);
console.log(msg.concat(" "+msg1));

//replace string content
//replace()
console.log(msg.replace("Welcome","warmWelcome"));
console.log(msg2.replace("/welcome/i","warmWelcome"));
console.log(msg.replace(/welcome/g,"warmWelcome"));
//how to search specific portion from the string
//indexof(),lastIndexof(),search()
console.log(msg.indexOf("mern"));
console.log(msg.indexOf("welcome",10));
console.log(msg.lastIndexOf("welcome"));
console.log(msg.lastIndexOf("Welcome",20));
console.log(msg.search("welcome"));
//string to uppercase()
//string to lowercase()
console.log(msg.toLowerCase());
console.log(msg1.toUpperCase());
//string charAt
console.log(msg.charAt("20"));
//stringcharCodeAt
console.log( msg1.charCodeAt("mern"));
//string at()
console.log(msg1.at(2));
//string[-]
console.log(msg[0]);
//string trim()
console.log(msg2.trimStart());
console.log(msg2.trimEnd());
//string padStart() and string padEnd()
console.log(msg2.padStart("folks"));
console.log(msg2.padEnd("hi"));
//string repeat()
console.log(msg1.repeat(1));
//string match()

console.log(msg1.match(/mern/));
//string matchAll()
console.log(msg1.matchAll(/mern/g));
//string startsWith()
console.log(msg2.startsWith());
//string ends With()
console.log(msg2.endsWith());
//string LowerCase()
console.log(msg.toLowerCase());
//string upperCase()
console.log(msg1.toUpperCase());
//string split()
console.log(msg.split());
//string search()
console.log(msg.search("welecome"));
//advance javascript(ES6)
//multiline strings
const productName='realme';//backline tick
const aboutDiet='Founded in 200,under the sponsorship of Sri Dhanekula Ravindranath Tagore,Dhanekula Institute of Engineering and Technology in Vijayawada is affiliated to JNTUK,  Kakinada. DIET offers Diploma in four disciplines, B. Tech. in five specializations, and M.';
console.log(aboutDiet);

//string interpolation
const firstName="tharuni";
const lastName="Kota";
console.log('$(firstName)$(lastName)');














