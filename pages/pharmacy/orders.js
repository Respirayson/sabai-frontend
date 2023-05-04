// code is around 75% similar to that of queue.js
// there is definitely room for refactoring

import React from "react";
import { withAuthSync, logInCheck } from "../../utils/auth";
import axios from "axios";
import moment from "moment";
import Router from "next/router";
import { API_URL } from "../../utils/constants";

class Orders extends React.Component {
  static async getInitialProps(ctx) {
    let authentication = await logInCheck(ctx);
    return authentication;
  }

  constructor() {
    super();

    this.state = {
      visits: [],
      visitsFiltered: [],
      filterString: "",
    };

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    this.onRefresh();
  }

  async onRefresh() {
    let { data: visits } = await axios.get(`${API_URL}/visits?status=started`);
    this.setState({ visits, visitsFiltered: visits });
  }

  onFilterChange(event) {
    let { visits } = this.state;

    let filteredVisits = visits.filter((visit) => {
      let patientId = "";
      // `${visit.patient.village_prefix}${visit.patient.id}`.toLowerCase();

      return patientId.includes(event.target.value.toLowerCase());
    });

    this.setState({ visitsFiltered: filteredVisits });
  }

  renderTableContent() {
    let { visitsFiltered } = this.state;
    let visitsRows = visitsFiltered.map((visit) => {
      let Id = "";
      // `${visit.patient.village_prefix}${visit.patient.id}`;
      let imageUrl = `${API_URL}/${visit.patient.picture}`;
      let fullName = visit.patient.name;

      let action = (
        <button
          className="button is-dark level-item"
          onClick={() => {
            Router.push(`/pharmacy/prescription?id=${visit.patient.id}`);
          }}
        >
          View
        </button>
      );

      return (
        <tr key={visit.id}>
          <td>{Id}</td>
          <td>
            <figure className="image is-96x96">
              <img
                src={imageUrl}
                alt="Placeholder image"
                style={{ height: 96, width: 96, objectFit: "cover" }}
              />
            </figure>
          </td>
          <td>{fullName}</td>
          <td>{action}</td>
        </tr>
      );
    });

    return visitsRows;
  }

  render() {
    return (
      <div
        style={{
          marginTop: 15,
          marginLeft: 25,
          marginRight: 25,
          // position: "relative"
        }}
      >
        <div className="column is-12">
          <h1 style={{ color: "black", fontSize: "1.5em" }}>
            Approve/ Reject Orders
          </h1>
          <div className="field">
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="Search Patient"
                onChange={this.onFilterChange}
              />
            </div>
          </div>
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Full Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.renderTableContent()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withAuthSync(Orders);
