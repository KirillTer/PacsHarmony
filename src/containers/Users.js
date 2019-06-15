import React from "react";

import Paper from "@material-ui/core/Paper";
import {
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel
} from "@devexpress/dx-react-grid-material-ui";

const Users = () => {
  const columns = [
    { name: "name", title: "Name" },
    { name: "sex", title: "Sex" },
    { name: "city", title: "City" },
    { name: "car", title: "Car" }
  ];
  const rows = [
    { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
    { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
    { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
    { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
    { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
    { sex: "Male", name: "Robert", city: "Las Vegas", car: "Chevrolet Cruze" },
    { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
    { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
    {
      sex: "Male",
      name: "Thomas",
      city: "Rio de Janeiro",
      car: "Honda Accord"
    },
    { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
    { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
    { sex: "Male", name: "Robert", city: "Los Angeles", car: "Honda Accord" },
    { sex: "Male", name: "William", city: "Los Angeles", car: "Honda Civic" },
    { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
  ];
  return (
    <>
      <div className="container">
        <h1>Users</h1>
        <h3>Register and manage accounts</h3>
      </div>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState
            defaultSorting={[{ columnName: "name", direction: "asc" }]}
          />
          <IntegratedSorting />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <PagingState defaultCurrentPage={0} pageSize={10} />
          <IntegratedPaging />
          <Table />
          <TableHeaderRow showSortingControls />
          <TableFilterRow />
          <PagingPanel />
        </Grid>
      </Paper>
    </>
  );
};

export default Users;
