let email = JSON.parse(localStorage.getItem("email"));
let mbl_Number = JSON.parse(localStorage.getItem("phonenumber"));
let Country_code = JSON.parse(localStorage.getItem("Country_code"));

document.getElementById("email").innerText = `
Email Address:  ${email} 
`;
document.getElementById('mobile').innerHTML=`
Contact: ${Country_code} ${mbl_Number}
`

const redirect = () => {
  window.location.href = "./index.html";
};