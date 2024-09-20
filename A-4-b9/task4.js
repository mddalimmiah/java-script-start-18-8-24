function password(info){
    if(typeof info !=='object' || !info.name || !info.birthYear || !info.siteName){
        return 'invalid';
       }
       else if( typeof info.name !=='string' || typeof info.birthYear !=='number' || info.birthYear.toString().length !==4 ) {
        return 'invalid';
       }
 const name=info.name;
 const siteName=info.siteName;
 const birthYear=info.birthYear;
 const splitSiteName = siteName.split('');
    
 // Capitalize the first letter of the site name
 splitSiteName[0] = splitSiteName[0].toUpperCase();
 
 // Join the characters back into a string
 const capitalizedSiteName = splitSiteName.join('');
 const result=capitalizedSiteName +'#' + name +'@' + birthYear;
 return result;

}
const result=password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" })
console.log(result)
