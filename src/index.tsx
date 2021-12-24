import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model, ModelInstance } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'credit',
          category: 'Desenvolvimento',
          amount: 6000,
          createdAt: new Date(2021, 11, 20),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date(2021, 11, 21),
        },
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      data.createdAt = new Date();

      return schema.create('transaction', data);
    })

    this.del('/transactions/:id', (schema: any, request) => {
      let id = request.params.id;

      return schema.transactions.find(id).destroy();
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

