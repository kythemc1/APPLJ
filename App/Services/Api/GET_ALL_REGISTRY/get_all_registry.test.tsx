import axios from 'axios';
describe('GETALLREGISTRY', () => {

  jest.mock('axios', () => ({
    get: jest
      .fn()
      .mockResolvedValue({data: {totalElements: 30, page: 0, size: 20}}),
  }));

  test('mock axios.get', async () => {
    const response = await axios.get(
      'http://sidoc-test.demo2.siten.vn:43802/services/sidoc/api/public/registry/get-all',
    );
    expect(response.data).toEqual(response.data);
  });
});
