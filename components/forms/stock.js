import React from "react";

class MedicationForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { onSubmit, handleInputChange, formDetails } = this.props;
    return (
      <div>
        <label className="label">Medication</label>

        <div className="field">
          <label className="label">Medicine Name</label>
          <div className="control">
            <input
              name="medicine_name"
              className="input"
              type="text"
              onChange={handleInputChange}
              value={formDetails.medicine_name}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control is-expanded">
            <label className="label">Current Quantity</label>
            <div className="control">
              <label className="label">
                {formDetails.quantity == null ? 0 : formDetails.quantity}
              </label>
            </div>
          </div>

          <div className="control is-expanded">
            <label className="label">Add/ Subtract</label>
            <div className="control">
              <input
                name="quantityChange"
                className="input"
                type="number"
                onChange={handleInputChange}
                value={formDetails.quantityChange}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Notes</label>
          <div className="control">
            <textarea
              name="notes"
              className="textarea"
              placeholder="Textarea"
              onChange={handleInputChange}
              value={formDetails.notes}
            />
          </div>
        </div>

        <div className="level-left">
          <button className="button is-dark is-medium" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export { MedicationForm };
