if(!localStorage.getItem('username')){
    localStorage.setItem('username', 'Not input username yet');
    document.querySelector('#username').innerHTML = localStorage.getItem('username');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#username').innerHTML = localStorage.getItem('username');
    if(localStorage.getItem('username')!='Not input username yet')
        document.querySelector('#submit').disabled = true;
    else
        document.querySelector('#reset').disabled = true;

    document.querySelector('#reset').onclick = () => {
        localStorage.setItem('username', 'Not input username yet');
        document.querySelector('#username').innerHTML = localStorage.getItem('username');
    };
});

if (localStorage.getItem('username')=='Not input username yet'){
  //document.querySelector('#submit').disabled = false;
  document.addEventListener('DOMContentLoaded', () => {

      // By default, submit button is disabled
      document.querySelector('#submit').disabled = true;

      // Enable button only if there is text in the input field
      document.querySelector('#new_name').onkeyup = () => {
          if (document.querySelector('#new_name').value.length > 0)
              document.querySelector('#submit').disabled = false;
          else
              document.querySelector('#submit').disabled = true;
      };

      document.querySelector('#new-username').onsubmit = () => {
          let un = document.querySelector('#new_name').value

          document.querySelector('#username').innerHTML = un;
          localStorage.setItem('username', un);

          // Clear input field and disable button again
          document.querySelector('#new_name').value = '';
          document.querySelector('#submit').disabled = true;
      };
  });
}
