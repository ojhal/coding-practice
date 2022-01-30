const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  //   Render HTML Elements to the DOM
  
  ReactDOM.render(JSX, document.getElementById('challenge-node'));

//className camelcase
  const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );