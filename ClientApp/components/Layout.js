import { NavMenu } from './NavMenu';

Layout({
  render(){
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-sm-3' >
          <NavMenu />
        </div>
        <div class='col-sm-9'>
          { this.props.body }
        </div>
      </div>
    </div>
  }
})