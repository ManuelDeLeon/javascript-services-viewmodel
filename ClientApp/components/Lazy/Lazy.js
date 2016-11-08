Lazy({
  showOther: false,
  buttonText() {
    return this.showOther() ? "Hide Other" : "Show Other";
  },
  render(){
    <div>
      <h1>Lazy Loading</h1>
      <p>The other component will be loaded when you press the button. See the network tab of your debugging tools.</p>
      <button type="button" b="toggle: showOther, text: buttonText" class="btn" />
      <div style="margin-top: 50px">
      <Other b="defer: showOther" />
      </div>
    </div>
  }
})