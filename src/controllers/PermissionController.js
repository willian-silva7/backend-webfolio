const AddedPortfolioPermission = require('../services/AddedPortfolioPermission');

module.exports = {
  async update(request, response) {
    const { email } = request.body;
    const { portfolio_id } = request.params;

    const addedPermission = new AddedPortfolioPermission();

    const portfolio = await addedPermission.execute({
      portfolio_id,
      email,
    });

    return response.json(portfolio);
  },
};
