Deferred({
  render(){
    <div>
      <h1>Deferred Loading</h1>
      <p>This component is loaded along with the rest of the app (main.js)</p>
      
      <div style="margin-top: 50px">
      <Other b="defer: true" />
      </div>
    </div>
  }
})