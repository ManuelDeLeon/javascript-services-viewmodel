StateOnUrl({
  onUrl: [ 'firstName', 'lastName' ],
  firstName: '',
  lastName: '',
  greeting() {
    return `Hello ${this.firstName()} ${this.lastName()}`;
  },
  render() {
    <div>
      <h1>State on the URL</h1>
      <p>You can put the state of any property in the URL. Type something and refresh the browser.</p>
      <form style="max-width: 300px">
        <div class="form-group">
          <label >First Name</label>
          <input b="value: firstName" type="text" class="form-control" placeholder="First Name" />
        </div>
        <div class="form-group">
          <label >Last Name</label>
          <input b="value: lastName" type="text" class="form-control" placeholder="Last Name" />
        </div>
        
        <h2 b="text: greeting" />
      </form>
    </div>
  }
})