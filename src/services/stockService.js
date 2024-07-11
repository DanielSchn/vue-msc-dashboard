import axios from 'axios';

const order = [
  '1Q21',
  '2Q21',
  '3Q21',
  '4Q21',
  '1Q22',
  '2Q22',
  '3Q22',
  '4Q22',
  '1Q23',
  '2Q23',
  '3Q23',
  '4Q23'
];

class StockService {
  constructor() {
    this.apiClient = axios.create({
      // baseURL: 'https://sheetdb.io/api/v1/8duarx5cobu6v'
      baseURL: 'https://sheetdb.io/api/v1/7nxifpgr4sy4b'
    });
  }

  async fetchData(sheetName) {
    try {
      const response = await this.apiClient.get(`?sheet=${sheetName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async getRevenue(position, sheetName) {
    const data = await this.fetchData(sheetName);
    return order.map(key => data[position][key]);
  }
}

export const stockService = new StockService();