var React= require('react');

var About=React.createClass({

render: function(){
  return(
    <div>
    <br/><br/><br/><br/><br/><br/><br/>

<h1>This is my About Page.</h1>
  {this.props.params.value}
    </div>
  );
}
});

module.exports=About;
