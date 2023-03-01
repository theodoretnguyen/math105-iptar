// price of tokens
const red_token_price = 2;
const blue_token_price = 3;

// Big Hero 6 button
let tix_bg6 = 0;
document.getElementById('button_bg6').addEventListener('click',
  function() {
    document.getElementById('tix_bg6').innerHTML = `${++tix_bg6}`;
  }
);

// Inside Out button
let tix_io = 0;
document.getElementById('button_io').addEventListener('click',
  function() {
    document.getElementById('tix_io').innerHTML = `${++tix_io}`;
  }
);

// show revenues button
let rev_bg6 = 0;
let rev_io = 0;
document.getElementById('button_rev').addEventListener('click',
  function() {
    rev_bg6 = tix_bg6 * 3 * red_token_price + tix_bg6 * 2 * blue_token_price;
    document.getElementById('rev_bg6').innerHTML = `$${rev_bg6}`;

    rev_io = tix_io * 2 * red_token_price + tix_io * 3 * blue_token_price;
    document.getElementById('rev_io').innerHTML = `$${rev_io}`;
  }
);

// reset button
document.getElementById('button_reset').addEventListener('click',
  function() {
    tix_bg6 = 0;
    document.getElementById('tix_bg6').innerHTML = '&nbsp;';
    tix_io = 0;
    document.getElementById('tix_io').innerHTML = '&nbsp;';
    rev_bg6 = 0;
    document.getElementById('rev_bg6').innerHTML = '&nbsp;';
    rev_io = 0;
    document.getElementById('rev_io').innerHTML = '&nbsp;';
  }
);
