import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyle } from './styles/global';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          value: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          value: 1100,
          createdAt: new Date('2021-02-12 09:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);


