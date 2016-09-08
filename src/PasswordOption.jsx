"use strict";

export default React.createClass({
	render: function() {
		return (
			<div className="option--password">
				<label>{this.props.name}</label> <input onChange={this.props.onChange} defaultValue={this.props.value} type="password" />
			</div>
		);
	}
	
});
