"use strict";

var partData = [{}, {
	title: "Enter the Team Details",
	subtitle: "All feilds are mandatory",
	buttons: [{
		name: "previous",
		next: false,
		className: "previous action-button",
		value: "Previous"
	}, {
		name: "next",
		next: true,
		className: "next action-button",
		value: "Next"
	}]
}];

var extractData = function extractData(formElements) {
	var retJson = [];
	var arrObj = {};
	for (var i = 1, j = 0; i < formElements.length - 2; i++, j++) {
		arrObj[formElements[i].name] = formElements[i].value;
		if (j == 3) {
			retJson.push(arrObj);
			arrObj = {};
			j = -1;
		}
	}
	return retJson;
};

var FormContainer = React.createClass({
	displayName: "FormContainer",

	getInitialState: function getInitialState() {
		return { currPart: 0 };
	},
	nextPart: function nextPart() {
		if (!this.state.studNum) {
			var studNum = document.getElementById('select_box').value;
			this.setState({ currPart: this.state.currPart, studNum: studNum });
		}
		if (this.state.currPart == 1) {
			var formElements = document.getElementById('msform').elements;
			var postData = extractData(formElements);
			var url = "http://api.nvision.org.in/workshop";
			var THIS = this;
			$.post(url, JSON.stringify(postData), function (resp) {
				console.log(resp)
				if (resp.success) {
					THIS.setState({ success: true });
				} else {
					THIS.setState({ success: false });
				}
			}, "json");
		}
		this.setState({ currPart: this.state.currPart + 1 });
	},
	prevPart: function prevPart() {
		if (this.state.currPart == 1) {
			this.setState({ studNum: 0 });
		}
		this.setState({ currPart: this.state.currPart - 1 });
	},
	render: function render() {
		var formElement;
		switch (this.state.currPart) {
			case 0:
				formElement = React.createElement(SelectStudType, { nextPart: this.nextPart });
				break;
			case 1:
				formElement = React.createElement(FormPart, { partData: partData[this.state.currPart], nextPart: this.nextPart, prevPart: this.prevPart, studNum: this.state.studNum });
				break;
			case 2:
				formElement = React.createElement(SuccessPage, { success: this.state.success, prevPart: this.prevPart });
				break;
		}
		return React.createElement(
			"div",
			{ className: "formContainer" },
			React.createElement(
				"form",
				{ id: "msform" },
				React.createElement(FormProgress, { part: this.state.currPart }),
				formElement
			)
		);
	}
});

var FormProgress = React.createClass({
	displayName: "FormProgress",

	render: function render() {
		var activity = ["active", "", ""];
		for (var i = 0; i < this.props.part; i++) {
			activity[i + 1] = "active";
		}
		return React.createElement(
			"ul",
			{ id: "progressbar" },
			React.createElement(
				"li",
				{ className: activity[0] },
				"Team"
			),
			React.createElement(
				"li",
				{ className: activity[1] },
				"Details"
			),
			React.createElement(
				"li",
				{ className: activity[2] },
				"Done"
			)
		);
	}
});

var FormPart = React.createClass({
	displayName: "FormPart",

	render: function render() {
		var THIS = this;
		var studentTags = [];
		for (var i = 0; i < this.props.studNum; i++) {
			studentTags.push(React.createElement(StudentDetailsForm, { teamNum: i }));
		}
		var buttonTags = this.props.partData.buttons.map(function (button) {
			if (button.next) {
				return React.createElement("input", { type: "button", name: button.name, className: button.className, value: button.value, onClick: THIS.props.nextPart });
			} else {
				return React.createElement("input", { type: "button", name: button.name, className: button.className, value: button.value, onClick: THIS.props.prevPart });
			}
		});
		return React.createElement(
			"fieldset",
			{ className: "formPart" },
			React.createElement(
				"h2",
				{ className: "fs-title" },
				this.props.partData.title
			),
			React.createElement(
				"h3",
				{ className: "fs-subtitle" },
				this.props.partData.subtitle
			),
			studentTags,
			buttonTags
		);
	}
});

var SelectStudType = React.createClass({
	displayName: "SelectStudType",

	render: function render() {
		return React.createElement(
			"fieldset",
			null,
			React.createElement(
				"h2",
				{ className: "fs-title" },
				"Size of Team"
			),
			React.createElement(
				"h3",
				{ className: "fs-subtitle" },
				"Individuals select One"
			),
			React.createElement(
				"select",
				{ id: "select_box" },
				React.createElement(
					"option",
					{ value: "1" },
					"1"
				),
				React.createElement(
					"option",
					{ value: "2" },
					"2"
				),
				React.createElement(
					"option",
					{ value: "3" },
					"3"
				),
				React.createElement(
					"option",
					{ value: "4" },
					"4"
				),
				React.createElement(
					"option",
					{ value: "5" },
					"5"
				)
			),
			React.createElement("br", null),
			React.createElement("br", null),
			React.createElement("input", { type: "button", name: "next", className: "next action-button", value: "Next", onClick: this.props.nextPart })
		);
	}
});

var StudentDetailsForm = React.createClass({
	displayName: "StudentDetailsForm",

	render: function render() {
		return React.createElement(
			"div",
			null,
			"Member ",
			this.props.teamNum + 1,
			":",
			React.createElement("br", null),
			React.createElement("br", null),
			React.createElement("input", { type: "text", name: "fname", placeholder: "Full Name" }),
			React.createElement("input", { type: "text", name: "cname", placeholder: "College Name" }),
			React.createElement("input", { type: "text", name: "phone", placeholder: "Phone" }),
			React.createElement("input", { type: "email", name: "email", placeholder: "Email Id" }),
			React.createElement("br", null),
			React.createElement("br", null)
		);
	}
});

var SuccessPage = React.createClass({
	displayName: "SuccessPage",

	render: function render() {
		if (this.props.success == true) {
			return React.createElement(
				"fieldset",
				null,
				React.createElement(
					"h2",
					{ className: "fs-title" },
					"Success!"
				),
				React.createElement(
					"h3",
					{ className: "fs-subtitle" },
					"We will get into touch with you soon! In the meanwhile, you could call the below numbers for more details"
				),
				React.createElement(
					"p",
					null,
					"Karthik Karnati: +91 8297808380"
				),
				React.createElement(
					"p",
					null,
					"Ashruth Kumar: +91 9010723374"
				),
				React.createElement("input", { type: "button", name: "next", className: "next action-button", value: "Previous", onClick: this.props.prevPart }),
				React.createElement("br", null),
				React.createElement("br", null)
			);
		} else {
			return React.createElement(
				"fieldset",
				null,
				React.createElement(
					"h2",
					{ className: "fs-title" },
					"Oops! Something bad happened."
				),
				React.createElement(
					"h3",
					{ className: "fs-subtitle" },
					"While we have noted it down, We recommend that you try again or call the below numbers"
				),
				React.createElement(
					"p",
					null,
					"Karthik Karnati: +91 8297808380"
				),
				React.createElement(
					"p",
					null,
					"Ashruth Kumar: +91 9010723374"
				),
				React.createElement("input", { type: "button", name: "next", className: "next action-button", value: "Previous", onClick: this.props.prevPart })
			);
		}
	}
});