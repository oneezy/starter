
/*******************************************************************************
    CSS Load/ Unload
*******************************************************************************/
function loadCSS(url)
{
  // Add style tags in the head
  var CSSinject = document.querySelectorAll('.css-inject')[0];
  var styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = url;

  // Fire the loading
  CSSinject.appendChild(styles);
}


function unloadCSS()
{
  // remove styles
  var CSSinject = document.querySelectorAll('.css-inject')[0];

  // Fire the unloading...
  CSSinject.innerHTML = '';
}



/*******************************************************************************
    JS Load/ Unload
*******************************************************************************/
function loadJS(url)
{
  // Add script tags in the body
  var JSinject = document.querySelectorAll('.js-inject')[0];
  var script = document.createElement('script');
  script.src = url;

  // Fire the loading
  JSinject.appendChild(script);
}


function unloadJS()
{
  // Remove scripts
  var JSinject = document.querySelectorAll('.js-inject')[0];

  // Fire the unloading...
  JSinject.innerHTML = '';
}
