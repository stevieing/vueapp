<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Manager</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees">
        <td>{{ employee.name }}</td>
        <td>{{ employee.email }}</td>
        <td>{{ employee.manager }}</td>
      </tr>
      <tr :employee="employee">
        <td>
          <!-- Input -->
          <input type="text" v-model="employee.name"><br>
          <!-- Validation errors -->
          <span style="color:red">{{ errors.name }}</span>
        </td>
        <td>
          <!-- Input -->
          <input type="text" v-model="employee.email"><br>
          <!-- Validation errors -->
          <span style="color:red">{{ errors.email }}</span>
        </td>
        <td><input type="checkbox" v-model="employee.manager"></td>
        <!-- button click calls hireEmployee -->
        <td><button @click="hireEmployee">Hire</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'Employees',
  data: function() {
    return {
      employees: [],
      employee: {
        name: '',
        email: '',
        manager: false
      },
      errors: {}
    }
  },
  methods: {
    fetchData: function() {
      this.$http.get('/employees.json').then(response => {

        // get body data
        this.employees = response.body;

      }, response => {
        // error callback
        console.error(response);
      });
    },
    hireEmployee: function () {
      this.$http.post('/employees.json', this.employee).then(response => {

        // get body data
        this.errors = {}
        this.employees.push(response.body);

      }, response => {
        // error callback
        this.errors = response.body.errors;
      });
    }
  },
  mounted: function() {
    this.fetchData()
  }
}
</script>