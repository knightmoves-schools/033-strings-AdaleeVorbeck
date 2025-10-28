let firstName = 'Addy';
let jobTitle = 'UX Designer';
let city = 'Maquoketa';

let newJobPost = `Dear ${firstName},
    Thank you for applying for our recent ${jobTitle} position in ${city}.
We will review your application and get back to you shortly.

Sincerely,
Whoever`;

document.getElementById("result").innerHTML = newJobPost;